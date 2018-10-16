import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../../common/local-storage';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public get title() {
    return LocalStorage.getItem('headerTitle');
  }

  public get noHeaderBack() {
    return this.location.path() !== '/shelves';
  }

  constructor(private router: Router, public location: Location) { }

  ngOnInit() {
    // const book = LocalStorage.getItem('book') || {};
    // this.title = book.name || '';
  }

  search() {
    this.router.navigate([`/search`]);
  }

}
