'use strict';

const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach(file => {
    if (file !== path.basename(module.filename)) {
        const name = file.split('.')[0];
        module.exports[name] = require(path.join(__dirname, name));
    }
});