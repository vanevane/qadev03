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
//cal.calculate(1,2);
//console.log('-----------');
//cal.calculate(1,2,3,4);
//console.log('-----------')
//cal.calculate(1);


var Calculator2 = function(){};

Calculator2.prototype.sum = function()
{
	var _sum = function(numbers, pos){

		if (!pos)
			pos = 0;

		if (pos == numbers.length - 1)
			return numbers[pos];

		return numbers[pos] + _sum(numbers, pos + 1);
	};

	if (typeof arguments[0] == 'object')
		return _sum(arguments[0]);

	return _sum(arguments);
};

Calculator2.prototype.avg = function()
{
	var _avg = function(numbers, pos){
		if (!pos)
			pos = 0;

		if (pos == numbers.length - 1)
			return numbers[pos] / numbers.length;

		return ((numbers[pos]/ numbers.length) + _avg(numbers, pos + 1));
	};

	if (typeof arguments[0] == 'object')
		return _avg(arguments[0]);

	return _avg(arguments);
};

Calculator2.prototype.min = function()
{
	var _min = function(numbers, pos){

		if (!pos)
			pos = 0;

		if (pos == numbers.length - 1)
			return numbers[pos];

		if(numbers[pos] < _min(numbers, pos + 1))
		return numbers[pos];
	};

	if (typeof arguments[0] == 'object')
		return _min(arguments[0]);

	return _min(arguments);
};

Calculator2.prototype.max = function()
{
	var _max = function(numbers, pos){

		if (!pos)
			pos = 0;

		if (pos == numbers.length - 1)
			return numbers[pos];

		if(numbers[pos] < _max(numbers, pos + 1))
		return  _max(numbers, pos + 1);
	};

	if (typeof arguments[0] == 'object')
		return _max(arguments[0]);

	return _max(arguments);
};

Calculator2.prototype.eval = function () {
	console.log('SUM:', this.sum(arguments));
	console.log('AVG:', this.avg(arguments));
	console.log('MAX:', this.max(arguments));
	console.log('MIN:', this.min(arguments));
	console.log('---------------------------');
};
var calc = new Calculator2();
//calc.eval(1,2);
//calc.eval(2,3,4);
//calc.eval(1);



/*
* var calculator = new calculator()
* calculator.eval(1,2);
* calculator.eval(1,2,3,4);
* calculator.eval(1)
* */