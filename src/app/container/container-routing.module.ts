import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { HomeComponent } from './search/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'search', loadChildren: './search/search.module#SearchModule' },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContainerRoutingModule {}
