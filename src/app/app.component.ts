import { Component, ChangeDetectorRef, AfterViewChecked, OnInit } from '@angular/core';
import { GlobalsService } from './common/globals.service';
import { SwUpdate } from '@angular/service-worker';
import { HttpService } from '@core/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewChecked {
  constructor(
    private changeRef: ChangeDetectorRef,
    private httpService: HttpService,
    private swUpdate: SwUpdate,
    public globals: GlobalsService) { }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
          this.swUpdate.activateUpdate().then(() => window.location.reload());
      });
      this.swUpdate.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
    }

  }
  ngAfterViewChecked() {
    this.changeRef.detectChanges();
  }
}
