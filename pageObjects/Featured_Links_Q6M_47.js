module.exports = {
   url: 'http://www.speedcoder.net', 
   elements: {
       //techworm script
       techWormLink: 'img[alt="TechWorm"]', 
       techRefer: 'img[src="http://www.speedcoder.net/static/img/screenshot.png"]', 
       //addictivetips script
       addictiveLink: 'img[alt="addictivetips"]', 
       tipsRefer: 'a[href="http://www.speedcoder.net"]', 
       builtBackBtn: 'a[href="http://www.speedcoder.net"]', 
       //NextBigWhat script
       speedNextBigLink: 'img[alt="NextBigWhat"]',
       nextBigLink: {
           selector: '(//img[@class="sb"])[2]' , 
           locateStrategy: 'xpath'
       }, 
       nextRefer: 'h1[itemprop="headline"]', 
       nextBackLink: 'a[href="http://www.speedcoder.net?ref=nextbigwhat"]', 
       //makeuseof script
       makeUseLink: 'img[alt="MakeUseOf"]', 
       makeUseRef: 'img[alt="Speedcoder"]', 
    } 
}