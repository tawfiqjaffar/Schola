var chromedriver = require("chromedriver");

var identifiers = {
    good_username: "philippe.roudaut@epitech.eu",
    good_password: "test92",
    bad_username: "personne@schola.fr",
    bad_password: "test",
    good_email: "alan@schola.fr",
    bad_email: "alan.cataldo@yahoo.fr",
    not_email: "pas un email",
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
