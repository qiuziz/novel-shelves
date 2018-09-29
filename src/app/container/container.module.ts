import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from './search/search.module';
import { ShelvesModule } from './shelves/shelves.module';
import { BookModule } from './book/book.module';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    SearchModule,
    ShelvesModule,
    BookModule
  ]
})
export class ContainerModule { }
