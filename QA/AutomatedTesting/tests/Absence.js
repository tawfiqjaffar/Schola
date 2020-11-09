module.exports = {
    "@tags": ["absence", "schola"],
    "Absence component": function (browser) {
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
};
