var Coop = require('./coop');

module.exports = class Field {
    constructor(size, tState) {
        this.coops = [];
        this.initCoops(size, tState);
        this.setCoopNeighboors();
    }

    initCoops(size, tState) {
        for (let i = 0; i < size; i++) {
            this.coops[i] = [];
            for (let j = 0; j < size; j++)
                this.coops[i].push(new Coop(i, j, tState || []))
        }
    }

    setCoopNeighboors() {
        this.coops.forEach((a, i) => {
            a.forEach((coop, j) => {
                try { coop.neighboor.push(this.coops[i][j]) }
                catch (e) { coop.neighboor.push('') }

                try { coop.neighboor.push(this.coops[i][j]) }
                catch (e) { coop.neighboor.push('') }

                try { coop.neighboor.push(this.coops[i][j]) }
                catch (e) { coop.neighboor.push('') }

                try { coop.neighboor.push(this.coops[i][j]) }
                catch (e) { coop.neighboor.push('') }
            })
        });
    }
}