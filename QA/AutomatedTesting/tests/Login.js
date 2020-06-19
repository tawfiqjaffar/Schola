module.exports = {
    "@tags": ["login", "schola"],
    "Login component": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root > form > div", 100, 100)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .assert.urlContains("Login")
            .end();
    },
    "Login component success": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root > form > div", 100, 100)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .end();
    },
    "Login component failure": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root > form > div", 100, 100)
            .assert.titleContains("Schola")
            .click("#root > form > div > div.center > p")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.bad_username)
            .setValue('input[type="password"]', identifiers.bad_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("Login")
            .end();
    },
};
