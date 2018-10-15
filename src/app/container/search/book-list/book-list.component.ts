/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 18:16:48
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-12 17:13:04
 */

import { Component, Input } from '@angular/core';
import { Novels } from '../../../novels';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../common/local-storage';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent {
  @Input() bookList: Novels[];
  constructor(private router: Router) { }

  lookBookDetail(data): void {
    LocalStorage.setItem('title', data.name);
    this.router.navigate([`/book/${data.id}`]);
  }

}
