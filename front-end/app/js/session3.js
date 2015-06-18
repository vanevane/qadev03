/**
 * Created by vanessavargas on 6/15/2015.
 */

var countWords = function(par)
{
    var ans = par.split(' ');

    return ans.length;

};

//console.log ('The paragraph has ', countWords('hello world'), ' words');

var currDate = function()
{
    var date = new Date();
    var day = date.getDay();
    var dayS = ['Sunday', 'Monday', 'Tuesday'];

    var hour = date.getHours() > 12 ? (date.getHours() -12) + " PM" : (date.getHours()) + " PM";

    console.log('Today is: ', dayS[day]);

    console.log('Current time is: ', hour, ':', date.getMinutes(),
        ':', date.getSeconds());

}



