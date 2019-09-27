#!/usr/bin/env node

const calculateProgress = require('./index.js');

const max = 100;
for (let i=0; i<=max; i++){
  console.log( `${i} of ${max} = ${calculateProgress(i,max)}% (in standard mode)` );
}

for (let i=0; i<=max; i++){
  console.log( `${i} of ${max} = ${calculateProgress(i,max,{fixedWidth:true})}% (in fixed width mode)` );
}

// const calculateProgress = require('calculate-progress');

const myAge = 41;
const localMortalityAverage = 77;
const tpl = 'Congratulations you have successfully survived %s% of your journey';
const result1 = calculateProgress(myAge, localMortalityAverage);
console.log( tpl + ' (default display mode).', result1 );

const result2 = calculateProgress(myAge, localMortalityAverage, {fixedWidth:true});
console.log( tpl + ' (fixed width mode).', result2 )
