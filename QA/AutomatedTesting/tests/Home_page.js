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
            .end();
    },
    "Home component: Button Home": function (browser) {
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
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(1)"
            )
            .end();
    },
    "Home component: Button Schedule": function (browser) {
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
            .end();
    },
    "Home component: Button Canteen": function (browser) {
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
            .end();
    },
    "Home component: Button Quizz": function (browser) {
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
            .end();
    },
    "Home component: Button Disconnect": function (browser) {
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
            .end();
    },
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
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(1)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(1)"
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
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(2)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(2)"
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
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(3)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(3)"
            )
            .assert.urlContains("canteen")
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
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(4)"
            )
            .click(
                "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(4)"
            )
            .assert.urlContains("quizz")
            .end();
    },
    "Home component: Button Quizz Disconnect": function (browser) {
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
            .assert.visible(
                "#root>header>div>div>button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-menuButton-6.makeStyles-buttonLogin-8>span.MuiButton-label>p"
            )
            .end();
    },
};
