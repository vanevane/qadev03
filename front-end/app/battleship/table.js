/**
 * Created by vanessavargas on 6/22/2015.
 */

var Table = function(size, shipArray)
{
    this.size = size;

    this.grid = [[]];
    this.createGrid(size);

    this.ships = [];
    this.createShips();

    this.score = 0;
};

Table.prototype.createShips = function()
{
    /**
     * This for cycle creates a set of three ships.
     */
    for(var z = 1; z <= 3; z++)
    {
        var shipId = z;
        var shipSize = this.getShipRandomSize();
        var shipInitPos = this.getShipRandomPos(shipSize);
        var ship = new Ship(shipId, shipSize, shipInitPos);//modify the Ship class so it receives and "id" as the first parameter
        this.ships.push(ship);

        for(var j = shipInitPos.getColumn(); j < shipInitPos.getColumn() + shipSize; j++)
        {
            this.grid[j][shipInitPos.getRow()] = shipId; // 1 = first ship;
        }
    }


    /**
     * The following lines also create a set of three ships
     */
    //var shipId1 = 1;
    //var shipSize1 = this.getShipRandomSize();
    //var shipId2 = 2;
    //var shipSize2 = this.getShipRandomSize();
    //var shipId3 = 3;
    //var shipSize3 = this.getShipRandomSize();
    ////console.log('size1 ', shipSize1);
    ////console.log('size2 ', shipSize2);
    ////console.log('size3  ', shipSize3);
    //
    //var shipInitPos1 = this.getShipRandomPos(shipSize1);
    //var shipInitPos2 = this.getShipRandomPos(shipSize2);
    //var shipInitPos3 = this.getShipRandomPos(shipSize3);
    //console.log('pos1 ', shipInitPos1.getColumn(), shipInitPos1.getRow());
    //console.log('pos2 ', shipInitPos2.getColumn(), shipInitPos2.getRow());
    //console.log('pos3 ', shipInitPos3.getColumn(), shipInitPos3.getRow());
    //
    ////var shipInitPos1 = new Axis(3,2);//returns new axis
    ////var shipInitPos2 = new Axis(5,4);//returns new axis
    ////var shipInitPos3 = new Axis(2,6);//returns new axis
    //
    //var ship1 = new Ship(shipSize1, shipInitPos1);
    //var ship2 = new Ship(shipSize2, shipInitPos2);
    //var ship3 = new Ship(shipSize3, shipInitPos3);
    //
    //this.ships.push(ship1);
    //this.ships.push(ship2);
    //this.ships.push(ship3);
    //
    //for(var j = shipInitPos1.getColumn(); j < shipInitPos1.getColumn() + shipSize1; j++)
    //{
    //    this.grid[j][shipInitPos1.getRow()] = shipId1; // 1 = first ship;
    //}
    //for(var j = shipInitPos2.getColumn(); j < shipInitPos2.getColumn() + shipSize2; j++)
    //{
    //    this.grid[j][shipInitPos2.getRow()] = shipId2; // 2 = second ship;
    //}
    //for(var j = shipInitPos3.getColumn(); j < shipInitPos3.getColumn() + shipSize3; j++)
    //{
    //    this.grid[j][shipInitPos3.getRow()] = shipId3; // 3 = third ship;
    //}//col, row
};

/**
 * This method returns a random position for the ship.
 * However since sometimes it takes too long to return a value, and the JS page cannot be loaded,
 * this method is not currently used.
 * @param shipSize
 * @returns {Axis}
 */
Table.prototype.getShipRandomPos = function(shipSize)
{
    var column;
    var row;

    do
    {
        column = parseInt(Math.random() * (this.size - shipSize));
        row = parseInt(Math.random() * (this.size - shipSize));

        for(var i = row; i < (row + shipSize); i++)
        {
            if(this.grid[column][i] != '0')
            {
               break;
            }
        }

        if(i == row + shipSize)
        {
            break;
        }

    } while(true);
    return new Axis(column, row);
};

/**
 * This method return a random size for a size.
 * The number of turns a player has it is based on the addition of all the ship sizes.
 * @returns {number}
 */
Table.prototype.getShipRandomSize = function()
{
    return parseInt(Math.random() * 3) + 1;
};

/**
 * This method creates a multidimensional array (nxn) that works as the table of the game
 * @param size
 */
Table.prototype.createGrid = function(size)
{
    var EMPTY_CELL = '0';

    for(var i = 0; i < size; i++)
    {
        this.grid[i] = new Array();
        //
        for(var j = 0; j < size; j++)
        {
            this.grid[i][j] = EMPTY_CELL;
        }

    }
};

/**
 * This method is called whenever a shoot is made.
 * @param input
 */
Table.prototype.setShipShoot = function(input)
{
    var axis = input.split(',');
    var x = axis[0];
    var y = axis[1];

    if(this.grid[x][y] != 0)
    {
        console.log('Ship hit!');
        if( this.grid[x][y] == 1)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(0);
            this.score += this.ships[0].getValue();
        }
        if( this.grid[x][y] == 2)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(1);
            this.score += this.ships[1].getValue();
        }
        if( this.grid[x][y] == 3)
        {
            this.grid[x][y] = 'X';
            this.checkStatus(2);
            this.score += this.ships[2].getValue();
        }
    }
    else
    {
        this.grid[x][y] = '-';
        console.log('NO ship was hit');
    }

};

Table.prototype.checkStatus = function(shipId)
{
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
            document.write(this.grid[z][i]);
        }
        document.write("<br>");
    }
    document.write("<br>");
};

Table.prototype.printFake = function()
{
    var header = '';
    for(var k = 0; k < this.size; k++)
    {
        header += '= ';
    };

    document.write(header);
    document.write("<br>");
    for(var i = 0; i < this.size; i++) {
        for(var z = 0; z < this.size; z++) {
            if(this.grid[z][i] == 1 || this.grid[z][i] == 2 || this.grid[z][i] == 3)
            document.write('0 ');
            else
                document.write(this.grid[z][i], '  ');
        }
        document.write("<br>");
    }
    document.write(header);
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