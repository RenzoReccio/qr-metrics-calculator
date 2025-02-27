import express from "express";
import { MatrixMetricsUseCase } from "../application/matrix-metrics.usecase.js";
import { MatrixMetricsController } from "./controllers/matrix-metrics.controller.js";
const app = express();
app.use(express.json());


app.post("/api/matrix-metrics", (req, res) => {
    const metricsUseCase = new MatrixMetricsUseCase();
    const matrixMetricsController = new MatrixMetricsController(metricsUseCase);
    matrixMetricsController.calculate(req, res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Metrics Service running on port ${PORT}`));
