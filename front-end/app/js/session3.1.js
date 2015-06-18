/**
 * Created by vanessavargas on 6/18/2015.
 */

var isValidYear = function(yearToTest)
{
    return /[0-2]{1}[0-9]{3}\-((0)[1-9]{1}|(1)[0-2]{1})\-((0)[1-9]{1}|(1-3)[0-9]{1})/.test(yearToTest);

}
var year = '2015-10-06';

//console.log('The date'+ year + );

//console.log(isValidYear(year));

var initRange = 100;
var endRange = 200;

var getFirstCapicua = function(initRange, endRange)
{

    var limit;
    var size = initRange.toString().length;

    var end = endRange.toString();

    for(var j = initRange; j < endRange; j++)
    {
        var flag = true;
        console.log('curr'+ j);
        console.log('size:' + size);
        if((size%2) == 0)
        {
            var ini = initRange.toString();

            limit = size;

            for(var i = 0; i < (size/2); i++)
            {
                if(ini[i] == ini[size-(i+1)])
                {
                    i++;
                }
                else
                {
                    initRange++;
                    console.log('next curr:'+initRange);
                    i = size;
                    flag = false;
                }
            }
        }
        else
        {
            var ini = initRange.toString();

            limit = size - 1;

            for(var i = 0; i < (size/2); i++)
            {
                if(ini[i] == ini[size-(i+1)])
                {
                    i++;
                }
                else
                {
                    initRange++;
                    console.log('next curr:'+initRange);
                    i = size;
                    flag = false;
                }
            }
        }

        if(flag)
        {
            return initRange;
            break;
        }

    }




}

console.log('First capicua between', initRange, 'and', endRange, 'is', getFirstCapicua(initRange, endRange));


