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
            const rangeStart = newRanges.find(it => it.start <= range.start && it.end >= range.start);
            const rangeEnd = newRanges.find(it => it.start <= range.end && it.end >= range.end);
            if (rangeStart && rangeEnd) {
                if (rangeEnd.start != rangeStart.start) {
                    rangeStart.end = rangeEnd.start - 1;
                }
                continue;
            }
            if (rangeStart) {
                if (rangeStart.end < range.end)
                    rangeStart.end = range.end;
                continue;
            }
            if (rangeEnd) {
                if (rangeEnd.start > range.start)
                    rangeEnd.start = range.start
                continue;
            }
            newRanges.push(range);
        }

        return newRanges.map(range => (range.end - range.start) + 1).reduce((p, v) => p + v, 0);
    }
}