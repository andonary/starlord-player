const Player = require('./player');
const extend = require('../../utils/core/extend');

function Mp3player(playlist) {
    Player.call(this, playlist);
}

extend(Mp3player, Player);

module.exports = Mp3player;
