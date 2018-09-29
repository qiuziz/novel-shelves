import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TabbarComponent } from '@components/tabbar/tabbar.component';

const COMPONENTS = [
  HomeComponent,
  BookListComponent,
  TabbarComponent
];

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class SearchModule { }
