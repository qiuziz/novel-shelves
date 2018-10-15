import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked, HostListener, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '@common/local-storage';
import {Location} from '@angular/common';
import { NzMessageService, NzDrawerService, NzDrawerRef } from 'ng-zorro-antd';
import { Book } from '@common/ts-type';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.less']
})
export class ShelvesComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:max-line-length
  public get shelves() {
    return LocalStorage.getItem('shelves') || [];
  }
  visible = true;
  @ViewChild('drawerTitle') drawerTitle;
  @ViewChild('drawerBody') drawerBody;

  bookOptions = {
    display: 'flex',
    'list-style': 'none',
    'align-items': 'center',
    'justify-content': 'space-around',
    margin: 0,
    padding: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private el: ElementRef,
    private message: NzMessageService,
    private drawerService: NzDrawerService,
    private location: Location
   ) {
     LocalStorage.setItem('headerTitle', '书架');
   }

  ngOnInit() {
    this.getShelvesBook();
  }

  getShelvesBook() {
    this.httpService.get('getShelvesBook').subscribe(res => {
      LocalStorage.setItem('shelves', res);
    });
  }

  showDetail(event, book) {
    event.stopPropagation();
    this.drawerService.create<NzDrawerBodyComponent, {book: object}, object>({
      nzClosable: false,
      nzContent: NzDrawerBodyComponent,
      nzPlacement: 'bottom',
      nzHeight: 200,
      nzZIndex: 90,
      nzContentParams: {
        book: book
      }
    });
  }

  close() {
    this.visible = false;
  }

  reading(book) {
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

  ngOnDestroy() {

  }
}

@Component({
  selector: 'app-drawer-body',
  styleUrls: ['./shelves.component.less'],
  template: `
    <div class="book-detail" >
      <div class="cover">
        <img [src]="book.cover || ''" [alt]="book.name">
      </div>
      <div class="detail">
        <div class="name">{{book.name}}</div>
        <div class="info">{{book.author}}</div>
      </div>
      <button nz-button class="btn" (click)="goBook(book)">详情</button>
    </div>
    <ul class="book-options">
      <li (click)="goBookCatalog(book)">
        <i class="novel novel-catalog"></i>
        <p>目录</p>
      </li>
      <li>
        <i class="novel novel-download"></i>
        <p>缓存</p>
      </li>
      <li (click)="delete(book)">
        <i class="novel novel-delete"></i>
        <p>删除</p>
      </li>
    </ul>
  `
})
export class NzDrawerBodyComponent {
  @Input() book: Book;

  constructor(
    private drawerRef: NzDrawerRef<string>,
    private message: NzMessageService,
    private httpService: HttpService,
    private router: Router
  ) {
  }

  close(): void {
    this.drawerRef.close();
  }

  goBook(book: object): void {
    this.close();
    this.router.navigate([`/book/${(<any>book).id}`]);
  }

  goBookCatalog(book: object): void {
    this.close();
    this.router.navigate([`/book/${(<any>book).id}/catalog`]);
  }

  delete(book) {
    this.httpService.get('shelvesOptions', {type: 'delete', bookId: book.id})
    .subscribe(res => {
      if (res.status) {
        this.message.error(res.msg);
      } else {
        this.close();
        this.httpService.get('getShelvesBook').subscribe(shelves => {
          LocalStorage.setItem('shelves', shelves);
        });
      }
    });
  }
}
