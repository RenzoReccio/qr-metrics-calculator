export class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    get maxValue() {
        return Math.max(...this.matrix.flat());
    }

    get minValue() {
        return Math.min(...this.matrix.flat());
    }

    get sum() {
        return this.matrix.flat().reduce((sum, val) => sum + val, 0);
    }

    get isDiagonal() {
        return this.matrix.every((row, i) =>
            row.every((val, j) => (i === j ? true : val === 0))
        );
    }

}
