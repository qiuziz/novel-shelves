import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../core/http/http.service';
import { LocalStorage } from '../../../common/local-storage';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  bookCatalog = [];
  bookId = '';
  book = {};
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) {
    LocalStorage.setItem('headerTitle', '目录');
   }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.getCatalog(this.bookId);
    this.book = LocalStorage.getItem('book') || {};
    document.title = (<any>this.book).name || 'NovelShelves';
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
