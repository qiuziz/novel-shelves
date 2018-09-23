import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '../../common/local-storage';
import { tap } from '../../common/tap';
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
        window.scrollTo(0, 0);
        this.location.replaceState(`/book/${bookId}/${chapterId}`);
      });
  }

  changeFontSize(value) {
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
