export class PrintDept {
    private readonly _rollLocations: { x: number, y: number }[];
    constructor(data: string[]) {

        this._rollLocations = data.flatMap((row, rowIndex) => row.split('').map((col, colIndex) => {
            if (col === '@')
                return { x: colIndex, y: rowIndex };
        })).filter(value => value !== undefined);
    }

    public get ReachableRolls(): number {
        return this.reachableRolls(this._rollLocations).length;
    }

    public get TotalRemovableRolls(): number {
        let rollLocations = [...this._rollLocations];

        let reachableCount = 0;

        do {
            const reachable = this.reachableRolls(rollLocations);
            for (const location of reachable) {
                rollLocations = rollLocations.filter(roll => roll.x !== location.x || roll.y !== location.y);
            }
            reachableCount = reachable.length;
        } while (reachableCount > 0)

        return this._rollLocations.length - rollLocations.length;
    }

    private reachableRolls(rollLocations: { x: number, y: number }[]) {
        return rollLocations.filter(location =>
            rollLocations.filter(adjacent =>
                adjacent.x >= location.x - 1 && adjacent.x <= location.x + 1
                && adjacent.y >= location.y - 1 && adjacent.y <= location.y + 1
            ).length <= 4
        )
    }
}