import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './detail/detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [
  {
    path: 'book/:id',
      children: [
        {
          path: '',
          component: BookDetailComponent
        },
        {
          path: 'catalog',
          component: CatalogComponent
        },
        {
          path: ':chapterId',
          component: ChapterComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

