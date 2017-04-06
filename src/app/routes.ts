import { Routes } from '@angular/router';
import { BookExistsGuard } from './guards/book-exists.guard';
import { CollectionPageComponent } from './containers/collection-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  }
];
