//utilSpec.js

var Util = require('./utils.js');


describe('Util', function(){
	it('should say Hello pepe', function(){
		var myUtil = new Util();
		var actRes = myUtil.sayHello('pepe');
		var expRes = 'Hello pepe';
		expect(actRes).toBe(expRes);
	});
});




