#!/usr/bin/env node

const pct = require('./index.js');

const max = 100;
for (let i=0; i<max; i++){
  console.log( pct(i,max) );
}
