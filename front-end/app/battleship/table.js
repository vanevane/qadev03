/**
 * Created by vanessavargas on 6/22/2015.
 */

var Table = function(size, shipArray)
{
    this.size = size;

    this.grid = [];
    this.createGrid(size);
    this.ships = [];
    //this.ships = this.createShips();
    this.createShips();

};

Table.prototype.createShips = function()
{
    //this.ships.push(new Ship(3, [4,0]));

    var shipId = 1;
    var shipSize = this.getShipRandomSize();
    //var shipInitPos = new RandomAxis(8, 8);
    var shipInitPos = this.getShipRandomPos(shipSize);//returns new axis[4,0]
    var ship = new Ship(shipSize, shipInitPos);

    this.ships.push(ship);

    //var ship1 = new Ship(1, [1,2]);
    //var ship2 = new Ship(2, [3,4]);
    //var ship3 = new Ship(3, [4,5]);
    //var shipArray = [ship1, ship2, ship3];

    for(var j = shipInitPos.getColumn(); j < shipInitPos.getColumn() + shipSize; j++)
    {
        this.grid[j] = shipId; // 1 = first ship;
    }

    //return shipArray;
};

Table.prototype.getShipRandomPos = function(shipSize)
{
    var column;
    //var isFree = false;

    do
    {
        column = parseInt(Math.random() * (this.size - shipSize));
        //var counter = 0;

        for(var i = column; i < column + shipSize; i++)
        {
            if(this.grid[i] != '0')
            {
               break;
            }
        }

        if(i == column + shipSize)
        {
            break;
        }

    } while(true);


    return new Axis(column, 0);

};

Table.prototype.getShipRandomSize = function()
{

    return parseInt(Math.random() * 2) + 1;
};

Table.prototype.createGrid = function(size)
{
    var EMPTY_CELL = '0';

    for(var i = 0; i < size; i++)
    {
        this.grid.push(EMPTY_CELL);
    }

};


