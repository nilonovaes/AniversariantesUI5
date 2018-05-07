module.exports = {

    getRouter : (express) => {

        var path = require('path');
        return express.Router().use('/', express.static(path.join(__dirname, 'webapp')));

    }

};