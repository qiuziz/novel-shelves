import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent implements OnInit {
  book = {};
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getBookDetail(id);
  }

  getBookDetail(id): void {
    this.bookService.getBook(id).subscribe(res => {
      this.book = res;
      console.log(this.book);
    });
  }
}
