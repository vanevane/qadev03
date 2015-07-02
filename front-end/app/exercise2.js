//exercise.js

var size = process.argv.length;
//console.log(size);
var ans = 0;
for(var i = 2; i < size; i++)
{
	ans = ans + Number(process.argv[i]);
}
console.log(ans);


var getSum = function()
{
	var _sum = 0;
	
	for(var i = 2; i < process.argv.length; i++)
	{
		_sum += process.argv[0];
	}
	return _sum;
};

//console.log('Sum: ' + getSum());