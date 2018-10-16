import { Component, OnInit, ViewChild } from '@angular/core';
import { Novels } from '../../novels';
import { HttpService } from '../../core/http/http.service';
import { GlobalsService } from '../../common/globals.service';
import { LocalStorage } from '../../common/local-storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  value: string;
  bookList: Novels[] = [];
  @ViewChild('searchInput') searchInput;
  constructor(
    private httpService: HttpService,
    private globals: GlobalsService) {
      LocalStorage.setItem('headerTitle', '搜索');
    }

  ngOnInit() {
    this.bookList = LocalStorage.getItem('bookList') || [];
    this.value = LocalStorage.getItem('serachKey');
  }

  search(): void {
    this.httpService.get('search', {name: this.value}).subscribe(res => {
      this.bookList = res;
      LocalStorage.setItem('bookList', res);
      LocalStorage.setItem('serachKey', this.value);
    });
  }

  searchFocus(): void {
    window.scrollTo(0, 130);
  }

  onEnter(event) {
    this.search();
    this.searchInput.nativeElement.blur();
  }
}
