import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'book/:id',
    children: [
      {
        path: '',
        component: BookDetailComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent,
        data: {isContent: true}
      }
    ]
  },
  { path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContainerRoutingModule {}
