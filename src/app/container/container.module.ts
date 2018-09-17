import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    ContainerRoutingModule,
    NgZorroAntdModule,
    CommonModule,
    FormsModule
  ]
})
export class ContainerModule { }
