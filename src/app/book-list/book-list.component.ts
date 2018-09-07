/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 18:16:48
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-07 09:43:51
 */

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Novels } from '../novels';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit, OnChanges {
   @Input() bookList: Novels[];
  constructor() { }

  ngOnInit() {
    console.log(this.bookList);
  }

  ngOnChanges(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.bookList);
  }

}
