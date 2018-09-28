import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ChapterComponent } from './chapter/chapter.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { TabbarComponent } from '../components/tabbar/tabbar.component';
import { ShelvesComponent, NzDrawerBodyComponent } from './shelves/shelves.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    HomeComponent,
    CatalogComponent,
    ChapterComponent,
    ContainerComponent,
    TabbarComponent,
    ShelvesComponent,
    NzDrawerBodyComponent
  ],
  imports: [
    ContainerRoutingModule,
    NgZorroAntdModule,
    CommonModule,
    FormsModule
  ],
  entryComponents: [
    NzDrawerBodyComponent
  ]
})
export class ContainerModule { }
