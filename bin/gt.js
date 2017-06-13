#!/usr/bin/env node

'use-strict';

var program = require('commander');

require('dotenv').config();

var program = require('commander');
var Twitter = require('twitter');

// by default the output stream is standard out.
program.writer = process.stdout;

program.client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Plugins
require('../lib/logger')(program);
require('../lib/output')(program);
require('../lib/friends')(program);
require('../lib/followers')(program);


program.parse(process.argv);

if (program.args.length < 1) {
  program.log.error('No command specified. See \'' + program._name + ' --help\'.');
  program.outputHelp();
  process.exit(1);
}

module.exports
