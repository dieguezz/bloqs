/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillatorStartAdvanced',
    bloqClass: 'bloq-oscillator-start-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-oscillator-start-advanced-oscillator'
        }, {
            bloqInputId: 'OSCILLATOR',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{OSCILLATOR}.start()'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;