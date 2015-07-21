/**
 * Created by HS on 18/07/2015.
 */


var GameBoard = function()
{
    this.size = 3;

    this.grid = [[]];
    this.createGrid(this.size);

};


GameBoard.prototype.createGrid = function (size)
{
    var EMPTY_CELL = '|_|';

    for(var i = 0; i < size; i++)
    {
        this.grid[i] = [];
        //
        for(var j = 0; j < size; j++)
        {
            this.grid[i][j] = EMPTY_CELL;
        }
    }
}

GameBoard.prototype.print = function()
{
    for(var i = 0; i < this.size; i++) {
        for(var z = 0; z < this.size; z++) {
            document.write(this.grid[z][i]);
            //document.write("<br>");
            //document.write("_");
        }
        //document.write("_");
        document.write("<br>");
    }
    document.write("<br>");
};

GameBoard.prototype.setPosition = function(input, player)
{
    //var axis = input.split(',');
    //var x = axis[0];
    //var y = axis[1];

    //var axis = input.split(',');
    var axis = this.mapTurn(input);
    //var axis = in
    var x = axis.getRow();
    var y = axis.getColumn();
    console.log('pos x' + x);
    console.log('pos y' + y);

    if(player == 1)
    {
        console.log('player 1');
        this.grid[x][y] = 'X';
        //print();
    }
    if(player == 2)
    {
        this.grid[x][y] = 'O';
    }
};

GameBoard.prototype.mapTurn = function(input)
{
    console.log('switch '+ input);
    switch(input)
    {
        case '1': console.log('pos 1'); return new Axis(0, 0); break;
        case '2': return new Axis(0, 1); break;
        case '3': return new Axis(0, 2); break;
        case '4': return new Axis(1, 0); break;
        case '5': return new Axis(1, 1); break;
        case '6': return new Axis(1, 2); break;
        case '7': console.log('pos 7'); return new Axis(2, 0); break;
        case '8': return new Axis(2, 1); break;
        case '9': return new Axis(2, 2); break;
    }
};
// The method was carried away to ticTacToe.js
/*
 GameBoard.prototype.createTurnObject = function()
 {
 };
 */
module.exports = GameBoard;