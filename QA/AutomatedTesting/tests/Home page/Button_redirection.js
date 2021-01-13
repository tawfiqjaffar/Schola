module.exports = {
    "@tags": ["home", "Button_redirection", "schola"],
    "Home component: Button Home Redirection": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .click(identifiers.navbar)
            .assert.visible(identifiers.home_button)
            .click(identifiers.home_button)
            .assert.urlContains("home")
            .end();
    },
    "Home component: Button Schedule Redirection": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .click(identifiers.navbar)
            .assert.visible(identifiers.schedule_button)
            .click(identifiers.schedule_button)
            .assert.urlContains("schedule")
            .end();
    },
    "Home component: Button Canteen Redirection": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .click(identifiers.navbar)
            .assert.visible(identifiers.canteen_button)
            .click(identifiers.canteen_button)
            .assert.urlContains("cantine")
            .end();
    },
    "Home component: Button Quizz Redirection": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .click(identifiers.navbar)
            .assert.visible(identifiers.quizz_button)
            .click(identifiers.quizz_button)
            .assert.urlContains("quizz")
            .end();
    },
    "Home component: Button Disconnect Redirection": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.titleContains("Schola")
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .setValue('input[type="text"]', identifiers.good_username)
            .setValue('input[type="password"]', identifiers.good_password)
            .click("#root>form>div>div.center>button")
            .assert.urlContains("home")
            .click(identifiers.navbar)
            .assert.visible(identifiers.disconnect_button)
            .click(identifiers.disconnect_button)
            .assert.visible(identifiers.landpage_email_field)
            .end();
    },
};
