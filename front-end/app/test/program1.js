/**
 * Created by vanessavargas on 6/29/2015.
 */


var printLines = function()
{
    var size = arguments.length;

    var longestWord = function(arguments)
    {
        var long = 0;
        for(var j = 0; j <  size; j++)
        {
            var next = arguments[j].length;
            if(long < next)
            {
                long = next;
            }
        }
        return long;
    };

    var longWord = longestWord(arguments);

    var asterisc = '';
    for(var k = 0; k < (longWord+2); k++)
    {
        asterisc = asterisc + '*';
    }


    console.log(asterisc);

    for(var i = 0; i < size; i++)
    {
        if(arguments[i].length < longWord)
        {
            var diff = longWord - arguments[i].length;
            var spaces = '';
            for(var k = 0; k < diff; k++)
            {
                spaces = spaces + '-';
            }
            console.log('*' + arguments[i] + spaces + '*');
        }
        else
            console.log('*' + arguments[i] + '*');

    }
    console.log(asterisc);
};

