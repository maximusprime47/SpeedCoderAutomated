let surf = {};

module.exports = {
    before: browser => {
        surf = browser.page.Supported_Browsers_Q6M_48()
        surf.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Q6M-48 Supported Browsers': browser => {
        surf
            .waitForElementVisible('@chromeLink', 5000)
            .click('@chromeLink')
            .expect.element('@chromeDownload').to.be.visible.before(8000)
            browser.moveTo('@chromeDownload')
            browser.back()
        surf
            .waitForElementVisible('@fireLink', 5000)
            browser.moveTo('@fireLink')
        surf
            .click('@fireLink')
            .assert.urlEquals('https://www.mozilla.org/en-US/firefox/new/')
            browser.back()
        surf
            browser.moveTo('@safariLink')
        surf
            .click('@safariLink')
            .waitForElementVisible('@speedConfirm', 5000)
            
            browser.back()
        surf
            .waitForElementVisible('@operaLink', 6000)
            browser.moveTo('@operaLink')
        surf
            .click('@operaLink')
            .waitForElementVisible('@operaDownload', 6500)
            browser.moveTo('@operaDownload', 2, 2 )







    }
}
