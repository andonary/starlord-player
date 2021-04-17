function Player(playlist) {
    this.playlist = playlist;
    this.currentSongIndex = 0;
    this.isPlaying = false;
}

Player.prototype.play = function () {
    this.isPlaying = true;
    return this.playlist[this.currentSongIndex];
};

Player.prototype.pause = function () {
    this.isPlaying = false;
    return this.playlist[this.currentSongIndex];
};

Player.prototype.next = function () {
    if (this.playlist.length > this.currentSongIndex + 1) {
        this.currentSongIndex++;
    } else {
        this.currentSongIndex = 0;
    }
    return this.currentSongIndex;
};

Player.prototype.previous = function () {
    if (this.currentSongIndex - 1 > -1) {
        this.currentSongIndex--;
    } else {
        this.currentSongIndex = this.playlist.length - 1;
    }
    return this.currentSongIndex;
};

module.exports = Player;
