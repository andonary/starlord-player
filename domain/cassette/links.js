function Links() {
    let faceA = [];

    Object.defineProperty(this, 'faceA', {
        get: function () {
            return faceA.map(v => Object.freeze(v));
        },
        set: function (newVolumeOne) {
            faceA = newVolumeOne.map(v => Object.freeze(v));
        }
    })
}

module.exports = Links;
