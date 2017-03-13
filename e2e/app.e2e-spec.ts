import { NgPosPage } from './app.po';

describe('ng-pos App', () => {
  let page: NgPosPage;

  beforeEach(() => {
    page = new NgPosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
