import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './container/book-list/book-detail/book-detail.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',
    loadChildren: './container/container.module#ContainerModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
