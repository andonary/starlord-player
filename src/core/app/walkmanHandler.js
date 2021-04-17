function WalkmanHandler() {
    const MP3Player = require('../domain/startlord-player/mp3player');
    const YoutubeCassette = require('../domain/cassette/youtube');
    const Song = require('../domain/models/song');
    const album = require('../infra/album/album');

    const listOfSongs = [];
    album.forEach(song => listOfSongs.push(new Song(song.youtubeUrl, song.title, song.author)));

    const cassette = new YoutubeCassette();
    cassette.faceA = listOfSongs;
    const walkman = new MP3Player(cassette.faceA);

    Object.defineProperty(this, 'walkman', {
        get: function () {
            return walkman;
        }
    });

    Object.defineProperty(this, 'isPlaying', {
        get: function () {
            return this.walkman.isPlaying;
        },
        set: function (isPlay) {
            isPlay ? this.walkman.play() : this.walkman.pause();
        }
    });

    Object.defineProperty(this, 'currentSongIndex', {
        get: function () {
            return this.walkman.currentSongIndex;
        }
    })

    Object.defineProperty(this, 'url', {
        get: function () {
            return this.isPlaying ? this.walkman.play()?.path : this.walkman.pause()?.path;
        }
    });

    Object.defineProperty(this, 'name', {
        get: function () {
            return this.isPlaying ? this.walkman.play()?.name : this.walkman.pause()?.name;
        }
    });

    Object.defineProperty(this, 'author', {
        get: function () {
            return this.isPlaying ? this.walkman.play()?.author : this.walkman.pause()?.author;
        }
    });
}

WalkmanHandler.prototype.next = function () {
    this.walkman.next();
}

WalkmanHandler.prototype.previous = function () {
    this.walkman.previous();
}

module.exports = WalkmanHandler
