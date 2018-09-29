import { NgModule } from '@angular/core';
import { BookDetailComponent } from './detail/detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ChapterComponent } from './chapter/chapter.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS = [
  BookDetailComponent,
  CatalogComponent,
  ChapterComponent
];

@NgModule({
  imports: [
    BookRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class BookModule { }
