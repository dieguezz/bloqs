/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'zowiMovementsNoDir',
    bloqClass: 'bloq-zowi-movements-no-dir',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zowi-movements-no-dir'
        }, {
            id: 'MOVEMENT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-no-dir-updown',
                value: 'updown'
            }, {
                label: 'bloq-zowi-movements-no-dir-swing',
                value: 'swing'
            }, {
                label: 'bloq-zowi-movements-no-dir-tiptoeSwing',
                value: 'tiptoeSwing'
            }, {
                label: 'bloq-zowi-movements-no-dir-jitter',
                value: 'jitter'
            }, {
                label: 'bloq-zowi-movements-no-dir-ascendingTurn',
                value: 'ascendingTurn'
            }, {
                label: 'bloq-zowi-movements-no-dir-jump',
                value: 'jump'
            }]
        }, {
            id: 'STEPS',
            alias: 'numberInput',
            value: 4
        }, {
            alias: 'text',
            value: 'bloq-zowi-movements-no-dir-speed'
        }, {
            id: 'SPEED',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-speed-small',
                value: 'LOW_SPEED'
            }, {
                label: 'bloq-zowi-movements-speed-medium',
                value: 'MEDIUM_SPEED'
            }, {
                label: 'bloq-zowi-movements-speed-high',
                value: 'HIGH_SPEED'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zowi-movements-no-dir-height'
        }, {
            id: 'HEIGHT',
            alias: 'staticDropdown',
            options: [ {
                label: 'bloq-zowi-movements-height-small',
                value: 'SMALL_HEIGHT'
            }, {
                label: 'bloq-zowi-movements-height-medium',
                value: 'MEDIUM_HEIGHT'
            },{
                label: 'bloq-zowi-movements-height-big',
                value: 'BIG_HEIGHT'
            }]
        }]
    ],
    code: 'zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;