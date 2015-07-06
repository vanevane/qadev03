//Module: sayHello.js

module.exports = function(name)
{
	if(!name)
	{
		name = 'world';
		console.log('hello ' + name + '!'); 
	}
	else
	console.log('hello ' + name);
};

