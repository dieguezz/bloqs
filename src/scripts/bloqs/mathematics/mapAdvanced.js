/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'mapAdvanced',
    bloqClass: 'bloq-map-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-map-advanced-map'
        }, {
            bloqInputId: 'VAR',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            alias: 'text',
            value: 'bloq-map-advanced-value'
        }, {
            bloqInputId: 'INITMIN',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            alias: 'text',
            value: '-'
        }, {
            bloqInputId: 'INITMAX',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            alias: 'text',
            value: 'bloq-map-advanced-and'
        }, {
            bloqInputId: 'FINMIN',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            alias: 'text',
            value: '-'
        }, {
            bloqInputId: 'FINMAX',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            alias: 'text',
            value: ']'
        }]
    ],
    code: 'map({VAR},{INITMIN},{INITMAX},{FINMIN},{FINMAX})',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;