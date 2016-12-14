import { AdminMongoPage } from './app.po';

describe('admin-mongo App', function() {
  let page: AdminMongoPage;

  beforeEach(() => {
    page = new AdminMongoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
