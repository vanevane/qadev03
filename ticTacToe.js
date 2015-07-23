/**
 * Created by HS on 18/07/2015.
 */
var GameBoard = require('./gameBoard');
var Player = require('./player');

var TicTacToeGame = function()
{
    this.players = [];
    this.gameboard;

    this.turns = []; // Stores the json for turns
    this.player1movements = []; // Stores the inputs for P1
    this.player2movements = []; // Stores the inputs for P2

    this.init();
    this.start();
};

/*
Constructor used for the jasmine testing.
 */
//var TicTacToeGame = function(){};

TicTacToeGame.prototype.init = function()
{
    this.players.push(new Player('Player 1', 'X'));
    this.players.push(new Player('Player 2', 'O'));
    this.gameboard = new GameBoard();
};


TicTacToeGame.prototype.start = function()
{
    this.TwoPlayers();
};

TicTacToeGame.prototype.TwoPlayers = function()
{
    var turns1 = 5;
    var turns2 = 4;

    console.log('Maximum number of turns for Player 1: ', turns1);

    console.log('Maximum number of turns for Player 2: ', turns2);

    this.gameboard.print();

    while((turns1 + turns2) > 0) {

        while ((turns1) > 0) {

            console.log('FIRST PLAYER TURN ', turns1);

            //var input = window.prompt('Player 1, input a position'); //0,1

            //document.getElementById('main').innerHTML = '';
            //document.write('Maximum number of turns for Player 2: ', turns2);
            //document.write("<br>");

            this.gameboard.setPosition(input, 1);

            this.gameboard.print();

            /*
            Storing a turnObject inside the "this.turns" array.
            Storing an input inside the "this.player1movements" array.
             */
            this.turns.push(this.createTurnObject(parseInt(input), 1));
            this.player1movements.push(parseInt(input));
            console.log(this.turns);
            console.log(this.player1movements);

            turns1--;
            break;
        }

        /*
        The "if" that controls who's the winner of the game after at least 3 turns
        from the player 1 and 2 turns from the player 2.
         */
        if((turns1 + turns2) <= 4)
        {
            if(this.checkResult(this.player1movements))
            {
                alert('Player 1 wins!!!');
                return;
            }
            if(this.checkResult(this.player2movements))
            {
                alert('Player 2 wins!!!');
                return;
            }
        }

        while (turns2 > 0) {
            console.log('SECOND PLAYER TURN ', turns2);

            //document.getElementById('main').innerHTML = '';
            //document.write('Maximum number of turns for Player 1: ', turns1);
            //document.write("<br>");

            this.gameboard.setPosition(input, 2);

            this.gameboard.print();

            /*
             Storing a turnObject inside the "this.turns" array.
             Storing an input inside the "this.player2movements" array.
             */
            this.turns.push(this.createTurnObject(parseInt(input), 2));
            this.player2movements.push(parseInt(input));
            console.log(this.turns);
            console.log(this.player2movements);

            turns2--;
            break;
        }
    }
};
/*
Method that creates a "json" that represents a turn (i.e. value, player)
 */
TicTacToeGame.prototype.createTurnObject = function(value, player)
{
    var turnObject = {};

    turnObject = {
        'value': value,
        'player': player
    };

    return turnObject;
};

TicTacToeGame.prototype.getTurns = function() {
    return this.turns;
};

TicTacToeGame.prototype.checkResult = function(array){
    if(this.upperRow(array)){return true;}
    if(this.middleRow(array)){return true;}
    if(this.lowerRow(array)){return true;}
    if(this.leftColumn(array)){return true;}
    if(this.middleColumn(array)){return true;}
    if(this.rightColumn(array)){return true;}
    if(this.upperDiagonal(array)){return true;}
    if(this.lowerDiagonal(array)){return true;}
    return false;
};
/* // Find a RegExp <----------------------------------
TicTacToeGame.prototype.leftColumn = function(array)
{
    var forRegExpSearch = String.prototype.concat(array).replace(/,/g, '');
    return /[147]/.test(forRegExpSearch);
};
*/

/*
The next methods verify the row/column/diagonal winners.
 */
TicTacToeGame.prototype.upperRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 2 || array[i] == 3)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.middleRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 4 || array[i] == 5 || array[i] == 6)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.lowerRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 7 || array[i] == 8 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.leftColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 4 || array[i] == 7)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.middleColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 2 || array[i] == 5 || array[i] == 8)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.rightColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 3 || array[i] == 6 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.upperDiagonal = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 5 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

TicTacToeGame.prototype.lowerDiagonal = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 3 || array[i] == 5 || array[i] == 7)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

module.exports = TicTacToeGame;
