module.exports = class Tile {
    constructor(tpl, row, col, rot, dft) {
        if (dft) this.t = dft;
        else
            switch (rot) {
                case 0:
                    this.t = [
                        [tpl[row][col], tpl[row][col + 1], tpl[row][col + 2]],
                        [tpl[row + 1][col], tpl[row + 1][col + 1], tpl[row + 1][col + 2]],
                        [tpl[row + 2][col], tpl[row + 2][col + 1], tpl[row + 2][col + 2]]
                    ];
                    break;
                case 1:
                    this.t = [
                        [tpl[row + 2][col], tpl[row + 1][col], tpl[row][col]],
                        [tpl[row + 2][col + 1], tpl[row + 1][col + 1], tpl[row][col + 1]],
                        [tpl[row + 2][col + 2], tpl[row + 1][col + 2], tpl[row][col + 2]]
                    ];
                    break;
                case 2:
                    this.t = [
                        [tpl[row + 2][col + 2], tpl[row + 2][col + 1], tpl[row + 2][col]],
                        [tpl[row + 1][col + 2], tpl[row + 1][col + 1], tpl[row + 1][col]],
                        [tpl[row][col + 2], tpl[row][col + 1], tpl[row][col]]
                    ];
                    break;
                case 3:
                    this.t = [
                        [tpl[row][col + 2], tpl[row + 1][col + 2], tpl[row + 2][col + 2]],
                        [tpl[row][col + 1], tpl[row + 1][col + 1], tpl[row + 2][col + 1]],
                        [tpl[row][col], tpl[row + 1][col], tpl[row + 2][col]]
                    ];
                    break;
            }
    }

    getSide(sideNumber) {

    }

    checkSide(sideNumber, compareSide) {

    }
}