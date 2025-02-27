export class QrController {
    constructor(useCase) {
        this.useCase = useCase;
    }

    async factorize(req, res) {
        try {
            const result = await this.useCase.execute(req.body.matrix);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}