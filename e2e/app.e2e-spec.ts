import { AngularTinyPage } from './app.po';

describe('angular-tiny App', () => {
  let page: AngularTinyPage;

  beforeEach(() => {
    page = new AngularTinyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
