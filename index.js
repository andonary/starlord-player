const MP3Player = require('./src/core/domain/startlord-player/mp3player');
const YoutubeCassette = require('./src/core/domain/cassette/youtube');
const Song = require('./src/core/domain/models/song');
const album = require('./src/core/infra/album/album');

const listOfSongs = [];
album.forEach(song => listOfSongs.push(new Song(song.youtubeUrl, song.title, song.author)));

const cassette = new YoutubeCassette();
cassette.faceA = listOfSongs;
const walkman = new MP3Player(cassette.faceA);

console.log(walkman.play());
walkman.next();
console.log(walkman.play());
walkman.next();
console.log(walkman.play());
walkman.previous();
console.log(walkman.pause());
