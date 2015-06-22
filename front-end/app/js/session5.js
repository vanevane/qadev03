/**
 * Created by vanessavargas on 6/22/2015.
 */

//funcion anonima

//(function()
//{
//    console.log('Hello World!');
//
//}) ();


//funcion con parametro
//var sayHello = function(name)
//{
//    console.log('Hello ' + name + '!');
//};
//sayHello('pepe');

//funcion anonima con parametro
//(function (name)
//{
//    console.log('Hello ' + name + '!');
//}) ('pepe');

//function print(otherFunction) {
//    otherFunction('pepe');
//}
//print(function(name) {
//    console.log('Hello ' + name + '!');
//});

//------------------

//funcion anonima dentro de otra funcion
//var getsayHello = function()
//{
//    return function(name){
//        console.log('Hello ' + name + ' !');
//    };
//
//};
//var sayHello = getsayHello();


//-----------------------
//
//(function()
//{
//    return function(name){
//        console.log('Hello ' + name + ' world!');
//    };
//
//});

var sayHello = (function()
{
    return function(name){
        console.log('Hello ' + name + ' !');
    };

})();


