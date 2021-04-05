function Reader() {
}

Reader.prototype.play = function () {
    console.log('play !');
};

Reader.prototype.pause = function () {
    console.log('pause !');
};

Reader.prototype.next = function () {
    console.log('next !');
};

Reader.prototype.previous = function () {
    console.log('previous !');
};

module.exports = Reader;
