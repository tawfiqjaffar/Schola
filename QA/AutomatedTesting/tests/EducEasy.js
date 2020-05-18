module.exports = {
    '@tags': ['EducEasy'],
    'Student connection' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconEleve')
        .click('.IconEleve')
        .assert.urlContains('signinstudent')
        .setValue('input[type="text"]', 'johnsmith')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)')
        .waitForElementVisible('.trombi')
        .end()
    },
    'Parent connection' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconParent')
        .click('.IconParent')
        .assert.urlContains('signinparent')
        .setValue('input[type="text"]', 'johnsmith')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)')
        .waitForElementVisible('.trombi')
        .end()
    },
    'Teacher connection' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconProf')
        .click('.IconProf')
        .assert.urlContains('signinteacher')
        .setValue('input[type="text"]', 'matandrieu')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)>span.MuiButton-label')
        .waitForElementVisible('.trombi')
        .end()
    },
    'Schedule Component' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconProf')
        .click('.IconProf')
        .assert.urlContains('signinteacher')
        .setValue('input[type="text"]', 'matandrieu')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)>span.MuiButton-label')
        .waitForElementVisible('.trombi')
        .click('xpath', '/html/body/div/div/div/div[1]/header/div/button')
        .waitForElementVisible('a[href="#/schedule"]')
        .click('a[href="#/schedule"]')
        .pause(500)
        .waitForElementVisible('#root>div>div>main>div>div>div>div.control-buttons')
        .end()
    },
    'Agenda Component' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconProf')
        .click('.IconProf')
        .assert.urlContains('signinteacher')
        .setValue('input[type="text"]', 'matandrieu')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)>span.MuiButton-label')
        .waitForElementVisible('.trombi')
        .click('xpath', '/html/body/div/div/div/div[1]/header/div/button')
        .waitForElementVisible('a[href="#/agenda"]')
        .click('a[href="#/agenda"]')
        .pause(500)
        .waitForElementVisible('.trombi')
        .end()
    },
    'Quizz Component' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconProf')
        .click('.IconProf')
        .assert.urlContains('signinteacher')
        .setValue('input[type="text"]', 'matandrieu')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)>span.MuiButton-label')
        .waitForElementVisible('.trombi')
        .click('xpath', '/html/body/div/div/div/div[1]/header/div/button')
        .waitForElementVisible('a[href="#/quizz"]')
        .click('a[href="#/quizz"]')
        .pause('500')
        .waitForElementVisible('#root>div>div>main>div>div>div.MuiGrid-root.quizz-submit.MuiGrid-item.MuiGrid-grid-md-12>button>span.MuiButton-label')
        .end()
    },
    'Trombi Component' : function (browser) {
    browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.IconProf')
        .click('.IconProf')
        .assert.urlContains('signinteacher')
        .setValue('input[type="text"]', 'matandrieu')
        .setValue('input[type="password"]', 'qwerty')
        .click('#root>div>div>div>div>form>div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12>button:nth-child(2)>span.MuiButton-label')
        .waitForElementVisible('.trombi')
        .click('xpath', '/html/body/div/div/div/div[1]/header/div/button')
        .waitForElementVisible('a[href="#/trombi"]')
        .click('a[href="#/trombi"]')
        .pause('500')
        .waitForElementVisible('#root>div>div>main>div>div>div.ClassView>div>div>div.css-1hwfws3>div.css-1uccc91-singleValue')
        .end()
    }
};