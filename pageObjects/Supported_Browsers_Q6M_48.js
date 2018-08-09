module.exports = {
    url: 'http://www.speedcoder.net', 
    elements: {
       //Chrome
       chromeLink: 'img[alt="chrome"]', 
       downChrome: {
           selector: '(//button[text()="Download Chrome"])[1]', 
           locateStrategy: 'xpath'
       }, 
       chromeDownload: 'button#js-download-hero', 
       //Firefox https://www.mozilla.org/en-US/firefox/new/
       fireLink: 'img[alt="firefox"]', 
       //Safari
       safariLink: 'img[alt="safari"]', 
       speedConfirm: 'span#link0', 
       //Opera
       operaLink: 'img[alt="opera"]', 
       operaDownload: 'a[itemprop="downloadURL"]'




     } 
 }