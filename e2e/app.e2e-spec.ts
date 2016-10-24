import { AvengerPage } from './app.po';

describe('avenger App', function() {
  let page: AvengerPage;

  beforeEach(() => {
    page = new AvengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
