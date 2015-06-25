/**
 * Created by vanessavargas on 6/25/2015.
 */

var BattleShipGame = function(numPlayers, size)
{
    console.log('Starting the game with: ', numPlayers, 'player(s)');

    this.players = [];

    for(var i = 0; i < numPlayers; i++)
    {
        var playerName = 'Player ' + i;
        var playerTable = new Table(size);
        var player = new Player(playerName, playerTable);
        this.players.push(player);
    };

};
