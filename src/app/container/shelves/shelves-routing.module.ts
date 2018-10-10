import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelvesComponent } from './shelves.component';

const routes: Routes = [
  {
    path: '',
    component: ShelvesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelvesRoutingModule { }

