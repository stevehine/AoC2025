export class Cafeteria {

    private readonly _ranges;
    private readonly _ingredients: number[];
    constructor(data: string[]) {
        this._ranges = data
            .filter(it => it.includes('-'))
            .map(it => it.split('-'))
            .map(vals => { return { start: Number.parseInt(vals[0]), end: Number.parseInt(vals[1]) } });

        this._ingredients = data
            .filter(it => !it.includes('-') && it !== "")
            .map(it => Number.parseInt(it));
    }

    public get FreshIngredientCount(): number {
        return this._ingredients.filter(it =>
            this._ranges.find(range => it >= range.start && it <= range.end)
        ).length;
    }

    public get PossibleFreshIngredientCount(): number {

        const newRanges: { start: number, end: number }[] = [];

        for (const range of this._ranges.toSorted((a, b) => a.start - b.start)) {
            const previous = newRanges.at(-1);

            if (previous && range.start <= previous.end) {
                previous.end = Math.max(range.end, previous.end);
            } else {
                newRanges.push(range);
            }
        }

        return newRanges.map(range => (range.end - range.start) + 1).reduce((p, v) => p + v, 0);
    }
}