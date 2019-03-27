const assert = require('assert');

const getElement = (selector) => {
     return $(this.selector);
  };

describe('webdriver.io page', () => {
    it('should have the right title', () => {        
        browser.url('https://webdriver.io');
        const title = getElement('.projectTitle');
        let text = title.getText();
        assert.equal(text, 'Webdriver');
    });
});