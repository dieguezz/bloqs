/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'pinReadAdvanced',
    bloqClass: 'bloq-pin-read-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-pin-read-advanced-readpin'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '\'{PIN}\'.indexOf(\'A\') !== -1 ? \'analogRead({PIN})\' : \'digitalRead({PIN})\'',
    returnType: {
        type: 'simple',
        value: 'bool'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;