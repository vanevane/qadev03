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

//console.log('First capicua between', initRange, 'and', endRange, 'is', getFirstCapicua(initRange, endRange));


var getFirstCapicua2 = function(offset, limit)
{
  for(var i = offset; i <= limit; i++)
  {
      if(isCapicua(i))
      {
          break;

      }

  }
    return i;
};

var isCapicua = function (n)
{
    return n == Number.parseInt(n.toString().split('').reverse().join(''));

}

//console.log('First capicua number between', initRange, ' and ',
//    endRange, ' is ', getFirstCapicua2(initRange, endRange));


var range = 5;
var getOddNumber = function (range)
{

    console.log('The first' + range + 'odd numbers are:');
    for(var i = 1; i <= range; i++)
    {
        if((i % 2) != 0)
        {
            console.log(i);

        }

    }

}

var getEvenNumber = function (range)
{
    //console.log('The first' + range + 'even numbers are:');
    //var flag = true;
    //var cont = 0;

    var evenNumbers = [];

        for(var i = 1; i <= range * 2; i++)
        {
            if((i % 2) != 0)
            {
                continue;
            }

            evenNumbers.push(i);
        }

    return evenNumbers;
}

//getOddEvenNumber(5);

//console.log('The fist '+ range + 'odd numbers are:' + getOddNumber(range));
//console.log('The first '+ range + 'even numbers are:' + getEvenNumber(range));



var num = 5;
var getFactorial = function(num)
{
    var fac = 1;

    //if(num == 0)
    //{
    //    return 1;
    //}
    //else
    //{
        for(var i = 1; i <= num; i++)
        {
            //fac = fac * (i + 1);
            fac *= 1;

        }

    //}
    return fac;
}

console.log('The factorial of ' + num + ' is ' + getFactorial(num));
