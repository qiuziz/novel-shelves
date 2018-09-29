import { NgModule } from '@angular/core';
import { ShelvesComponent, NzDrawerBodyComponent } from './shelves.component';
import { ShelvesRoutingModule } from './shelves-routing.module';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS = [
  ShelvesComponent,
  NzDrawerBodyComponent
];

@NgModule({
  imports: [
    ShelvesRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  entryComponents: [
    NzDrawerBodyComponent
  ]
})
export class ShelvesModule { }
