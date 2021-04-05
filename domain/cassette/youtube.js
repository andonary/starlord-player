const Links = require('./links');
const extend = require('../../utils/core/extend');

function Youtube() {
    Links.call(this);
}

extend(Youtube, Links);

module.exports = Youtube;
