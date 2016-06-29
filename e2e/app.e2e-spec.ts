import { LearnBewireAngular2Page } from './app.po';

describe('learn-bewire-angular2 App', function() {
  let page: LearnBewireAngular2Page;

  beforeEach(() => {
    page = new LearnBewireAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
