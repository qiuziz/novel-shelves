/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 18:16:48
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-19 21:30:54
 */

import { Component, Input } from '@angular/core';
import { Novels } from '../../novels';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent {
  @Input() bookList: Novels[];
  constructor(private router: Router) { }

  lookBookDetail(data): void {
    this.router.navigate([`/book/${data.id}`]);
  }

}
