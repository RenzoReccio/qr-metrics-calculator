import express from "express";
import QrFactorizationUseCase from "../application/qr-factorization.usecase.js";
import { QrController } from "./controllers/qr.controller.js";
const app = express();
app.use(express.json());

app.post("/api/qr-factorization", (req, res) => {
    const qrFactorizationUseCase = new QrFactorizationUseCase();
    const qrController = new QrController(qrFactorizationUseCase);
    qrController.factorize(req, res);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`QR Service running on port ${PORT}`));
