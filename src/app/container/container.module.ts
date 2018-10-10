import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from './search/search.module';
import { ShelvesModule } from './shelves/shelves.module';
import { BookModule } from './book/book.module';
import { ContainerComponent } from './container.component';
import { HomeComponent } from './search/home.component';
import { ContainerRoutingModule } from './container-routing.module';
import { BookListComponent } from './search/book-list/book-list.component';
import { LayoutModule } from '@components/layout/layout.module';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    SharedModule,
    // SearchModule,
    // ShelvesModule,
    // BookModule,
    LayoutModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
