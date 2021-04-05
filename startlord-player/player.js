function Player() {
}

Player.prototype.play = function () {
    console.log('play !');
};

Player.prototype.pause = function () {
    console.log('pause !');
};

Player.prototype.next = function () {
    console.log('next !');
};

Player.prototype.previous = function () {
    console.log('previous !');
};

module.exports = Player;
