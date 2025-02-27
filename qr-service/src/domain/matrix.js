export class Matrix {
    constructor(array) {
        this.array = array;
    }

    gramSchmidt() {
        const m = this.array.length;
        const n = this.array[0].length;
        let Q = Array.from({ length: m }, () => Array(n).fill(0));
        let R = Array.from({ length: n }, () => Array(n).fill(0));
        let V = this.array.map(row => [...row]);

        for (let k = 0; k < n; k++) {
            R[k][k] = Math.sqrt(V.reduce((sum, row) => sum + row[k] ** 2, 0));
            if (R[k][k] === 0) continue;

            for (let i = 0; i < m; i++) {
                Q[i][k] = V[i][k] / R[k][k];
            }

            for (let j = k + 1; j < n; j++) {
                R[k][j] = Q.reduce((sum, row, i) => sum + row[k] * V[i][j], 0);
                for (let i = 0; i < m; i++) {
                    V[i][j] -= Q[i][k] * R[k][j];
                }
            }
        }

        return { Q, R };
    }
}
