import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@components/layout/layout.module';

const COMPONENTS = [
  HomeComponent,
  BookListComponent
];

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class SearchModule { }
