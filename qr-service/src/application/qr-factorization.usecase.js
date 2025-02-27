import { Matrix } from '../domain/matrix.js';

export default class QrFactorizationUseCase {
    constructor() {
    }

    async execute(request) {
        let matrix = new Matrix(request);
        const { Q, R } = matrix.gramSchmidt(matrix);
        return { Q, R };
    }
}
