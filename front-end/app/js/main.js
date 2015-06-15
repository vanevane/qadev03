/*
var sayHello = function (name)
{
    console.log("Hello " + name);

};

var Person = function (name)
{
    this.name = name;

    this.eat = function()
    {
        console.log(this.name + ' is eating...');
    }
};

var paco = new Person('Paco');
var pepe = new Person('Pepe');  */

//var age = '';

var calculateAge = function(bornYear)
{
    age = 2015 - bornYear;
    return age;
};

var showAge = function()
{
    return age;

};