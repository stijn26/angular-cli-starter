import { AppPage } from './app.po';

describe('Angular-cli-starter App', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying Starter app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Starter app');
  });
});
