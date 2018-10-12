import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked, HostListener, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '../../common/local-storage';
import { touch, move, click } from '../../common/touch';
import {Location} from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime, tap, map } from 'rxjs/operators';
import { NzMessageService, NzDrawerService, NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.less']
})
export class ShelvesComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:max-line-length
  shelves = LocalStorage.getItem('shelves') || [];
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
   ) { }

  ngOnInit() {
    this.getShelvesBook();
  }

  getShelvesBook() {
    this.httpService.get('getShelvesBook').subscribe(res => {
      this.shelves = res;
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
      <li>
        <i class="novel novel-delete"></i>
        <p>删除</p>
      </li>
    </ul>
  `
})
export class NzDrawerBodyComponent {
  @Input() book = {};

  constructor(
    private drawerRef: NzDrawerRef<string>,
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
}
