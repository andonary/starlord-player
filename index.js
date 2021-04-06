const MP3Player = require('./domain/startlord-player/mp3player');
const YoutubeCassette = require('./domain/cassette/youtube');
const Song = require('./domain/models/song');
const album = require('./infra/album/album');

const listOfSongs = [];
album.forEach(song => listOfSongs.push(new Song(song.youtubeUrl, song.title, song.author)));

const cassette = new YoutubeCassette();
cassette.faceA = listOfSongs;
const walkman = new MP3Player(cassette.faceA);

walkman.play();
walkman.next();
walkman.play();
walkman.next();
walkman.play();
walkman.previous();
walkman.pause();
