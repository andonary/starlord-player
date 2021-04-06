function Song(path = '', name = 'sans titre', author= 'n/a') {
    let _path = path;
    let _name = name;
    let _author = author;

    Object.defineProperty(this, 'path', {
        get: function () {
            return _path;
        },
        set: function (newPath) {
            _path = newPath;
        }
    });

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (newName) {
            _name = newName;
        }
    });

    Object.defineProperty(this, 'author', {
        get: function () {
            return _author;
        },
        set: function (newAuthor) {
            _author = newAuthor;
        }
    });

    return Object.seal({
        path: _path,
        name: _name,
        author: _author
    })
}

module.exports = Song;
