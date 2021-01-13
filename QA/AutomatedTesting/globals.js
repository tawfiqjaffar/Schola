var chromedriver = require("chromedriver");

var identifiers = {
    good_username: "philippe.roudaut@epitech.eu",
    good_password: "test92",
    bad_username: "personne@schola.fr",
    bad_password: "test",
    good_email: "alan@schola.fr",
    bad_email: "alan.cataldo@yahoo.fr",
    not_email: "pas un email",
    navbar: "#root>header>div>div>button>span.MuiIconButton-label>svg>path",
    login_button: "#root>form>div>div.center>button",
    forgot_password_button: "#root>div>form>button>span.MuiButton-label",
    home_button:
        "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(2)",
    schedule_button:
        "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(3)",
    canteen_button:
        "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(4)",
    quizz_button:
        "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(5)",
    disconnect_button:
        "#customized-menu>div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation3.MuiPaper-rounded>ul>li:nth-child(7)",
    landpage_email_field:
        "#root>div>div>div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-3>div>div>input",
};

module.exports = {
    identifiers: identifiers,

    // lance le driver avant les tests
    before: function (done) {
        chromedriver.start();

        done();
    },

    // arrête le driver une fois les tests terminé
    after: function (done) {
        chromedriver.stop();

        done();
    },

    // ferme le navigateur après chaque scenario
    afterEach: function (browser, done) {
        browser.end();

        done();
    },

    // arrête l’exécution des tests en cas d'erreureslin
    abortOnAssertionFailure: true,

    // temps d’attente entre chaque condition de test
    waitForConditionPollInterval: 300,

    /*
     * temps d’attente dans les commande d’attente d’élément
     * cela évite de préciser à chaque fois la durée.
     */
    waitForConditionTimeout: 2000,

    /*
     * défini si le test doit échouer lorsque plusieurs élément HTML sont trouvé alors
     * que nous n’en n’attendons qu’un.
     */
    throwOnMultipleElementsReturned: true,
};
