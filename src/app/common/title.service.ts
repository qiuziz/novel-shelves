/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-10-10 16:08:43
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-15 17:14:09
 */


import { Injectable } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LocalStorage } from './local-storage';

const APP_TITLE = 'NovelShelves';
const SEPARATOR = ' > ';

@Injectable()
export class TitleService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}

  init() {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      map((data) => {
        return ((data.title && data.title === 'LocalStorage') ? LocalStorage.getItem('title') : data.title) || APP_TITLE;
      })
    ).subscribe(title => {
      console.log(title);
      this.titleService.setTitle(`${title}`);
    });
  }
}
