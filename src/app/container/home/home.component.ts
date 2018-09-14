import { Component } from '@angular/core';
import { SearchService } from '../../search.service';
import { Novels } from '../../novels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
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
