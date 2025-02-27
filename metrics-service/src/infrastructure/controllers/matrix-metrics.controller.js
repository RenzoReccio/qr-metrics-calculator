export class MatrixMetricsController {
    constructor(useCase) {
        this.useCase = useCase;
    }

    async calculate(req, res) {
        try {
            const result = this.useCase.execute(req.body.Q, req.body.R);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}