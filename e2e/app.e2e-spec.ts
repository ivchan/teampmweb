import { TeampmwebPage } from './app.po';

describe('teampmweb App', () => {
  let page: TeampmwebPage;

  beforeEach(() => {
    page = new TeampmwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
