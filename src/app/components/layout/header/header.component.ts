import { Component } from '@angular/core';
import { Novels } from '../../../novels';
import { HttpService } from '../../../core/http/http.service';
import { GlobalsService } from '../../../common/globals.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  tabs = [
    {title: '书架', icon: 'shelf', path: '/shelves'},
    {title: '我的', icon: 'user'}
  ];

  constructor(private httpService: HttpService, private globals: GlobalsService) { }

}
