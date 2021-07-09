var Coop = require('./coop');

module.exports = class Field {
    constructor(size, tState) {
        this.f = [];
        for (let i = 0; i < size; i++) {
            this.f[i] = [];
            for (let j = 0; j < size; j++)
                this.f[i].push(new Coop(i, j, []))
        }
    }


}