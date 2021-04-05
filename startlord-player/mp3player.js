const Player = require('./player');
const extend = require('../utils/core/extend');

function Mp3player() {
    Player.call(this);
}

extend(Mp3player, Player);

module.exports = Mp3player;
