import { NgrxBookManagerPage } from './app.po';

describe('ngrx-book-manager App', () => {
  let page: NgrxBookManagerPage;

  beforeEach(() => {
    page = new NgrxBookManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
