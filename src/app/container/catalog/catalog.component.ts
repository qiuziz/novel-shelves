import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  bookCatalog = [];
  bookId = '';
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.getCatalog(this.bookId);
  }

  getCatalog(id): void {
    this.httpService.get('getBookCatalog', {id})
      .subscribe(res => {
        this.bookCatalog = res;
      });
  }

  readChapter(chapterId): void {
    this.router.navigate([`/book/${this.bookId}/${chapterId}`]);
  }

}
