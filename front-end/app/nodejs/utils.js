//utils.js

var Util = function()
{};

Util.prototype.sayHello = function(name)
{
	if(!name)
	{
		name = 'world';
		// console.log('Hello ' + name + '!'); 
		return('Hello ' + name + '!'); 
	}
	else
	// console.log('Hello ' + name);
	return('Hello ' + name);
};

Util.prototype.getSum = function()
{
	var _sum = 0;
	
	for(var i = 2; i < process.argv.length; i++)
	{
		_sum += parseInt(process.argv[i]);
	}
	return _sum;
};

Util.doSomething = function()
{
	//static methos
};

//CASE 1: Export a class
module.exports = Util;//definition not execution. Util and Util() are not the same.

//CASE 2: export a class method (non-common case)
// module.exports = Util.prototype.sayHello;

//CASE 3: export a class instance
// module.exports = new Util();

//CASE 4: export an object
// var pepe = 
// {
	// name: 'Pepe',
	// eat: function()
	// {
		// console.log(this.name, 'is eating');
	// }
// };

// module.exports = pepe;
