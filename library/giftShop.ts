export class GiftShop {
    private readonly _productIds: string[]
    constructor(data: string) {
        this._productIds = data.split(',')
            .map(ranges => ranges.split('-'))
            .map(range => { return { start: Number.parseInt(range[0]), end: Number.parseInt(range[1]) } })
            .map(range => Array.from({
                length: (range.end - range.start) + 1
            },
                (_, i) => range.start + i
            ))
            .flatMap(range => range.map(val => val.toString()));

    }
    public get simpleInvalidProductIdTotal(): number {
        return this._productIds
            .filter(id => id.length % 2 === 0 &&
                id.slice(0, id.length / 2) === id.slice(id.length / 2)
            )
            .map(id => Number.parseInt(id))
            .reduce((p, c) => p + c, 0);
    }

    public get allInvalidProductIdTotal(): number {
        return this._productIds
            .filter(id => {
                for (let i = 1; i <= id.length / 2; i++) {
                    const start = id.slice(0, i);
                    let match = true;
                    for (let j = i; j < id.length; j = j + i) {
                        if (id.slice(j, i + j) !== start) {
                            match = false;
                            break;
                        }
                    }
                    if (match) return true;
                }
                return false;
            }
            )
            .map(id => Number.parseInt(id))
            .reduce((p, c) => p + c, 0);
    }
}