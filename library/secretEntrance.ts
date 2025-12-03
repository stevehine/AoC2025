export class SecretEntrance {
    private readonly _timesPointedAtZero: number = 0;
    private readonly _timesPastZero: number = 0;
    private _dial = 50;
    constructor(data: string[]) {
        for (const line of data) {
            const clicks = Number.parseInt(line.slice(1));
            switch (line[0]) {
                case 'L': this.moveLeft(clicks);
                    break;
                case 'R': this.moveRight(clicks);
                    break;
                default:
                    return;
            }
            if (this._dial === 0) {
                this._timesPointedAtZero += 1;
            }
        }
        //reset Dial
        this._dial = 50;
        for (const line of data) {
            const clicks = Number.parseInt(line.slice(1));
            switch (line[0]) {
                case 'L':
                    for (let i = 0; i < clicks; i++) {
                        this.moveLeft(1);
                        if (this._dial === 0) {
                            this._timesPastZero += 1;
                        }
                    }

                    break;
                case 'R':
                    for (let i = 0; i < clicks; i++) {
                        this.moveRight(1);
                        if (this._dial === 0) {
                            this._timesPastZero += 1;
                        }
                    }

                    break;
                default:
                    return;
            }

        }
    }
    private moveLeft(clicks: number) {
        this._dial -= clicks;
        while (this._dial < 0) {
            this._dial += 100;
        }
    }
    private moveRight(clicks: number) {
        this._dial += clicks;
        while (this._dial > 99) {
            this._dial -= 100;
        }
    }
    public get Password() {
        return this._timesPointedAtZero;
    }

    public get PasswordMethod2() {
        return this._timesPastZero;
    }
}