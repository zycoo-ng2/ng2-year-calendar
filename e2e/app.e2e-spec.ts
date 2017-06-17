import { Ng2YearCalendarPage } from './app.po';

describe('ng2-year-calendar App', () => {
  let page: Ng2YearCalendarPage;

  beforeEach(() => {
    page = new Ng2YearCalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
