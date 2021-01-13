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
            .click(
                "#root>header>div>div>button>span.MuiIconButton-label>svg>path"
            )
            .assert.visible(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(2)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(2)"
            )
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
            .click(
                "#root>header>div>div>button>span.MuiIconButton-label>svg>path"
            )
            .assert.visible(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(3)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(3)"
            )
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
            .click(
                "#root>header>div>div>button>span.MuiIconButton-label>svg>path"
            )
            .assert.visible(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(4)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(4)"
            )
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
            .click(
                "#root>header>div>div>button>span.MuiIconButton-label>svg>path"
            )
            .assert.visible(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(5)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(5)"
            )
            .assert.urlContains("quizz")
            .end();
    },
};
