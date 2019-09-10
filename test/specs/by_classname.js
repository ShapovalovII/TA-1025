const { By, Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function by_classname() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.manage().setTimeouts( { implicit: 5000 } );
        await driver.get('https://trueautomation.io');

        //The extra two slashes "//"
        await driver.findElement(By.className(ta("taName", "//RveJvd snByac"))).click();
    } finally {
        await driver.quit();
    }
})();