import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { ComponentsModule } from './components/index';

import { BookEffects } from './effects/book.effect';
import { CollectionEffects } from './effects/collection.effect';
import { GoogleBooksService } from 'app/services/google-books.service';
import { BookExistsGuard } from './guards/book-exists.guard';

import { AppComponent } from './app.component';
import { CollectionPageComponent } from './containers/collection-page';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { SelectedBookPageComponent } from './containers/selected-book-page';
import { NotFoundPageComponent } from './containers/not-found-page';

import { routes } from './routes';
import { reducer } from './reducers';
import { schema } from './db';


@NgModule({
  declarations: [
    AppComponent,
    CollectionPageComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(BookEffects),
    EffectsModule.run(CollectionEffects),

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema)
  ],
  providers: [
    BookExistsGuard,
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
