module.exports = class Coop {
    constructor(row, col, tStates) {
        this.isCollapsed = false;
        this.row = row;
        this.col = col;
        this.tStates = tStates;
        this.neighbor = [];
    }


}