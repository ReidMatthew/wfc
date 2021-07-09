// n: size of tile side
// o: overlap of tiles
function createTiles(n = 3, o = 1) {
    let tiles = [];

    for (let i = 0; i < base.length - (n - o); i += o)
        for (let j = 0; j < base.length - (n - o); j += o)
            try { tiles.push(new Tile(base, i, j)) }
            catch (error) { }

    return tiles;
}