/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillatorStop',
    bloqClass: 'bloq-oscillator-stop',
    content: [
        [{
            alias: 'text',
            value: 'bloq-oscillator-stop-stop'
        }, {
            id: 'OSCILLATOR',
            alias: 'dynamicDropdown',
            options: 'oscillators'
        }]
    ],
    code: '{OSCILLATOR}.Stop();'

});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;