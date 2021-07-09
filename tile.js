module.exports = class Tile {
    constructor(base, row, col) {
        this.r0 = [
            [base[row][col], base[row][col + 1], base[row][col + 2]],
            [base[row + 1][col], base[row + 1][col + 1], base[row + 1][col + 2]],
            [base[row + 2][col], base[row + 2][col + 1], base[row + 2][col + 2]]
        ];
        this.r1 = [
            [base[row + 2][col], base[row + 1][col], base[row][col]],
            [base[row + 2][col + 1], base[row + 1][col + 1], base[row][col + 1]],
            [base[row + 2][col + 2], base[row + 1][col + 2], base[row][col + 2]]
        ];
        this.r2 = [
            [base[row + 2][col + 2], base[row + 2][col + 1], base[row + 2][col]],
            [base[row + 1][col + 2], base[row + 1][col + 1], base[row + 1][col]],
            [base[row][col + 2], base[row][col + 1], base[row][col]]
        ];
        this.r3 = [
            [base[row][col + 2], base[row + 1][col + 2], base[row + 2][col + 2]],
            [base[row][col + 1], base[row + 1][col + 1], base[row + 2][col + 1]],
            [base[row][col], base[row + 1][col], base[row + 2][col]]
        ];
    }

    getSide(sideNumber) {

    }

    checkSide(sideNumber, compareSide) {

    }
}