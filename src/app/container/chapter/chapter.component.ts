import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.less']
})
export class ChapterComponent implements OnInit {
  chapter = {};

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params['id'],
    chapterId = this.route.snapshot.params['chapterId'];
    this.getChapter(bookId, chapterId);
  }

  getChapter(bookId, chapterId): void {
    this.bookService.getChapter(bookId, chapterId)
      .subscribe(res => {
        this.chapter = res;
      });
  }

}
