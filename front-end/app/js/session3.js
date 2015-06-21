/**
 * Created by vanessavargas on 6/15/2015.
 */

var ses3 = function()
{ };

var countWords = function(par)
{
    var ans = par.split(' ');
    return ans.length;
};

var currDate = function()
{
    var date = new Date();
    var day = date.getDay();
    var dayS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var hour = date.getHours() > 12 ? (date.getHours() -12) + " PM" : (date.getHours()) + " PM";

    console.log('Today is: ', dayS[day]);

    console.log('Current time is: ', hour, ':', date.getMinutes(),
        ':', date.getSeconds());
};

var isValidYear = function(yearToTest)
{
    return /[0-2]{1}[0-9]{3}\-((0)[1-9]{1}|(1)[0-2]{1})\-((0)[1-9]{1}|(1-3)[0-9]{1})/.test(yearToTest);

};

ses3.prototype.count = function()
{
    console.log ('The paragraph has ', countWords(arguments[0]), ' words');
};

ses3.prototype.date = function()
{
    console.log(currDate());
};

ses3.prototype.validYear = function()
{
    console.log('The date', arguments[0], 'is valid:', isValidYear(arguments[0]));
};

ses3 = new ses3();


