import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'search', loadChildren: './search/search.module#SearchModule', data: { title: 'NovelShveles'} },
      { path: 'shelves', loadChildren: './shelves/shelves.module#ShelvesModule', data: { title: 'LocalStorage'} },
      { path: 'book', loadChildren: './book/book.module#BookModule', data: { title: 'LocalStorage'} },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContainerRoutingModule {}
