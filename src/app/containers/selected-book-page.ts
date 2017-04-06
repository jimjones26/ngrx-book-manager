import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as collection from '../actions/collection.actions';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </app-book-detail>
  `
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.book$ = store.select(fromRoot.getSelectedBook);
    this.isSelectedBookInCollection$ = store.select(fromRoot.isSelectedBookInCollection);
  }

  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBookAction(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBookAction(book));
  }
}
