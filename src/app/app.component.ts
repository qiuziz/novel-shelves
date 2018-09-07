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
  bookList: Novels[];

  constructor(private searchService: SearchService) { }

  search(): void {
    this.searchService.getNovels(this.value).subscribe(res => {
      this.bookList = res;
    });
  }

  searchFocus(): void {
    window.scrollTo(0, 130);
  }
}
