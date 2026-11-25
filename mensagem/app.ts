import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req: Request, res: Response) => {
    try {
        const { nome, idade, time_favorito } = req.body;

        if (!nome || !idade || !time_favorito) {
            return res.status(400).json({
                erro: "Por favor, informe nome, idade e time_favorito."
            });
        }

        const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time_favorito}!`;
        return res.status(200).json({ mensagem });
    } catch (error) {
        return res.status(500).json({ erro: "Erro interno no servidor." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor MENSAGEM rodando em http://localhost:${PORT}`);
});