import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
  }

  fillInForm(distance, gender, age) {

    element(by.css('.text-input')).clear().then(() => {  // first we need to clear the default value
        element(by.css('.text-input')).sendKeys(distance); // fill in the distance
    }) 

    element(by.css('.select')).click().then(() => {  // find the dropdown and click on it
        browser.sleep(500); // we sleep for a half a second to make sure the popup has popped up

        element(by.cssContainingText('.button-inner', gender)).click(); // click the gender option you want
        element(by.cssContainingText('.button-inner', 'OK')).click();  // click the OK button

    })

    browser.sleep(500); // we sleep for half a second to make sure the popup has disappeared

    element(by.cssContainingText('.button', 'Calculate')).click();  // click the calculate button

  }

  results_card_header() {
      return element(by.css('ion-card-header')).getText();
  } 

  results_card_content() {
      return element(by.css('ion-card-content')).getAttribute('textContent');
  } 
}