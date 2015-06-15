/**
 * Created by vanessavargas on 6/12/2015.
 */

//Make all these functions to be part of a class
//e.g. Caltulator

var Calculator = function()
{
	this.list;
	this.size;
	this.res;
	this.calculate = function()
	{
		
		list = cal.calculate.arguments;
		size = cal.calculate.arguments.length;
		
		res = 0;
		var ansSum = this.sum(size);
		console.log('SUM: ', ansSum);
		
		res = 0;
		var ansAve = this.average(size);
		console.log('AVE: ', ansAve);
		
		res = 0;
		var ansMax = this.max(size);
		console.log('MAX: ', ansMax);
		
		res = list[size-1];
		var ansMin = this.min(size);
		console.log('MIN: ', ansMin);
	}
	
	this.sum = function(size) {		
		if(size-1 == 0)
		{
			res = res + list[0];
			return res;
		}
		else
		{
			res = res + list[size-1];
			return this.sum(size-1);
		}
	};
	
	this.average = function(size)
	{
		if(size-1 == 0)
		{
			res = (res + list[0])/list.length;
			return res;
		}
		else
		{
			res = res + list[size-1];
			return this.average(size-1);
		}
	};
	
	this.max = function(size)
	{
		if(size-1 == 0)
		{
			if(list[0] > res)
			{
				res = list[0];
			}
			return res;
		}
		else
		{
			if(list[size-1] > res)
			{
				res = list[size-1];
			}
			return this.max(size-1);
		}
	};
	
	this.min = function(size)
	{
		if(size-1 == 0)
		{
			if(list[0] < res)
			{
				res = list[0];
			}
			return res;
		}
		else
		{
			if(list[size-1] < res)
			{
				res = list[size-1];
			}
			return this.min(size-1);
		}
	};
}

var cal = new Calculator();
//cal.calculate(3,4,5);
//cal.calculate(1,2,3);
//cal.calculate(11,11,11);
cal.calculate(1,2);
console.log('-----------');
cal.calculate(1,2,3,4);
console.log('-----------')
cal.calculate(1);

/*
* var calculator = new calculator()
* calculator.eval(1,2);
* calculator.eval(1,2,3,4);
* calculator.eval(1)
* */