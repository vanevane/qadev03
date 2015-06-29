/**
 * Created by vanessavargas on 6/29/2015.
 */


var countAvowels = function (paragraph)
{
    var match = 0;
    match = paragraph.match(/[a]/gi);
    if(match == null)
    {
        return 0;
    }
    return match.length;
};

var countEvowels = function (paragraph)
{
    var match = 0;
    match = paragraph.match(/[e]/gi);
    if(match == null)
    {
        return 0;
    }
    return match.length;
};

var countIvowels = function (paragraph)
{
    var match = 0;
    match = paragraph.match(/[i]/gi);
    if(match == null)
    {
        return 0;
    }
    return match.length;
};
var countOvowels = function (paragraph)
{
    var match = 0;
    match = paragraph.match(/[o]/gi);
    if(match == null)
    {
        return 0;
    }
    return match.length;
};

var countUvowels = function (paragraph)
{
    var match = 0;
    match = paragraph.match(/[u]/gi);
    if(match == null)
    {
        return 0;
    }
    return match.length;
};

var replaceParagraph = function (paragraph)
{
    var pattern = /[aeiou]/gi;
    var str = paragraph;
    var result = str.replace(pattern, '*');
    return result;
};



console.log('The paragraph has #a: ' + countAvowels('This paragraph has many words'));
console.log('The paragraph has #e: ' + countEvowels('This paragraph has many words'));
console.log('The paragraph has #i: ' + countIvowels('This paragraph has many words'));
console.log('The paragraph has #o: ' + countUvowels('This paragraph has many words'));
console.log('The paragraph has #u: ' + countOvowels('This paragraph has many words'));
console.log('The replaced paragraph: ' + replaceParagraph('This paragraph has many words'));




