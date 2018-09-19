import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from '../../core/http/http.service';
import { fromEvent, Observable, merge } from 'rxjs';
import { LocalStorage } from '../../common/local-storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, AfterViewInit, OnDestroy {
  chapter = {};
  pageConfig = false;
  fontSize = LocalStorage.getItem('fontSize') || 16;
  pageSetting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private el: ElementRef
   ) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];
    this.getChapter(bookId, chapterId);
    document.body.style.backgroundColor = '#c4b395';
    const click = fromEvent(document, 'touchstart').pipe(map(event => (<any>event).changedTouches[0].clientY));
    const touch = fromEvent(document, 'click').pipe(map(event => (<any>event).clientY));
    merge(touch, click)
      .subscribe(y => {
        console.log(y);
        if (this.pageConfig) {
          document.body.style.overflow = 'hidden';
        }
        if (Math.abs(document.documentElement.clientHeight / 2 - y) <= 50) {
          console.log('点击屏幕中间');
          this.pageConfig = !this.pageConfig;
        }
      });
  }


  ngAfterViewInit() {

  this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      const bookId = this.route.snapshot.params['id'],
        chapterId = this.route.snapshot.params['chapterId'];
      this.getChapter(bookId, chapterId);
    });
}

  getChapter(bookId, chapterId): void {
    this.httpService.get('getChapter', {bookId, chapterId})
      .subscribe(res => {
        this.chapter = res;
        window.scrollTo(0, 0);
      });
  }

  changeFontSize(value) {
    console.log(value);
    this.el.nativeElement.querySelector('.content').style.fontSize = value + 'px';
    LocalStorage.setItem('fontSize', value);
  }

  stop(event) {
    event.preventDefault();
  }

  pageSet() {
    this.pageSetting = !this.pageSetting;
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
