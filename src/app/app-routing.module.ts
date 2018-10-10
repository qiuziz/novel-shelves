import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '',
    loadChildren: './container/container.module#ContainerModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
