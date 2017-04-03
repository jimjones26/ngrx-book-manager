import { createSelector } from 'reselect';
import { Book } from '../models/book.model';
import * as book from '../actions/book.actions';
import * as collection from '../actions/collection.actions';


export interface State {
  ids: string[];
  entities: { [id: string]: Book };
  selectedBookId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedBookId: null,
};


/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedBookId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
