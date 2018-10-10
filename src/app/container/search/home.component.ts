import { Component, OnInit } from '@angular/core';
import { Novels } from '../../novels';
import { HttpService } from '../../core/http/http.service';
import { GlobalsService } from '../../common/globals.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  value: string;
  bookList: Novels[] = [];

  constructor(
    private httpService: HttpService,
    private globals: GlobalsService) { }

  ngOnInit() {
  }
  search(): void {
    this.httpService.get('search', {name: this.value}).subscribe(res => {
      this.bookList = res;
    });
  }

  searchFocus(): void {
    window.scrollTo(0, 130);
  }

  onEnter(event) {
    this.search();
  }
}
