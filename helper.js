var Tile = require('./tile');

// n: size of tile side
// o: overlap of tiles
function makeTiles(tpl, n = 3, o = 1) {
    let tiles = [];

    for (let i = 0; i < tpl.length - (n - o); i += o)
        for (let j = 0; j < tpl.length - (n - o); j += o)
            for (let r = 0; r < 4; r++)
                try { tiles.push(new Tile(tpl, i, j, r)) }
                catch (error) { }

    for (let i = 0; i <= Math.max(...tpl.flat()); i++)
        tiles.push(new Tile(tpl, 0, 0, 0, [[i, i, i], [i, i, i], [i, i, i]]))

    return tiles;
}

module.exports = {
    makeTiles
}