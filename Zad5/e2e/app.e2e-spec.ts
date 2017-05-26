import { IphonePage } from './app.po';

describe('iphone App', () => {
  let page: IphonePage;

  beforeEach(() => {
    page = new IphonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
