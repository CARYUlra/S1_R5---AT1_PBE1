# S1_R5 — AT1_PBE1

> Repositório desenvolvido para a atividade **S1_R5 - AT1_PBE1**, contendo três projetos independentes construídos com **Node.js**, **Express.js** e **TypeScript**, focados na criação de rotas `POST`, leitura e validação do corpo da requisição (`req.body`), leitura de arquivos JSON, tratamento de erros e respostas com status HTTP adequados.

---

## Tecnologias Utilizadas

* **Node.js** (ES Modules)
* **TypeScript** (`strict` mode configurado via `tsconfig.json`)
* **Express.js** (`v5.2.1`)
* **TSX** (`tsx watch` para execução e recarregamento automático em desenvolvimento)

---

## Estrutura do Repositório

```text
S1_R5---AT1_PBE1/
├── mensagem/
│   └── app.ts          # Servidor Express com a rota POST /mensagem
├── soma/
│   └── app.ts          # Servidor Express com a rota POST /soma
├── login/
│   ├── app.ts          # Servidor Express com a rota POST /login
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Como Instalar e Executar

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/CARYUlra/meu-novo-projeto-backend.git](https://github.com/CARYUlra/meu-novo-projeto-backend.git)
   cd meu-novo-projeto-backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de cada atividade individualmente** utilizando os scripts configurados no `package.json`:

   * **Projeto 1 — Mensagem:**
     ```bash
     npm run dev:mensagem
     ```
   * **Projeto 2 — Soma:**
     ```bash
     npm run dev:soma
     ```
   * **Projeto 3 — Login:**
     ```bash
     npm run dev:login
     ```

---

## Documentação das Rotas (Endpoints)

Para testar as rotas, utilize o **Postman**, **Insomnia** ou **Thunder Client** enviando requisições `POST` com o cabeçalho `Content-Type: application/json`.

### 1. Projeto Mensagem (`mensagem/app.ts`)
Recebe os dados do usuário no corpo da requisição e retorna uma frase personalizada.

* **Rota:** `POST /mensagem`
* **Corpo da Requisição (JSON):**
  ```json
  {
    "nome": "Carlos",
    "idade": 18,
    "timeFavorito": "Real Madrid"
  }
  ```
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "mensagem": "Olá, Carlos! Você tem 18 anos e torce para o Real Madrid!"
  }
  ```
* **Tratamento de Erros (`400 Bad Request` / `500 Internal Server Error`):** Retorna uma mensagem em JSON caso algum dado obrigatório esteja ausente ou ocorra falha na execução.

---

### 2. Projeto Soma (`soma/app.ts`)
Recebe três números no corpo da requisição, verifica se todos os campos possuem valores numéricos válidos antes de calcular e retorna o resultado.

* **Rota:** `POST /soma`
* **Corpo da Requisição (JSON):**
  ```json
  {
    "num1": 10,
    "num2": 25,
    "num3": 15
  }
  ```
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "resultado": 50
  }
  ```
* **Tratamento de Erros (`400 Bad Request`):** Caso algum campo não seja numérico ou esteja ausente, informa ao cliente os problemas encontrados em formato JSON.

---

### 3. Projeto Login (`login/app.ts`)
Recebe usuário e senha no corpo da requisição, realiza a leitura do arquivo JSON local e valida se as credenciais correspondem ao esperado.

* **Rota:** `POST /login`
* **Corpo da Requisição (JSON):**
  ```json
  {
  "usuario": "S1.R5.AT1.PBE1@gmail.com",
  "senha": "1234"
  }
  ```
* **Resposta de Sucesso (`200 OK`):**
  ```json
  {
    "mensagem": "Login realizado com sucesso!"
  }
  ```
* **Tratamento de Erros (`401 Unauthorized` / `400 Bad Request`):** Caso o usuário ou a senha sejam diferentes do esperado, retorna um erro em formato JSON informando o usuário.
