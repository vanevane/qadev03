/**
 * Created by vanessavargas on 6/29/2015.
 */



var main = function()
{

    var selectWord = function()
    {
        var poolWord = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        var randomSelect = parseInt(Math.random() * poolWord.length);
        var randomWord = poolWord[randomSelect];
        return randomWord;
    };

    var randomWord = selectWord();
    console.log(randomWord);

    var printWord = function(randomWord)
    {
        var size = randomWord.length;
        var spaces = '';

        for(var i = 0; i < size; i++)
        {
            spaces = spaces + '_ ';
        }

        console.log(spaces);
    };

    printWord(randomWord);




    var printWordLetter = function(word , letter, pos)
    {
        var size = word.length;
        var spaces = '';

        for(var i = 0; i < size; i++)
        {
            if(i == pos)
            {
                spaces = spaces + letter;
            }
            spaces = spaces + '_ ';
        }

        console.log(spaces);
    };

    var turn = 0;

    while(turn < 10)
    {
        var input = window.prompt('Letter');
        console.log('Letter is:', input);
        var pattern = "/[" + input + "]/gi";

        for(var i = 0; i < randomWord.length ; i++)
        {
            if(randomWord.charAt(i) == input)
            {
                printWordLetter(randomWord, input, i)
                //console.log('the letter it is at: '+ i);
                break;
            }
        }

        turn ++;
    }

}();





//console.log(selectWord());
