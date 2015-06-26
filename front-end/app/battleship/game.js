/**
 * Created by vanessavargas on 6/25/2015.
 */

var BattleShipGame = function(numPlayers, size)
{
    console.log('Starting the game with: ', numPlayers, 'player(s)');

    this.players = [];

    this.init(numPlayers, size);
    this.start();


};

BattleShipGame.prototype.init = function(numPlayers, size)
{
    for(var i = 0; i < numPlayers; i++)
    {
        var playerName = 'Player ' + i;
        var playerTable = new Table(size);
        var player = new Player(playerName, playerTable);
        this.players.push(player);
    };

};

BattleShipGame.prototype.start = function()
{
    //Start Loop
    this.printTables();
    var input = window.prompt('Shoot'); //0,1
    console.log('shoot is:', input);
    //End Loop
};

BattleShipGame.prototype.printTables = function()
{
    //Start Loop
    console.log('Table: ', this.players[0].table.grid.join('-'));
    //End loop
};
