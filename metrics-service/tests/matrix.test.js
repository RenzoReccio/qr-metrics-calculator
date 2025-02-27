import { Matrix } from "../src/domain/matrix.js";

describe("Matrix", () => {
    test("debe calcular el valor maximo correctamente", () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        expect(matrix.maxValue).toBe(9);
    });

    test("debe calcular el valor minimo correctamente", () => {
        const matrix = new Matrix([
            [-1, -2, -3],
            [-4, -5, -6],
            [-7, -8, -9],
        ]);
        expect(matrix.minValue).toBe(-9);
    });

    test("debe calcular la suma de los valores correctamente", () => {
        const matrix = new Matrix([
            [1, 2],
            [3, 4],
        ]);
        expect(matrix.sum).toBe(10);
    });

    test("debe identificar correctamente si una matriz es diagonal", () => {
        const diagonalMatrix = new Matrix([
            [1, 0, 0],
            [0, 2, 0],
            [0, 0, 3],
        ]);
        expect(diagonalMatrix.isDiagonal).toBe(true);

        const nonDiagonalMatrix = new Matrix([
            [1, 2, 0],
            [0, 2, 3],
            [0, 0, 3],
        ]);
        expect(nonDiagonalMatrix.isDiagonal).toBe(false);
    });

    test("debe manejar una matriz vacia sin errores", () => {
        const emptyMatrix = new Matrix([]);
        expect(emptyMatrix.maxValue).toBe(-Infinity);
        expect(emptyMatrix.minValue).toBe(Infinity);
        expect(emptyMatrix.sum).toBe(0);
        expect(emptyMatrix.isDiagonal).toBe(true);
    });
});
