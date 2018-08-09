let explore = {};

module.exports = {
    before: browser => {
        explore = browser.page.Lessons_Expanded_Q6M_38()
        explore.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Q6M-38 Lessons Expanded': browser => {
        explore
            //navigate to lessons
            .waitForElementVisible('@lessonsBtn', 4000)
            .click('@lessonsBtn')
            .waitForElementNotPresent('@homeOrigin', 5000)
            .assert.urlEquals('http://www.speedcoder.net/lessons/')

            //Lessons Expanded[automation]'Q6M-38'
            .click('@cBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/c/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'v')
        browser.back()
        explore
            .click('@csBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/csharp/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'p')
        browser.back()
        explore
            .click('@htmlBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/html/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', '<')
        browser.back()
        explore
            .click('@cplusBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/cpp/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'v')
        browser.back()
        explore
            .click('@rubyBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/ruby/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'r')
        browser.back()
        explore
            .click('@cssBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/css/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'h')
        browser.back()
        explore
            .click('@pythonBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/py/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'd')
        browser.back()
        explore
            .click('@perlBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/perl/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 's')
        browser.back()
        explore
            .click('@jsBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/js/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'a')
        browser.back()
        explore
            .click('@javaBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/java/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'p')
        browser.back()
        explore
            .click('@haskellBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/haskel/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'd')
        browser.back()
        explore
            .click('@phpBtn')
            .assert.urlEquals('http://www.speedcoder.net/lessons/php/1/')
            .waitForElementVisible('@exercise', 5000)
            .assert.containsText('@current', 'f')

    }
}
