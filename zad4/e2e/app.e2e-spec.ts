import { CompPage } from './app.po';

describe('comp App', () => {
  let page: CompPage;

  beforeEach(() => {
    page = new CompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
