module.exports = {
    '@tags': ['ecosia'],
    'Demo test Ecosia.org': function (browser) {
        browser
            .url('https://www.ecosia.org/')
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .end();
    }
}