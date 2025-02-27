import { MatrixMetricsUseCase } from "../src/application/matrix-metrics.usecase.js";

// Mock de la clase Matrix para aislar las pruebas
jest.mock("../src/domain/matrix.js", () => {
    return {
        Matrix: jest.fn().mockImplementation((matrix) => ({
            maxValue: Math.max(...matrix.flat()),
            minValue: Math.min(...matrix.flat()),
            sum: matrix.flat().reduce((acc, val) => acc + val, 0),
            isDiagonal: matrix.every((row, i) =>
                row.every((val, j) => (i === j ? true : val === 0))
            ),
        })),
    };
});

describe("MatrixMetricsUseCase", () => {
    let useCase;

    beforeEach(() => {
        useCase = new MatrixMetricsUseCase();
    });

    test("debe calcular el valor maximo, minimo, suma, promedio y si es diagonal", () => {
        const Q = [
            [1, 0, 0],
            [0, 2, 0],
            [0, 0, 3],
        ];
        const R = [
            [4, 0, 0],
            [0, 5, 0],
            [0, 0, 6],
        ];

        const result = useCase.execute(Q, R);

        expect(result.max).toBe(6);
        expect(result.min).toBe(0);
        expect(result.sum).toBe(21);
        expect(result.average).toBe(21 / 6);
        expect(result.isDiagonal).toBe(true);
    });

    test("debe calcular correctamente cuando la matriz no es diagonal", () => {
        const Q = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const R = [
            [9, 8, 7],
            [6, 5, 4],
            [3, 2, 1],
        ];

        const result = useCase.execute(Q, R);

        expect(result.max).toBe(9);
        expect(result.min).toBe(1);
        expect(result.sum).toBe(90);
        expect(result.average).toBe(90 / 6);
        expect(result.isDiagonal).toBe(false);
    });
});
