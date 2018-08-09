module.exports = {
    url: 'http://www.speedcoder.net', 
    elements: {
        //Lessons Expanded [Automation] q6m-38
        lessonsBtn: {
            selector: '//a[text()="Lessons"]', 
            locateStrategy: 'xpath'
        },
        //Lessons Universal Selectors
        exercise: 'pre#main', 
        current: 'span.current', 
        homeOrigin: 'img[alt="chrome"]',

        //C 'http://www.speedcoder.net/lessons/c/1/' begins with 'v' 
        cBtn: 'a[href="c"]', 
        //C# 'http://www.speedcoder.net/lessons/csharp/1/' begins with 'p'
        csBtn: 'a[href="csharp"]',
        //html 'http://www.speedcoder.net/lessons/html/1/' begins with '<'
        htmlBtn: 'a[href="html"]', 
        //C++ 'http://www.speedcoder.net/lessons/cpp/1/' begins with 'v'
        cplusBtn: 'a[href="cpp"]', 
        //Ruby 'http://www.speedcoder.net/lessons/ruby/1/' begins with 'r'
        rubyBtn: 'a[href="ruby"]',
        //CSS 'http://www.speedcoder.net/lessons/css/1/' begins with 'h'
        cssBtn: 'a[href="css"]', 
        //Python 'http://www.speedcoder.net/lessons/py/1/' begins with 'd'
        pythonBtn: 'a[href="py"]', 
        //Perl 'http://www.speedcoder.net/lessons/perl/1/' begins with 's'
        perlBtn: 'a[href="perl"]', 
        //Javascript 'http://www.speedcoder.net/lessons/js/1/' begins with 'a'
        jsBtn: 'a[href="js"]', 
        //Java 'http://www.speedcoder.net/lessons/java/1/' begins with 'p'
        javaBtn: 'a[href="java"]', 
        //Haskell 'http://www.speedcoder.net/lessons/haskel/1/' begins with 'd'
        haskellBtn: 'a[href="haskel"]', 
        //PHP 'http://www.speedcoder.net/lessons/php/1/' begins with 'f'
        phpBtn: 'a[href="php"]'


       
        

        
    }
}
