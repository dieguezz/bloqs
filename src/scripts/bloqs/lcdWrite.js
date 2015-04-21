/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'lcdWrite',
    content: [
        [{
            alias: 'text',
            value: 'Escribir'
        }, {
            alias: 'stringInput',
            value: ''
        }, {
            alias: 'text',
            value: 'en el LCD'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
