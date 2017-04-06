import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes';
import { LayoutComponent } from './layout';
import { ToolbarComponent } from './toolbar';
import { SideNavComponent } from './sidenav';
import { NavItemComponent } from './nav-item';
import { BookPreviewListComponent } from './book-preview-list';
import { BookPreviewComponent } from './book-preview';
import { BookAuthorsComponent } from './book-authors';


export const COMPONENTS = [
  LayoutComponent,
  SideNavComponent,
  NavItemComponent,
  ToolbarComponent,
  BookPreviewListComponent,
  BookPreviewComponent,
  BookAuthorsComponent
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
