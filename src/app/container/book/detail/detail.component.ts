import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '@core/http/http.service';
import { LocalStorage } from '../../../common/local-storage';
import { NzMessageService } from 'ng-zorro-antd';
import { Book, Chapter } from '@common/ts-type';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class BookDetailComponent implements OnInit {
  book: Book = {isAdd: 0};
  chapter: Chapter;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private message: NzMessageService,
    private route: ActivatedRoute) {
      LocalStorage.setItem('headerTitle', '详情');
    }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getBookDetail(id);
  }

  getBookDetail(id): void {
    const book = LocalStorage.getItem('book') || {};
    if (book.id === parseInt(id, 10)) {
      this.book = book;
    } else {
      this.httpService.get('getBook', {id}).subscribe(res => {
        this.book = res;
        LocalStorage.setItem('book', this.book);
      });
    }
  }

  read(): void {
    const book = LocalStorage.getItem('book');
    const chapter = LocalStorage.getItem('chapter' + book.id);

    if (chapter) {
      this.router.navigate([`/book/${book.id}/${chapter.id}`]);
    } else if (book.catalog && book.catalog.length > 0) {
      this.router.navigate([`/book/${book.id}/${book.catalog[0].id}`]);
    } else {
      this.httpService.get('getBookCatalog', {id: book.id})
        .subscribe(res => {
          if (res[0] && res[0].id) {
            this.router.navigate([`/book/${book.id}/${res[0].id}`]);
          } else {
            this.message.error(`暂无内容`);
          }
        });
    }
  }

  addShelves() {
    const book = LocalStorage.getItem('book') || {};
    if (book.isAdd) {
      return;
    }
    this.httpService.get('shelvesOptions', {type: 'add', bookId: book.id})
      .subscribe(res => {
        if (res.status) {
          this.message.error(res.msg);
        } else {
          this.book = res;
          LocalStorage.setItem('book', this.book);
        }
      });
  }
}
