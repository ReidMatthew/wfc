var helper = require('./helper');
var Tile = require('./tile');
var Coop = require('./coop');
var Stack = require('./stack');
var Field = require('./field');

//use webgl
//use serviceworker

const template = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]];

let f = new Field(10,helper.makeTiles(template,3));
console.log(f.f);