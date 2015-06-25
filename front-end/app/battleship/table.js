/**
 * Created by vanessavargas on 6/22/2015.
 */

var Table = function(size, shipArray)
{
    this.size = size;

    this.grid = [];
    this.createGrid(size);
    this.ships = this.createShips();

};

Table.prototype.createShips = function()
{
    var ship1 = new Ship(1, [1,2]);
    var ship2 = new Ship(2, [3,4]);
    var ship3 = new Ship(3, [4,5]);
    var shipArray = [ship1, ship2, ship3];

    for(var j = 4; j < 4 + 3; j++)
    {
        this.grid[j] = 1; // 1 = first ship;
    }

    return shipArray;
};

Table.prototype.createGrid = function(size)
{
    var EMPTY_CELL = '0';

    for(var i = 0; i < size; i++)
    {
        this.grid.push(EMPTY_CELL);
    }

};


