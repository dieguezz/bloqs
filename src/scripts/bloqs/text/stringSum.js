/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'stringSum',
    bloqClass: 'bloq-string-sum',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: 'String'
        }, {
            alias: 'text',
            value: '+'
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: 'String'
        }]
    ],
    code: 'String({ARG1})+String({ARG2})',
    returnType: {
        type: 'simple',
        value: 'String'
    }
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;