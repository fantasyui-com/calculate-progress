const round = require('lodash.round');
const padStart = require('lodash.padstart');
const padEnd = require('lodash.padend');
const truncate = require('lodash.truncate');

module.exports = function(value, max, options={fixedWidth:false}){

  const initial = (100.0 * value / max) ;

  const val = round( initial, 2 );

  let [a, b] = (new String(val)).split('.');

  if ( b===undefined ) b = 0;
  b = new String(parseInt(b));
  b = truncate(b, {length:2,omission:''})

  if(options.fixedWidth) a = padStart(a, 3, '0')

  let response = a + '.' + padEnd(b, 2, '0');

  return response;

}
