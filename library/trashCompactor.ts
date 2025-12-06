export class TrashCompactor {
    private readonly _spreadSheet: bigint[][] = [];
    private readonly _spreadSheetRotated: bigint[][] = [];
    private readonly _operators: string[];
    constructor(data: string[]) {
        for (const row of data
            .slice(0, -1)
            .map(row => row.trim())
            .map(row =>
                row.split(/\s+/)
            )) {
            row.forEach((col, colIndex) => {
                if (!this._spreadSheet[colIndex])
                    this._spreadSheet[colIndex] = [];
                this._spreadSheet[colIndex].push(BigInt(col));
            })
        }

        let sumNum = 0;
        for (let x = 0; x < data[0].length; x++) {
            let num = "";
            for (let y = 0; y < data.length - 1; y++) {
                num += data[y][x];
            }
            if (num.trim() === "") {
                sumNum++;
                continue;
            }

            if (!this._spreadSheetRotated[sumNum])
                this._spreadSheetRotated[sumNum] = [];

            this._spreadSheetRotated[sumNum].push(BigInt(num));
        }


        this._operators = data.at(-1)!.trim().split(/\s+/);

    }

    public get totalOfSums(): bigint {
        return this._operators
            .map((operator, index) => {
                return this._spreadSheet[index].reduce((p, v) => operator === '*' ? (p * v) : (p + v), operator === '*' ? BigInt(1) : BigInt(0))
            }
            ).reduce((p, v) => p + v, BigInt(0));
    }

    public get totalOfSumsDoneCorrectly(): bigint {
        return this._operators
            .map((operator, index) => {
                return this._spreadSheetRotated[index].reduce((p, v) => operator === '*' ? (p * v) : (p + v), operator === '*' ? BigInt(1) : BigInt(0))
            }
            ).reduce((p, v) => p + v, BigInt(0));
    }
}