var helper = require('./helper');
var Tile = require('./tile');
var Coop = require('./coop');

//use webgl
//use serviceworker

const template = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]];

console.log(helper.makeTiles(template))