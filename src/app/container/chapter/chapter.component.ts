import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from '../../core/http/http.service';
import { fromEvent, Observable, merge } from 'rxjs';
import { LocalStorage } from '../../common/local-storage';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, AfterViewInit, OnDestroy {
  chapter = {};
  pageConfig = false;
  fontValue = 16;
  fontSize = (LocalStorage.getItem('fontSize') || 16) + 'px';

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
    merge(fromEvent(document, 'click'), fromEvent(document, 'touch'))
      .subscribe(event => {
        console.log(event);
        if (Math.abs(document.documentElement.clientHeight / 2 - (<any>event).clientY) <= 30) {
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

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
