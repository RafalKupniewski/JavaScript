import { CompDemoAngPage } from './app.po';

describe('comp-demo-ang App', () => {
  let page: CompDemoAngPage;

  beforeEach(() => {
    page = new CompDemoAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
