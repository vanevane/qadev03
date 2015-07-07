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
    var turns = this.tables[0].ships[0].getSize() + this.tables[0].ships[1].getSize() + this.tables[0].ships[2].getSize();

    console.log('Maximum number of turns: ', turns);
    document.write('Maximum number of turns: ', turns);
    document.write("<br>");

    this.tables[0].printFake();
    while(turns > 0)
    {
        var input = window.prompt('Player, input a position i.e. (x,y)'); //0,1
        turns--;
        document.getElementById('main').innerHTML = '';
        document.write('Maximum number of turns: ', turns);
        document.write("<br>");
        this.tables[0].setShipShoot(input);
        this.tables[0].printFake();
    }
    console.log('TOTAL SCORE:', this.tables[0].getScore());
    document.write('TOTAL SCORE:', this.tables[0].getScore());
    document.write("<br>");

    console.log('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    document.write('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    document.write("<br>");

    console.log('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    document.write('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    document.write("<br>");

    console.log('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
    document.write('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
    document.write("<br>");
};

BattleShipGame.prototype.TwoPlayers = function()
{
    var turns1 = this.tables[0].ships[0].getSize() + this.tables[0].ships[1].getSize() + this.tables[0].ships[2].getSize();//1
    var turns2 = this.tables[1].ships[0].getSize() + this.tables[1].ships[1].getSize() + this.tables[1].ships[2].getSize();//2

    console.log('Maximum number of turns for Player 1: ', turns1);
    document.write('Maximum number of turns for Player 1: ', turns1);
    document.write("<br>");

    console.log('Maximum number of turns for Player 2: ', turns2);
    document.write('Maximum number of turns for Player 2:  ', turns2);
    document.write("<br>");
    document.write("<br>");

    this.tables[0].printFake();

    while((turns1 + turns2) > 0) {
        while ((turns1) > 0) {

            console.log('FIRST PLAYER TURN ', turns1);
            document.write('Now, 1st Player Turn');
            document.write("<br>");

            var input = window.prompt('Player 1, input a position i.e. (x,y)'); //0,1
            turns1--;
            document.getElementById('main').innerHTML = '';
            document.write('Maximum number of turns for Player 2: ', turns2);
            document.write("<br>");

            this.tables[1].setShipShoot(input);//shoot enemy
            this.tables[0].printFake();//display own table

            break;
        }


        while (turns2 > 0) {
            console.log('SECOND PLAYER TURN ', turns2);
            document.write('Now, 2nd Player Turn');
            document.write("<br>");

            var input = window.prompt('Player 2, input a position i.e. (x,y)'); //0,1
            turns2--;
            document.getElementById('main').innerHTML = '';
            document.write('Maximum number of turns for Player 1: ', turns1);
            document.write("<br>");

            this.tables[0].setShipShoot(input);//shoot enemy table
            this.tables[1].printFake();//display own table to prepare next shoot

            break;
        }
    }

    console.log('TOTAL SCORE FIRST PLAYER:', this.tables[1].getScore());
    document.write('TOTAL SCORE FIRST PLAYER:', this.tables[1].getScore());
    document.write("<br>");
    console.log('FIRST SHIP STATUS:', this.tables[1].ships[0].getStatus());
    document.write('FIRST SHIP STATUS:', this.tables[1].ships[0].getStatus());
    document.write("<br>");
    console.log('SECOND SHIP STATUS:', this.tables[1].ships[1].getStatus());
    document.write('SECOND SHIP STATUS:', this.tables[1].ships[1].getStatus());
    document.write("<br>");
    console.log('THIRD SHIP STATUS:', this.tables[1].ships[2].getStatus());
    document.write('THIRD SHIP STATUS:', this.tables[1].ships[2].getStatus());
    document.write("<br>");
    document.write("<br>");

    console.log("\n");
    console.log('TOTAL SCORE SECOND PLAYER:', this.tables[0].getScore());
    document.write('TOTAL SCORE SECOND PLAYER:', this.tables[0].getScore());
    document.write("<br>");
    console.log('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    document.write('FIRST SHIP STATUS:', this.tables[0].ships[0].getStatus());
    document.write("<br>");
    console.log('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    document.write('SECOND SHIP STATUS:', this.tables[0].ships[1].getStatus());
    document.write("<br>");
    console.log('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
    document.write('THIRD SHIP STATUS:', this.tables[0].ships[2].getStatus());
    document.write("<br>");
};

//BattleShipGame.prototype.printTables = function()
//{
//    //Start Loop
//    console.log('Table: ', this.players[0].table.grid.join('-'));
//    //End loop
//};
