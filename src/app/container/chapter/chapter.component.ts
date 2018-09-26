import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '../../common/local-storage';
import { touch, move, click } from '../../common/touch';
import {Location} from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, OnDestroy {
  chapter = {};
  pageConfig = false;
  fontSize = LocalStorage.getItem('fontSize') || 16;
  pageSetting = false;
  day = false;
  page = LocalStorage.getItem('page') || 0;
  pageSize = 0;
  transformX = 0;
  moveStart = 0;
  moveDistance = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private el: ElementRef,
    private location: Location
   ) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];
    this.getChapter(bookId, chapterId);
    document.body.style.backgroundColor = '#c4b395';

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
          document.body.style.overflow = this.pageConfig ? 'hidden' : '';
        } else if (this.isClickLeftTop(x, y)) {
          console.log('点击屏幕左上');
          this.next('prev');
        } else {
          this.next(this.moveDistance >= 0 ? '' : 'prev');
        }
      });
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
    this.httpService.get('getChapter', {bookId, chapterId})
      .subscribe(res => {
        this.chapter = res;
        this.page =  LocalStorage.getItem('page') || 0;
        if (type === 'next') {
          this.page =  0;
        }
        if (type === 'prev') {
          this.page =  this.pageSize;
        }
        if (!(<any>this.chapter).content) {
          (<any>this.chapter).content = `\n\t\t\t<div>当前章节暂无内容</div>`;
        }
        this.pageTransform(this.page);
        this.adjustPageSize();
        window.scrollTo(0, 0);
        this.location.replaceState(`/book/${bookId}/${chapterId}`);
      });
  }

  changeFontSize(value) {
    this.el.nativeElement.querySelector('.inner').style.fontSize = value + 'px';
    LocalStorage.setItem('fontSize', value);
    this.adjustPageSize();
  }

  pageSet(event) {
    this.pageSetting = !this.pageSetting;
  }

  goCatalog() {
    this.router.navigate([`/book/${(<any>this.chapter).bookId}/catalog`]);
  }

  goBack() {
    this.location.back();
  }

  dayNight() {
    this.day = !this.day;
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
  }

  pageTransform(page) {
    console.log(this.page, this.pageSize);
    LocalStorage.setItem('page', page);
    this.transformX = (window.innerWidth - 16) * page;
    this.el.nativeElement.querySelector('.inner').style.transform = `translateX(-${this.transformX}px)`;
  }

  adjustPageSize() {
    if (this.pageSize === 0) {
      this.pageSize = Math.floor(document.body.querySelector('.inner').scrollWidth / (window.innerWidth - 16));
    }
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
