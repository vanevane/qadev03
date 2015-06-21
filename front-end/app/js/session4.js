/**
 * Created by vanessavargas on 6/18/2015.
 */
var ses4 = function()
{ };

var getFirstCapicua2 = function(initRange, endRange)
{
    var size = initRange.toString().length;
    var end = endRange.toString();

    for(var j = initRange; j < endRange; j++)
    {
        var flag = true;
        var ini = initRange.toString();

            for(var i = 0; i <= (size/2); i++)
            {
                if(ini[i] == ini[size-(i+1)])
                {
                    i++;
                }
                else
                {
                    initRange++;
                    flag = false;
                    break;
                }
            }

        if(flag)
        {
            return initRange;
        }
    }
};

//console.log('First capicua between', initRange, 'and', endRange, 'is', getFirstCapicua(initRange, endRange));


var getFirstCapicua = function(offset, limit)
{
  for(var i = offset; i <= limit; i++)
  {
      if(this.isCapicua(i))
      {
          break;
      }
  }
    return i;
};

var isCapicua = function (n)
{
    return n == Number.parseInt(n.toString().split('').reverse().join(''));

};

ses4.prototype.capicua = function(a, b)
{
    console.log('First capicua number between', a, ' and ',
    b, ' is ', getFirstCapicua(a, b));
};

var getOddNumber = function (range)
{
    var oddNumbers = [];
    for(var i = 1; i <= range * 2; i++)
    {
        if((i % 2) == 0)
        {
            continue;
        }
        oddNumbers.push(i);
    }
    return oddNumbers;
};

var getEvenNumber = function (range)
{
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
};

ses4.prototype.OddEvenNumbers = function(range)
{
    console.log('The fist '+ range + ' odd numbers are:' + getOddNumber(range));
    console.log('The first '+ range + ' even numbers are:' + getEvenNumber(range));
};

var getFactorial = function(num)
{
    var fac = 1;
        for(var i = 1; i <= num; i++)
        {
            fac *= i;
        }
    return fac;
};

ses4.prototype.factorial = function (num)
{
    console.log('The factorial of ' + num + ' is ' + getFactorial(num));
};

ses4 = new ses4();
