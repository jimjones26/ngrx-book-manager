import { Routes } from '@angular/router';
import { BookExistsGuard } from './guards/book-exists.guard';
import { CollectionPageComponent } from './containers/collection-page';
import { FindBookPageComponent } from './containers/find-book-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'book/find',
    component: FindBookPageComponent
  }
];
