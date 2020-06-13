module.exports = {
    '@tags': ['login', 'schola'],
    'Login success': function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url('http://localhost:3000/Login')
            .waitForElementVisible('body')
            .assert.titleContains('Schola')
            .assert.visible('input[type=text]')
            .assert.visible('input[type=password]')
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .pause(1000)
            .end();
    },
    'Login failure': function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url('http://localhost:3000/Login')
            .waitForElementVisible('body')
            .assert.titleContains('Schola')
            .assert.visible('input[type=text]')
            .assert.visible('input[type=password]')
            .setValue('input[type="text"]', identifiers.bad_username)
            .setValue('input[type="password"]', identifiers.bad_password)
            .pause(1000)
            .end();
    }
}