/**
 * Created by vanessavargas on 6/25/2015.
 */

/**
 *
 * @param numPlayers
 * @param size
 * @constructor
 */
var BattleShipGame = function(numPlayers, size) {
    console.log('Starting the game with: ', numPlayers, 'player(s)');

    this.players = [];
    this.tables = [];
    //this.playerTable;

    this.init(numPlayers, size);
    this.start();
};
    /**
     * Player creation
     * Table creation
     * @param numPlayers
     * @param size
     */

BattleShipGame.prototype.init = function(numPlayers, size)
{

    for(var i = 0; i < numPlayers; i++)
    {
        var playerName = 'Player ' + i;
        var player = new Player(playerName, playerTable);
        var playerTable = new Table(size);
        this.tables.push(playerTable);
        this.players.push(player);
    };

};

    /**
     * Game starts
     * Print tables
     */
BattleShipGame.prototype.start = function()
{


    if(this.players.length == 1)
    {
        this.SinglePlay();
    }
    else
    {
        this.TwoPlayers();
    }



};

BattleShipGame.prototype.SinglePlay = function()
{
    //console.log(this.tables[0][ships][0]);
    var turns = this.tables[0].ships[0].getSize() + this.tables[0].ships[1].getSize() + this.tables[0].ships[2].getSize();

    console.log('Maximum number of turns: ', turns);
    while(turns > 0)
    {
        console.log('');
        //Start Loop
        //this.printTables();
        //this.playerTable.print();
        //console.log('fake');

        var input = window.prompt('Shoot'); //0,1
        this.tables[0].setShipShoot(input);
        this.tables[0].printFake();
        //this.printTables();
        //this.playerTable.print();
        turns--;

        //console.log('shoot is:', input);
        //console.log('x:', x, 'y:', y);


        //var shoot = new Shooter(axis[0], axis[1], playerTable);
        //End Loop

    }
    console.log('TOTAL SCORE:', this.tables[0].getScore());
    console.log('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    console.log('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    console.log('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
};

BattleShipGame.prototype.TwoPlayers = function()
{
    var turns1 = this.tables[0].ships[0].getSize() + this.tables[0].ships[1].getSize() + this.tables[0].ships[2].getSize();
    var turns2 = this.tables[1].ships[0].getSize() + this.tables[1].ships[1].getSize() + this.tables[1].ships[2].getSize();

    console.log('Maximum number of turns for Player 1: ', turns1);
    console.log('Maximum number of turns for Player 2: ', turns2);
    var flag = true;
    if(flag)
    {
        while ((turns1) > 0) {

            console.log('FIRST PLAYER TURN');
            var input = window.prompt('Shoot'); //0,1
            this.tables[0].setShipShoot(input);
            this.tables[0].printFake();
            turns1--
            flag = false;
            continue;
        }



    }
    else
    {
        while(turns2 > 0)
        {
            console.log('SECOND PLAYER TURN');
            var input = window.prompt('Shoot'); //0,1
            this.tables[1].setShipShoot(input);
            this.tables[1].printFake();
            turns2--;
            flag = true;

        }

    }


    console.log('TOTAL SCORE FIRST PLAYER:', this.tables[0].getScore());
    console.log('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    console.log('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    console.log('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
    console.log('<br>');
    console.log('TOTAL SCORE SECOND PLAYER:', this.tables[1].getScore());
    console.log('FIRST SHIP STATUS:', this.tables[1].ships[0].getStatus());
    console.log('SECOND SHIP STATUS:', this.tables[1].ships[1].getStatus());
    console.log('THIRD SHIP STATUS:', this.tables[1].ships[2].getStatus());
};

BattleShipGame.prototype.printTables = function()
{
    //Start Loop
    console.log('Table: ', this.players[0].table.grid.join('-'));
    //End loop
};
