module.exports = {
    "@tags": ["home", "schola"],
    "Home component": function (browser) {
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
            .assert.visible("#root>div>div>div>div:nth-child(1)>div")
            .assert.visible(
                "#root>div>div>div>div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4.MuiGrid-grid-lg-6>div"
            )
            .assert.visible("#root>div>div>div>div:nth-child(3)>div")
            .assert.visible(
                "#root>div>div>div>div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4.MuiGrid-grid-lg-9>div"
            )
            .assert.visible("#root>div>div>div>div:nth-child(5)>div")
            .end();
    },
};
