import { LocPocPage } from './app.po';

describe('loc-poc App', () => {
  let page: LocPocPage;

  beforeEach(() => {
    page = new LocPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
