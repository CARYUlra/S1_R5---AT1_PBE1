import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 8083;

app.use(express.json());

const USUARIO_CORRETO = "S1.R5.AT1.PBE1@gmail.com";
const SENHA_CORRETA = "1234";

app.post("/login", (req: Request, res: Response) => {
    try {
        const { usuario, senha } = req.body;

        if (!usuario || !senha) {
            return res.status(400).json({
                erro: "Usuário e senha são obrigatórios."
            });
        }

        if (usuario !== USUARIO_CORRETO || String(senha) !== SENHA_CORRETA) {
            return res.status(401).json({
                erro: "Usuário ou senha incorretos.",
                usuarioInformado: usuario
            });
        }

        return res.status(200).json({
            mensagem: "Login realizado com sucesso!"
        });
    } catch (error) {
        return res.status(500).json({ erro: "Erro interno no servidor." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor LOGIN rodando em http://localhost:${PORT}`);
});