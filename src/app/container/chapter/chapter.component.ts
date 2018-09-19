import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from '../../core/http/http.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, AfterViewInit, OnDestroy {
  chapter = {};
  pageConfig = false;

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];
    this.getChapter(bookId, chapterId);
    document.body.style.backgroundColor = '#c4b395';

    fromEvent(document, 'click')
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

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
