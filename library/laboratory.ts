import { count } from "node:console";

export class Laboratory {
    private _splits: number;
    private _timeLines: number;
    constructor(data: string[]) {
        const startLocation = data[0].indexOf("S")
        let beams = [startLocation];
        let splits = 0;
        let timeLines: TimeLine[] = [{ location: startLocation, count: 1 }];

        let i = 0;
        for (const row of data.slice(1)) {

            beams = [...new Set(beams.flatMap(beam => {
                if (row[beam] === '^') {
                    splits++;
                    return [beam - 1, beam + 1];
                }
                return beam;
            }))];


            const updatedTimeLines: TimeLine[] = [];

            for (const timeline of timeLines.flatMap(timeline => {
                if (row[timeline.location] === '^') {
                    return [{ location: timeline.location - 1, count: timeline.count },
                    { location: timeline.location + 1, count: timeline.count }];
                }
                return timeline;
            })) {
                const existingTimeline = updatedTimeLines.find(it => it.location === timeline.location);
                if (existingTimeline) {
                    existingTimeline.count += timeline.count;
                    continue;
                }
                updatedTimeLines.push(timeline);
            }

            timeLines = [...updatedTimeLines];
        }
        this._splits = splits;
        this._timeLines = timeLines.reduce((p, c) => ({ count: p.count + c.count }), { count: 0 }).count;
    }

    public get BeamSplitCount(): number { return this._splits; }
    public get PossibleTimeLines(): number { return this._timeLines; }
}

type TimeLine = { location: number, count: number };