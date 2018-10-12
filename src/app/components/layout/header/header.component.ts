import { Component, OnInit } from '@angular/core';
import { Novels } from '../../../novels';
import { HttpService } from '../../../core/http/http.service';
import { GlobalsService } from '../../../common/globals.service';
import { LocalStorage } from '../../../common/local-storage';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public get title() {
    return LocalStorage.getItem('headerTitle');
  }

  constructor(private httpService: HttpService, private globals: GlobalsService) { }

  ngOnInit() {
    // const book = LocalStorage.getItem('book') || {};
    // this.title = book.name || '';
  }

}
