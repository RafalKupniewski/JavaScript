import { Lab9Page } from './app.po';

describe('lab9 App', () => {
  let page: Lab9Page;

  beforeEach(() => {
    page = new Lab9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
