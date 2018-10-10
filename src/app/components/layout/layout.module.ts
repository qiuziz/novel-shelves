import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TitleService } from '../../common/title.service';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { TabbarComponent } from './tabbar/tabbar.component';

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  TabbarComponent
];

@NgModule({
  imports: [SharedModule],
  providers: [TitleService],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
