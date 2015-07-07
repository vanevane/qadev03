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

/**
 * This method creates a set of three ships.
 */
Table.prototype.createShips = function()
{
    for(var z = 1; z <= 3; z++)
    {
        var shipId = z;
        var shipSize = this.getShipRandomSize();
        var shipInitPos = this.getShipRandomPos(shipSize);
        var ship = new Ship(shipId, shipSize, shipInitPos);//the Ship class receives an "id" as the first parameter
        this.ships.push(ship);

        for(var j = shipInitPos.getColumn(); j < shipInitPos.getColumn() + shipSize; j++)
        {
            this.grid[j][shipInitPos.getRow()] = shipId;
        }
    }
};

/**
 * This method returns a random position for the ship.
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

/**
 * This method checks whether a ship is 'killed' or 'alive'
 * @param shipId
 */
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

/**
 * Prints the table displaying the position of the ships
 */
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

/**
 * This method prints the table replacing the ships positions by '0'
 */
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

/**
 * This method returns the total score
 * @returns {number|*}
 */
Table.prototype.getScore = function()
{
    return this.score;
};
