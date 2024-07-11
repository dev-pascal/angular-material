import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuHorizontalComponent } from './menu-horizontal.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    MenuHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    MenuHorizontalComponent
  ]
})

export class MenuHorizontalModule { }
