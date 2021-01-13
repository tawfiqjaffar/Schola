module.exports = {
    "@tags": ["login", "Forfot_password", "schola"],
    "Login component Forgot password: good email": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .assert.visible("#root>form>div>div.center>div:nth-child(6)")
            .click("#root>form>div>div.center>div:nth-child(6)")
            .assert.urlContains("Login")
            .assert.visible("#standard-required")
            .assert.visible("input[type=text]")
            .setValue('input[type="text"]', identifiers.good_email)
            .click("#root>div>form>button>span.MuiButton-label")
            .end();
    },
    "Login component Forgot password: non-existet account": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .assert.visible("#root>form>div>div.center>div:nth-child(6)")
            .click("#root>form>div>div.center>div:nth-child(6)")
            .assert.urlContains("Login")
            .assert.visible("#standard-required")
            .assert.visible("input[type=text]")
            .setValue('input[type="text"]', identifiers.bad_email)
            .click("#root>div>form>button>span.MuiButton-label")
            .assert.visible(
                "#root>div>form>div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter>div"
            )
            .end();
    },
    "Login component Forgot password: not an email": function (browser) {
        var settings = browser.globals,
            identifiers = browser.globals.identifiers;

        browser
            .url("http://localhost:3000/Login")
            .waitForElementVisible("body")
            .assert.titleContains("Schola")
            .moveToElement("#root>form>div>div.bottom", 2, 2)
            .assert.visible("input[type=text]")
            .assert.visible("input[type=password]")
            .assert.visible("#root>form>div>div.center>div:nth-child(6)")
            .click("#root>form>div>div.center>div:nth-child(6)")
            .assert.urlContains("Login")
            .assert.visible("#standard-required")
            .assert.visible("input[type=text]")
            .setValue('input[type="text"]', identifiers.not_email)
            .click("#root>div>form>button>span.MuiButton-label")
            .assert.visible("#standard-required-helper-text")
            .end();
    },
};
