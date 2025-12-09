export class Playground {

    private readonly _junctionBoxes;
    private readonly _distances: { first: number, second: number, distance: number }[] = [];
    private _circuits: number[][] = [];

    constructor(data: string[]) {

        this._junctionBoxes = data.map(
            row => row.split(',')
        ).map(row => row.map(val => Number.parseInt(val)))
            .map(row => ({ x: row[0], y: row[1], z: row[2] }));

        function square(num: number): number { return num * num };

        this._junctionBoxes.forEach((box, index) => {
            this._junctionBoxes.slice(index + 1)
                .forEach((nextBox, nextIndex) => {
                    this._distances.push({
                        first: index, second: nextIndex + index + 1, distance:
                            square(box.x - nextBox.x)
                            + square(box.y - nextBox.y,)
                            + square(box.z - nextBox.z)
                    });
                })
        })
    }

    public CreateConnections(connectionCount: number | undefined): number {
        for (const link of this._distances.toSorted((a, b) => a.distance - b.distance).slice(0, connectionCount ? connectionCount : this._distances.length)) {
            let a = -1, b = -1;
            this._circuits.forEach((circuit, index) => {
                if (circuit.includes(link.first))
                    a = index;
                if (circuit.includes(link.second))
                    b = index;
            })
            if (a === -1 && b === -1) {
                this._circuits.push([link.first, link.second]);
            } else if (a === -1) {
                this._circuits[b].push(link.first);
            } else if (b === -1) {
                this._circuits[a].push(link.second);
            } else if (a !== b) {
                this._circuits[a].push(...this._circuits[b]);
                this._circuits[b] = [];


            }

            if (this._circuits.toSorted((a, b) => b.length - a.length)[0].length === this._junctionBoxes.length) {
                return (this._junctionBoxes[link.first].x * this._junctionBoxes[link.second].x);
            }
        }
        return 0;
    }

    public get LargestCircuitsProduct(): number {
        return this._circuits
            .toSorted((a, b) => b.length - a.length)
            .slice(0, 3)
            .map(circuit => circuit.length)
            .reduce((p, c) => p * c, 1);
    }
}