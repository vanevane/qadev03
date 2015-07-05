/**
 * Created by vanessavargas on 6/22/2015.
 */

var Table = function(size, shipArray)
{
    this.size = size;

    this.grid = [[]];
    this.createGrid(size);
    this.ships = [];
    //this.ships = this.createShips();
    this.createShips();
    this.score = 0;

};

Table.prototype.createShips = function()
{
    //this.ships.push(new Ship(3, [4,0]));

    //for(var z = 1; z <= 3; z++)
    //{
    //    var shipId = z;
    //    var shipSize = this.getShipRandomSize();
    //    var shipInitPos = this.getShipRandomPos(shipSize);
    //    //var shipInitPos1 = new Axis(2,3);//returns new axis[4,0]
    //    //var shipInitPos2 = new Axis(4,5);//returns new axis[4,0]
    //    //var shipInitPos3 = new Axis(6,2);//returns new axis[4,0]
    //    var ship = new Ship(shipId, shipSize, shipInitPos);
    //    //var ship2 = new Ship(shipId, this.getShipRandomSize(), shipInitPos2);
    //    //var ship3 = new Ship(shipId, this.getShipRandomSize(), shipInitPos3);
    //    this.ships.push(ship);
    //
    //    for(var j = shipInitPos.getRow(); j < shipInitPos.getRow() + shipSize; j++)
    //    {
    //        //console.log(shipInitPos.getColumn());
    //        //console.log(shipInitPos.getRow());
    //        this.grid[shipInitPos.getColumn()][j] = shipId; // 1 = first ship;
    //    }
    //    //this.ships.push(ship2);
    //    //this.ships.push(ship3);
    //}


    var shipId1 = 1;
    var shipSize1 = this.getShipRandomSize();
    var shipId2 = 2;
    var shipSize2 = this.getShipRandomSize();
    var shipId3 = 3;
    var shipSize3 = this.getShipRandomSize();
    console.log('size1 ', shipSize1);
    console.log('size2 ', shipSize2);
    console.log('size3  ', shipSize3);
    //var shipInitPos = new RandomAxis(8, 8);
    //var shipInitPos = this.getShipRandomPos(shipSize);//returns new axis[4,0]
    var shipInitPos1 = new Axis(2,3);//returns new axis[4,0]
    var shipInitPos2 = new Axis(4,5);//returns new axis[4,0]
    var shipInitPos3 = new Axis(6,2);//returns new axis[4,0]

    var ship1 = new Ship(shipSize1, shipInitPos1);
    var ship2 = new Ship(shipSize2, shipInitPos2);
    var ship3 = new Ship(shipSize3, shipInitPos3);

    this.ships.push(ship1);
    this.ships.push(ship2);
    this.ships.push(ship3);

    //var ship1 = new Ship(1, [1,2]);
    //var ship2 = new Ship(2, [3,4]);
    //var ship3 = new Ship(3, [4,5]);
    //var shipArray = [ship1, ship2, ship3];

    for(var j = shipInitPos1.getRow(); j < shipInitPos1.getRow() + shipSize1; j++)
    {
        //console.log(shipInitPos.getColumn());
        //console.log(shipInitPos.getRow());
        this.grid[shipInitPos1.getColumn()][j] = shipId1; // 1 = first ship;
    }
    for(var j = shipInitPos2.getRow(); j < shipInitPos2.getRow() + shipSize2; j++)
    {
        //console.log(shipInitPos.getColumn());
        //console.log(shipInitPos.getRow());
        this.grid[shipInitPos2.getColumn()][j] = shipId2; // 1 = first ship;
    }
    for(var j = shipInitPos3.getRow(); j < shipInitPos3.getRow() + shipSize3; j++)
    {
        //console.log(shipInitPos.getColumn());
        //console.log(shipInitPos.getRow());
        this.grid[shipInitPos3.getColumn()][j] = shipId3; // 1 = first ship;
    }

    //return shipArray;
};

Table.prototype.getShipRandomPos = function(shipSize)
{
    var column;
    //var isFree = false;

    do
    {
        //column = parseInt(Math.random() * (this.size - shipSize));
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
    return parseInt(Math.random() * 3) + 1;
};

Table.prototype.createGrid = function(size)
{
    var EMPTY_CELL = '0';

    for(var i = 0; i < size; i++)
    {
        //this.grid.push(EMPTY_CELL);
        this.grid[i] = new Array();
        //
        for(var j = 0; j < size; j++)
        {
            //this.grid[i][j].push(EMPTY_CELL);
            this.grid[i][j] = EMPTY_CELL;
        }

    }
};

Table.prototype.setShipShoot = function(input)
{
    var axis = input.split(',');
    var x = axis[0];
    var y = axis[1];

    //console.log(this.ships[0].getStatus());
    //console.log('x:', x);
    if(this.grid[x][y] != 0)
    {
        console.log('Ship hit!');
        if( this.grid[x][y] == 1)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(0);
            this.score += this.ships[0].getValue();
            //console.log(this.ships[0].getStatus(), '1');
        }
        if( this.grid[x][y] == 2)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(1);
            this.score += this.ships[1].getValue();
            //console.log(this.ships[1].getStatus(), '2');
        }
        if( this.grid[x][y] == 3)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(2);
            this.score += this.ships[2].getValue();
            //console.log(this.ships[2].getStatus(), '3');
        }
    }
    else
    console.log('NO ship was hit');
};

Table.prototype.checkStatus = function(shipId)
{
    //console.log('checking status');
    var flag = 0;
    for(var j = this.ships[shipId].getPosition().getRow(); j < this.ships[shipId].getPosition().getRow() + this.ships[shipId].getSize(); j++) {
        if (this.grid[this.ships[shipId].getPosition().getColumn()][j] == 'X') {
            flag++
        }
        if (flag == this.ships[shipId].getSize()) {
            this.ships[shipId].setStatus();
        }
    }
};

Table.prototype.print = function()
{
    for(var i = 0; i < this.size; i++) {
        for(var z = 0; z < this.size; z++) {
            document.write(this.grid[i][z]);
        }
        document.write("<br>");
    }
    document.write("<br>");
};

Table.prototype.printFake = function()
{
    for(var i = 0; i < this.size; i++) {
        for(var z = 0; z < this.size; z++) {
            if(this.grid[i][z] == 1 || this.grid[i][z] == 2 || this.grid[i][z] == 3)
            //console.log(this.grid[z][i]);
            document.write('0 ');
            else
                document.write(this.grid[i][z], ' ');
        }
        //document.write("\n");
        document.write("<br>");
    }
    document.write("<br>");
};

Table.prototype.getScore = function()
{
    return this.score;
};

Table.prototype.getShip1 = function()
{
    return this.ships[0];
};