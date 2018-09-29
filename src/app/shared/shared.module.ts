import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// region: third libs
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

const THIRDMODULES = [
  NgZorroAntdModule
];

const COMPONENTS = [];
const DIRECTIVES = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
})
export class SharedModule { }
