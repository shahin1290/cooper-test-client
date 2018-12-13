import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    }); 

    it('fill in form', () => {
      page.fillInForm(1000, 'Female', 20);
      expect(page.results_card_header()).toContain('Cooper Test Result');
      expect(page.results_card_content()).toContain('Gender: female, Age: 20  Result: Excellent');
    });
  });

});