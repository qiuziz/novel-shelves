import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less']
})
export class BookDetailComponent implements OnInit {
  book = {};
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getBookDetail(id);
  }

  getBookDetail(id): void {
    this.httpService.get('getBook', {id}).subscribe(res => {
      this.book = res;
      console.log(this.book);
    });
  }
}
