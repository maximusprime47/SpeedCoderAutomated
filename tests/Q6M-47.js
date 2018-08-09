let browse = {};

module.exports = {
    before: browser => {
        browse = browser.page.Featured_Links_Q6M_47()
        browse.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Q6M-47 Featured In Links Verification': browser => {
        browse
            .waitForElementVisible('@techWormLink', 6000)
            .click('@techWormLink')
            .expect.element('@techRefer').to.be.visible.before(10000)
        browser.back()
        browse
            .waitForElementVisible('@addictiveLink', 8000)
            .click('@addictiveLink')
            .waitForElementVisible('@builtBackBtn', 7000)
            .click('@builtBackBtn')
            .expect.element('@nextBigLink').to.be.visible.before(8000)
        browse
            .click('@speedNextBigLink')
            .expect.element('@nextRefer').to.be.present.before(12000)
            browser.back()
        browse
            .waitForElementVisible('@makeUseLink', 5000)
            .click('@makeUseLink')
            .assert.elementPresent('@makeUseRef', 4000)
            browser.back()


    }
}
