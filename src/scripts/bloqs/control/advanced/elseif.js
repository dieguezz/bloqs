/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementInputBloq = require('./../../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'elseifAdvanced',
    bloqClass: 'bloq-else-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-else-if-if'
        }, {
            bloqInputId: 'VAR',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-else-if-else'
        }]
    ],
    code: 'else if ({VAR}){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;