import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes';
import { LayoutComponent } from './layout';
import { ToolbarComponent } from './toolbar';
import { SidenavComponent } from './sidenav';
import { NavItemComponent } from './nav-item';


export const COMPONENTS = [
  LayoutComponent,
  SidenavComponent,
  NavItemComponent,
  ToolbarComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
