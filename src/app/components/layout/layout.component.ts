import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  NavigationError,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TitleService } from '../../common/title.service';

@Component({
  selector: 'layout-default',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  isFetching = false;

  constructor(
    router: Router,
    private message: NzMessageService,
    private titleService: TitleService
  ) {
    this.titleService.init();
    // scroll to top in change page
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        this.message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    });
  }
}
