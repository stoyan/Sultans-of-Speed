var read = require('fs').readFileSync;
var write = require('fs').writeFileSync;

var cont = read('sultans.md').toString();

var pieces = cont.split(/\n== /);
pieces.shift();

var sultans = [];
pieces.forEach(function(s) {
  s = s.split('\n');
  var sultan = {};
  sultan.name = s.shift();
  sultan.url = s.shift();
  sultan.photo = s.shift();
  s.pop();
  sultan.bio = s.join('<br><br>');
  sultans.push(sultan);
});

write(
  'generated-sultans.js',
  'var sultans = ' + JSON.stringify(sultans)
);