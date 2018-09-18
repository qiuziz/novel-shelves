import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BookService } from '../book-list/book.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit, AfterViewInit, OnDestroy {
  chapter = {};

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];
    this.getChapter(bookId, chapterId);
    document.body.style.backgroundColor = '#c4b395';
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
    this.bookService.getChapter(bookId, chapterId)
      .subscribe(res => {
        this.chapter = res;
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = '';
  }
}
