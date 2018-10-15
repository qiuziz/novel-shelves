import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { GlobalsService } from './common/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewChecked {
  constructor(private changeRef: ChangeDetectorRef, public globals: GlobalsService) { }

  ngAfterViewChecked() {
    this.changeRef.detectChanges();
  }
}
