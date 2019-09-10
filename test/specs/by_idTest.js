const { By, Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function by_id() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.manage().setTimeouts( { implicit: 5000 } );
        await driver.get('https://trueautomation.io');

        //The extra two slashes "//"
        await driver.findElement(By.id(ta('taName', '//identifierId'))).click();
    } finally {
        await driver.quit();
    }
})();