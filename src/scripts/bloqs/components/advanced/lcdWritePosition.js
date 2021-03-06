/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'lcdWritePositionAdvanced-v1',
    bloqClass: 'bloq-lcd-writte',
    content: [
        [{
            alias: 'text',
            value: 'bloq-lcd-writte-write'
        }, {
            bloqInputId: 'TEXT',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-lcd-writte-inLCD'
        }, {
            bloqInputId: 'LCD',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-lcd-writte-advanced-inPosition'
        }, {
            bloqInputId: 'COLUMN',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            bloqInputId: 'ROW',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});'

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;