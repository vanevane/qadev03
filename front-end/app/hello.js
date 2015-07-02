//hellp.js
var name = 'world';
//process.argv[2];

if(process.argv[2])
{
	var name = process.argv[2];
	console.log('hello ' + name); 
}
else
console.log('hello ' + name);



