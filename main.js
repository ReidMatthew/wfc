var Tile = require('./tile')

const template = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]];

function makeTiles(tpl = template, n = 3, o = 1) {
    let tiles = [];

    for (let i = 0; i < tpl.length - (n - o); i += o)
        for (let j = 0; j < tpl.length - (n - o); j += o)
            for (let r = 0; r < 4; r++)
                try { tiles.push(new Tile(tpl, i, j, r)) }
                catch (error) { }

    for (let i = 0; i <= Math.max(...tpl.flat()); i++)
        try { tiles.push(new Tile(tpl, 0, 0, 0, [[i,i,i],[i,i,i],[i,i,i]])) }
        catch (error) { }

    return tiles;
}

console.log(...makeTiles());