
/**
 * Module dependencies.
 */

var css = require('../')
  , str = require('fs').readFileSync(__dirname + '/basic.css', 'utf8');

css.render(str, { filename: 'basic.css' }, function(err, css){
  console.log(css);
});