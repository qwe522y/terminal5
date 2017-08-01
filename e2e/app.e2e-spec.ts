import { Terminal5Page } from './app.po';

describe('terminal5 App', () => {
  let page: Terminal5Page;

  beforeEach(() => {
    page = new Terminal5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
