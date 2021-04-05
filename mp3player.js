const Reader = require('./reader');
const extend = require('./extend');

function Mp3player() {
    Reader.call(this);
}

extend(Mp3player, Reader);

module.exports = Mp3player;
