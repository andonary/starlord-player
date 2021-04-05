const Player = require('./domain/startlord-player/mp3player');
const Playlist = require('./domain/cassette/youtube');
const Song = require('./domain/models/song');

const song = new Song();
song.author = 'peter';
song.name = 'quill';
song.path = 'oula';

const playlist = new Playlist();
playlist.faceA = [song, new Song('t', 'r', 'g')]
const player = new Player(playlist.faceA);

player.play();
player.pause();
player.next();
player.play();
player.previous();
player.play();
