import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 8082;

app.use(express.json());

app.post("/soma", (req: Request, res: Response) => {
    try {
        const { num1, num2, num3 } = req.body;

        if (num1 === undefined || num2 === undefined || num3 === undefined) {
            return res.status(400).json({
                erro: "Envie os 3 números (num1, num2, num3) no corpo da requisição."
            });
        }

        if (
            typeof num1 !== "number" ||
            typeof num2 !== "number" ||
            typeof num3 !== "number" ||
            isNaN(num1) || isNaN(num2) || isNaN(num3)
        ) {
            return res.status(400).json({
                erro: "Todos os valores informados precisam ser numéricos."
            });
        }

        const resultado = num1 + num2 + num3;
        return res.status(200).json({ resultado });
    } catch (error) {
        return res.status(500).json({ erro: "Erro interno no servidor." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor SOMA rodando em http://localhost:${PORT}`);
});