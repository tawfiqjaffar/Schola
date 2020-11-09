module.exports = {
    "@tags": ["login", "schola"],
    "Login component success": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
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
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.bad_username)
            .setValue('input[type="password"]', identifiers.bad_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("Login")
            .end();
    },
    "Login component Forgot your password?": function (browser) {
        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .assert.visible("#root>form>div>div.center>div:nth-child(6)")
            .click("#root>form>div>div.center>div:nth-child(6)")
            .assert.visible("#standard-required")
            .assert.urlContains("Login")
            .end();
    },
};
