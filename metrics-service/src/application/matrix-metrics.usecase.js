import { Matrix } from '../domain/matrix.js';
export class MatrixMetricsUseCase {
    execute(Q, R) {
        let matrixQ = new Matrix(Q);
        let matrixR = new Matrix(R);

        const max = matrixQ.maxValue > matrixR.maxValue ? matrixQ.maxValue : matrixR.maxValue;
        const min = matrixQ.minValue < matrixR.minValue ? matrixQ.minValue : matrixR.minValue;
        const sum = matrixQ.sum + matrixR.sum;
        const average = sum / ((Q.length * Q[0].length) + (R.length * R[0].length));

        const isDiagonal = matrixQ.isDiagonal || matrixR.isDiagonal;

        return { max, min, sum, average, isDiagonal, average };
    }
}
