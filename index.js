const Reader = require('./mp3player');

const reader = new Reader();

console.log(reader);

reader.play();
reader.pause();
reader.next();
reader.previous();