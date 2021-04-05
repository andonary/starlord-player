const Player = require('./startlord-player/mp3player');

const player = new Player();

console.log(player);

player.play();
player.pause();
player.next();
player.previous();
