'use strict';

var bloq = {

    type: 'statement',
    name: 'statement',
    connectors: [{
        type: 'connector--top',
        accept: 'connector--bottom'

    }, {
        type: 'connector--bottom',
        accept: 'connector--top'

    }]
};

module.exports = bloq;