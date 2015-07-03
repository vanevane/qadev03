//readFileContent.js

var fs = require('fs');
var name = process.argv[2];

var getFileContentSync = function (fileName)
{
	var contentBuffer = fs.readFileSync(fileName);
	var ans = contentBuffer.toString();
	var lines = ans.split('\n');
	return lines.length;
};

//console.log('The content of the file is:\n', getFileContentSync(name));
//console.log('The file has ', getFileContent(name), ' lines');

//mine
// var getFileContent = function (fileName)
// {
	// fs.readFile(fileName, function (err, data) {
	  // if (err) throw err;
	  // console.log(data.toString());
	  // console.log(data.toString().split('\n').length);
	// });
	
// };


//trainer
var getFileContent = function (fileName, cb)
{
	fs.readFile(fileName, function(error, contentBuffer)
	{
		if (error) cb(error, nul);
		
		cb(null, contentBuffer.toString());
	});
};

getFileContent(name, function(e, d){
	if(e)
		console.log('error while reading the file', e);
		
		console.log('The content of the file is:');
		console.log(d);
		console.log('I am done');
});
// console.log('I am done');








