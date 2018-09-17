import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  bookCatalog = [];

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getCatalog(id);
  }

  getCatalog(id): void {
    this.bookService.getBookCatalog(id)
      .subscribe(res => {
        this.bookCatalog = res;
      });
  }

}
