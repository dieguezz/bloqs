 /*global require */
 'use strict';

 var _ = require('lodash'),
     utils = require('./../../utils'),
     GroupBloq = require('./../groupBloq');

 var bloq = _.merge(_.clone(GroupBloq, true), {

     name: 'setupBloq',
     bloqClass: 'bloq-setup',
     headerText: 'bloq-setup-header',
     descriptionText: 'bloq-setup-description',
     content: [],
     code: 'void setup(){{STATEMENTS}}'
 });

 utils.generateBloqInputConnectors(bloq);


 module.exports = bloq;