export class Lobby {
    private readonly _banks: number[][] = [];
    constructor(data: string[]) {
        this._banks[2] = data.map(bank => Number.parseInt(this.getLargestJoltage(bank, 2)));
        this._banks[12] = data.map(bank => Number.parseInt(this.getLargestJoltage(bank, 12)));
    }

    private getLargestJoltage(bank: string, digits: number): string {
        const largestDigit = (digits === 1 ? bank : bank.slice(0, -(digits - 1)))
            .split("")
            .map(c => Number.parseInt(c))
            .reduce((p, c) => Math.max(p, c), 0)
            .toString();

        return digits === 1 ? largestDigit : largestDigit + this.getLargestJoltage(bank.slice(bank.indexOf(largestDigit) + 1), digits - 1);
    }

    public getTotalJoltage(digits: number): number {
        return this._banks[digits].reduce((p, c) => p + c, 0);
    }


}

