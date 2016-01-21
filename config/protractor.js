exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare:  function(){
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field')).sendKeys('wgbn');
        browser.driver.findElement(by.id('password')).sendKeys('beco1605');
        browser.driver.findElement(by.name('commit')).click();
    }
};