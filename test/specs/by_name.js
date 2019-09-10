const { By, Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function by_name() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.manage().setTimeouts( { implicit: 5000 } );
        await driver.get('https://trueautomation.io');

        //The extra two slashes "//"
        await driver.findElement(By.name(ta("taName", "//identifier"))).click();
    } finally {
        await driver.quit();
    }
})();