/**
 * Created by vanessavargas on 6/25/2015.
 */
console.log('Battle Ship Game');
var player = window.prompt('Number of Players: 1-2');
var map = window.prompt('Map size:');

var bsg = new BattleShipGame(player,map);

//var bsg = new BattleShipGame(2,8);
