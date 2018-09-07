import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Novels } from './novels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  value: string;
  bookList: Novels[] = [];
  isSpinning = false;

  constructor(private searchService: SearchService) { }

  search(): void {
    this.isSpinning = true;
    this.searchService.getNovels(this.value).subscribe(res => {
      this.bookList = res;
      this.isSpinning = false;
    });
  }

  searchFocus(): void {
    window.scrollTo(0, 130);
  }

  onEnter(event) {
    this.search();
  }
}
