//testUtil.js

//CASE 1: import a class
var Util = require('./utils.js');
var myUtil = new Util();
myUtil.sayHello('pepe');

// // Person pepe = new Person();
// // pepe.eat(); //non-static
// // Person.doSomething(); //static

//CASE 2: import a class method (non-common case)
// var sayHello = require('./utils.js');
// sayHello('pepe');

//CASE 3: import a class instance
// var util = require('./utils');
// util.sayHello('pepe');

//CASE 4: Import an object
// var pepe = require('./utils');
// pepe.eat();
