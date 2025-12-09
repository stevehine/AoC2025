export class MovieTheater {

    private readonly _areas: { tile: { x: number, y: number }, opposite: { x: number, y: number }, area: number }[] = [];
    private _outline: { x: number, y: number }[] = [];
    constructor(data: string[]) {
        const tiles = data.map(row => row.split(',')
            .map(value => Number.parseInt(value)))
            .map(tile => ({ x: tile[0], y: tile[1] }));

        let lastTile = tiles.slice(-1).at(0)!;

        const outline: { x: number, y: number }[] = [];

        tiles.forEach((tile, index) => {
            const minX = Math.min(tile.x, lastTile.x);
            const maxX = Math.max(tile.x, lastTile.x);
            const minY = Math.min(tile.y, lastTile.y);
            const maxY = Math.max(tile.y, lastTile.y);
            for (let x = minX; x <= maxX; x += maxX / 10) {
                outline.push({ x, y: tile.y });
            }
            for (let y = minY; y <= maxY; y += maxY / 10) {
                outline.push({ x: tile.x, y });
            }
            lastTile = tile;
            tiles.slice(index + 1).forEach(opposite => {
                const area = (Math.abs(tile.x - opposite.x) + 1)
                    * (Math.abs(tile.y - opposite.y) + 1);
                this._areas.push({ tile: tile, opposite: opposite, area: area })
            })
        })

        this._areas.sort((a, b) => b.area - a.area);

        this._outline = [...new Set(outline)];
    }

    public get LargestArea(): number {
        return this._areas.at(0)!.area;
    }

    public get LargestAreaInPattern(): number {
        for (const area of this._areas) {
            const anyTiles = this._outline.find(it =>
                it.x > Math.min(area.tile.x, area.opposite.x) &&
                it.y > Math.min(area.tile.y, area.opposite.y) &&
                it.x < Math.max(area.tile.x, area.opposite.x) &&
                it.y < Math.max(area.tile.y, area.opposite.y)
            )
            if (anyTiles)
                continue;
            return area.area;
        }
        return 0;
    }
}