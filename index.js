const Player = require('./domain/startlord-player/mp3player');
const Playlist = require('./domain/cassette/youtube');
const Song = require('./domain/models/song');

const songOne = new Song('https://www.youtube.com/watch?v=BA4rSO-h9Io', 'Come and get your love', 'Redbone');
const songTwo = new Song('https://www.youtube.com/watch?v=-cXrEPNvRO8', 'Spirit in the sky', 'Norman Greenbaum');
const songThree = new Song('https://www.youtube.com/watch?v=_EBvXpjudf8', 'Cherry Bomb', 'The runaways');

const playlist = new Playlist();
playlist.faceA = [songOne, songTwo, songThree];
const player = new Player(playlist.faceA);

player.play();
player.next();
player.play();
player.next();
player.play();
player.previous();
player.pause();
