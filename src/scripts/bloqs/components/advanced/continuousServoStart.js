/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'continuousServoStartAdvanced-v1',
    bloqClass: 'bloq-continuous-servo-start-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-continuous-servo-start-advanced-turn'
        }, {
            bloqInputId: 'SERVO',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-continuous-servo-start-advanced-direction'
        }, {
            bloqInputId: 'DIRECTION',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{SERVO}.write({DIRECTION});'
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;