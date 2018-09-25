import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '../../common/local-storage';
import { tap, move } from '../../common/tap';
import {Location} from '@angular/common';

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
  page = 0;
  pageSize = 0;

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
    tap(document, event => {
      const x = (<any>event).changedTouches[0].pageX;
      const y = (<any>event).changedTouches[0].pageY - window.scrollY;
      if (this.isClickCenter(x, y)) {
        console.log('点击屏幕中间');
        this.pageConfig = !this.pageConfig;
        document.body.style.overflow = this.pageConfig ? 'hidden' : '';
      }
    });

    tap(this.el.nativeElement.querySelector('.content'), event => {
      this.next();
    });

    move(this.el.nativeElement.querySelector('.content'), event => {
      this.next('prev');
    });
  }

  isClickCenter (x, y) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const isXCenter = ( x < (centerX + 40) ) && ( x > (centerX - 40) );
    const isYCenter = ( y < (centerY + 100) ) && ( y > (centerY - 100) );
    return isXCenter && isYCenter;
  }

  getChapter(bookId, chapterId): void {
    this.httpService.get('getChapter', {bookId, chapterId})
      .subscribe(res => {
        this.chapter = res;
        this.page = 0;
        if (!(<any>this.chapter).content) {
          (<any>this.chapter).content = `\n\t\t\t<div>当前章节暂无内容</div>`;
        }
        this.pageTransform();
        window.scrollTo(0, 0);
        this.location.replaceState(`/book/${bookId}/${chapterId}`);
      });
  }

  changeFontSize(value) {
    this.el.nativeElement.querySelector('.content').style.fontSize = value + 'px';
    LocalStorage.setItem('fontSize', value);
  }

  pageSet() {
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
    if (this.pageSize === 0) {
      this.pageSize = Math.floor(document.body.querySelector('.content').scrollWidth / (window.innerWidth - 16));
    }
    if (this.page === this.pageSize) {
      this.getChapter((<any>this.chapter).bookId, (<any>this.chapter).next);
      return;
    }
    type === 'prev' ? this.page-- : this.page++;
    this.pageTransform();
  }

  pageTransform() {
    const x = (window.innerWidth - 16) * this.page;
    this.el.nativeElement.querySelector('.content').style.transform = `translateX(-${x}px)`;
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
