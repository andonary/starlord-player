function Links() {
    let faceA = [];

    Object.defineProperty(this, 'faceA', {
        get: function () {
            const newFaceA = faceA.map(v => Object.freeze(v));
            return Object.freeze(newFaceA);
        },
        set: function (newVolume) {
            faceA = newVolume.map(v => Object.freeze(v));
        }
    })
}

module.exports = Links;
