const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {        
        browser.url('https://webdriver.io');
        const title = $('.projectTitle');
        const text = title.getText();
        assert.equal(text, 'Webdriver');
    });
});