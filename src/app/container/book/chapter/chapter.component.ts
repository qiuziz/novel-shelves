import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../../core/http/http.service';
import { LocalStorage } from '../../../common/local-storage';
import { touch, move, click } from '../../../common/touch';
import {Location} from '@angular/common';
import { fromEvent, of, Observable, zip } from 'rxjs';
import { throttleTime, debounceTime, tap, map, mergeMap } from 'rxjs/operators';
import { GlobalsService } from '../../../common/globals.service';
import { Book, Chapter } from '@common/ts-type';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, OnDestroy {
  chapter: Chapter = {};
  pageConfig = false;
  fontSize = LocalStorage.getItem('fontSize') || 16;
  pageSetting = false;
  day = LocalStorage.getItem('day') || false;
  page = LocalStorage.getItem('page') || 0;
  pageSize = 0;
  transformX = 0;
  moveStart = 0;
  moveDistance = 0;
  book: Book = {};
  bindPreventMove;
  maskTitle = '';
  progressSet = false;
  catalog = [];
  currentChapter = 1;
  allChapter = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private el: ElementRef,
    private globals: GlobalsService,
    private location: Location
   ) {   }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];



    this.getChapter(bookId, chapterId);

    this.getBookCatalog(bookId);

    this.changeStyle();

    this.bindPreventMove = (e: Event) => { e.preventDefault(); };
    document.body.addEventListener('touchmove', this.bindPreventMove, {passive: false}); // passive 参数不能省略，用来兼容ios和android

    fromEvent(this.el.nativeElement.querySelector('.chapter'), 'touchstart')
    .subscribe(event => {
      this.moveDistance = 0;
      this.moveStart = (<any>event).changedTouches[0].clientX;
    });

    fromEvent(this.el.nativeElement.querySelector('.chapter'), 'touchmove')
      .subscribe(event => {
        if ((<any>event).target.className === 'inner' || (<any>event).target.className === 'content') {
          this.moveDistance = this.moveStart - (<any>event).changedTouches[0].clientX;
          this.el.nativeElement.querySelector('.inner').style.transform = `translateX(-${this.transformX + this.moveDistance}px)`;
        }
      });
    fromEvent(this.el.nativeElement.querySelector('.chapter'), 'touchend')
      .pipe(map(event => {
        const x = (<any>event).changedTouches[0].pageX;
        const y = (<any>event).changedTouches[0].pageY - window.scrollY;
        return (this.pageConfig && !this.isClickCenter(x, y)) ? {stop: true} : event;
      }))
      .subscribe(event => {
        if ((<any>event).stop) {
          return;
        }
        const x = (<any>event).changedTouches[0].pageX;
        const y = (<any>event).changedTouches[0].pageY - window.scrollY;
        console.log(x, y);
        if (this.isClickCenter(x, y) && this.moveDistance === 0) {
          console.log('点击屏幕中间');
          this.pageConfig = !this.pageConfig;
          if (!this.pageConfig) {
            this.pageSetting = false;
          }
        } else if (this.isClickLeftTop(x, y)) {
          console.log('点击屏幕左上');
          this.next('prev');
        } else {
          this.next(this.moveDistance >= 0 ? '' : 'prev');
        }
      });
  }

  loadData(bookId, chapterId, type?: string): Observable<any> {
    return this.httpService.get('loadData', {jsonName: `${bookId}.json`})
    .pipe(mergeMap(res => {
      if (res && res[chapterId]) {
        console.log(111);
        return of(res[chapterId]);
      }
      console.log(222);
      return this.httpService.get('getChapter', {bookId, chapterId});
    }));
  }

  isClickCenter (x, y) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const isXCenter = ( x < (centerX + 40) ) && ( x > (centerX - 40) );
    const isYCenter = ( y < (centerY + 100) ) && ( y > (centerY - 100) );
    return isXCenter && isYCenter;
  }

  isClickLeftTop (x, y) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const isXLeft = x < (centerX);
    const isYTop = y < (centerY - 40);
    return isXLeft && isYTop;
  }

  getChapter(bookId, chapterId, type?: string): void {
    this.el.nativeElement.querySelector('.inner').style.transition = '';

    const chapter = LocalStorage.getItem('chapter' + chapterId);
    if (chapter && parseInt(chapterId, 10) === chapter.id && chapter.content) {
      this.chapter = chapter;
      LocalStorage.setItem('chapter' + bookId, this.chapter);
      this.location.replaceState(`/book/${bookId}/${chapterId}`);
      this.adjustPageSize(type);

      this.getNextChapter(bookId, this.chapter.next);

      return;
    }

    this.loadData(bookId, chapterId, type)
      .subscribe(res => {
        this.chapter = res;

        this.page =  0;
        this.adjustPageSize(type);

        if (!this.chapter.content) {
          this.chapter.content = `\n\t\t\t<div>当前章节暂无内容</div>`;
        }
        LocalStorage.setItem('chapter' + chapterId, this.chapter);

        this.location.replaceState(`/book/${bookId}/${chapterId}`);

        this.getNextChapter(bookId, this.chapter.next);
      });
  }

  getBookCatalog(bookId) {
    const book = LocalStorage.getItem('book') || {};
    if (!(book.catalog && book.catalog.length > 0)) {
      this.httpService.get('getBookCatalog', {id: bookId})
      .subscribe(res => {
        this.catalog = res;
      });
    }
  }

  getNextChapter(bookId, chapterId) {
    this.globals.loadOnce = false;
    this.loadData(bookId, chapterId)
      .subscribe(res => {
        LocalStorage.setItem('chapter' + chapterId, res);
        LocalStorage.removeItem('chapter' + (chapterId - 10));
        this.globals.loadOnce = true;
      });
  }

  changeFontSize(value) {
    this.el.nativeElement.querySelector('.inner').style.fontSize = value + 'px';
    LocalStorage.setItem('fontSize', value);
    this.adjustPageSize();
  }

  changeProgress(value) {
    const bookId = this.route.snapshot.params['id'];
    this.getChapter(bookId, this.catalog[value].id);
  }


  pageSet(event) {
    this.pageSetting = !this.pageSetting;
    this.progressSet = false;
  }

  goCatalog() {
    this.router.navigate([`/book/${(<any>this.chapter).bookId}/catalog`]);
  }

  goBack() {
    this.location.back();
  }

  dayNight() {
    this.day = !this.day;
    this.changeStyle();
    LocalStorage.setItem('day', this.day);
  }

  changeStyle() {
    document.body.style.backgroundColor = this.day ? '#1a1a1a' : '#c4b395';
    this.el.nativeElement.querySelector('.page-header').style.backgroundColor = this.day ? '#1a1a1a' : '#c4b395';
    document.body.style.color = this.day ? 'rgba(255,255,255,.5)' : '#33373d';
    this.el.nativeElement.querySelector('.page-header').style.color = this.day ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.4)';
  }

  next(type?: string) {
    if (this.page === 0 && type === 'prev') {
      if (!(<any>this.chapter).prev) {
        console.log('当前已是第一章');
        return;
      }
      this.getChapter((<any>this.chapter).bookId, (<any>this.chapter).prev, 'prev');
      return;
    }
    type === 'prev' ? this.page-- : this.page++;
    if (this.page > this.pageSize) {
      this.getChapter((<any>this.chapter).bookId, (<any>this.chapter).next, 'next');
      return;
    }
    this.pageTransform(this.page);
    this.el.nativeElement.querySelector('.inner').style.transition = 'transform .1s';
  }

  pageTransform(page) {
    console.log(this.page, this.pageSize);
    LocalStorage.setItem('page', page);
    this.transformX = (window.innerWidth - 16) * page;
    this.el.nativeElement.querySelector('.inner').style.transform = `translateX(-${this.transformX}px)`;
  }

  adjustPageSize(type?: string) {
    setTimeout(() => {
      this.pageSize = Math.floor(document.body.querySelector('.inner').scrollWidth / (window.innerWidth - 16));
      if (type === 'next') {
        this.page =  0;
      }
      if (type === 'prev') {
        this.page =  this.pageSize;
      }
      if (this.page > this.pageSize) {
        this.page = this.pageSize;
      }
      this.pageTransform(this.page);
    }, 0);
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
    document.body.removeEventListener('touchmove', this.bindPreventMove);
  }
}
