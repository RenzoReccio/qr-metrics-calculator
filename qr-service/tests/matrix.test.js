import { Matrix } from "../src/domain/matrix.js";

describe("Gram-Schmidt QR Factorization", () => {
    test("Debe calcular correctamente Q y R para una matriz 2x2", () => {
        const matrix = new Matrix([
            [1, 1],
            [0, 1],
        ]);

        const { Q, R } = matrix.gramSchmidt();

        expect(Q.length).toBe(2);
        expect(Q[0].length).toBe(2);
        expect(R.length).toBe(2);
        expect(R[0].length).toBe(2);

        expect(Q[0][0]).toBeCloseTo(1);
        expect(Q[1][0]).toBeCloseTo(0);
        expect(Q[0][1]).toBeCloseTo(0);
        expect(Q[1][1]).toBeCloseTo(1);

        expect(R[0][0]).toBeCloseTo(1);
        expect(R[0][1]).toBeCloseTo(1);
        expect(R[1][0]).toBeCloseTo(0);
        expect(R[1][1]).toBeCloseTo(1);
    });

    test("Debe manejar correctamente una matriz identidad", () => {
        const matrix = new Matrix([
            [1, 0],
            [0, 1],
        ]);

        const { Q, R } = matrix.gramSchmidt();

        expect(Q).toEqual([
            [1, 0],
            [0, 1],
        ]);
        expect(R).toEqual([
            [1, 0],
            [0, 1],
        ]);
    });

    test("Debe manejar correctamente una matriz de una sola columna", () => {
        const matrix = new Matrix([
            [3],
            [4],
        ]);

        const { Q, R } = matrix.gramSchmidt();

        expect(Q[0][0]).toBeCloseTo(3 / 5);
        expect(Q[1][0]).toBeCloseTo(4 / 5);
        expect(R[0][0]).toBeCloseTo(5);
    });
});
