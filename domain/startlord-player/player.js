function Player(playlist) {
    this.playlist = playlist;
    this.currentSongIndex = 0;
    this.isPlaying = false;
}

Player.prototype.play = function () {
    this.isPlaying = true;
    console.log(`playing ${this.playlist[this.currentSongIndex].name}`);
};

Player.prototype.pause = function () {
    this.isPlaying = false;
    console.log(`pausing ${this.playlist[this.currentSongIndex].name}`);
};

Player.prototype.next = function () {
    if (this.playlist.length > this.currentSongIndex + 1) {
        this.currentSongIndex++;
    } else {
        this.currentSongIndex = 0;
    }
    console.log('next !');
};

Player.prototype.previous = function () {
    if (this.currentSongIndex - 1 > 0) {
        this.currentSongIndex--;
    } else {
        this.currentSongIndex = this.playlist.length;
    }
    console.log('previous !');
};

module.exports = Player;
