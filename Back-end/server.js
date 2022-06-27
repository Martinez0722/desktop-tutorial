import app from "./src/app.js";
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`O servidor esta rodando na porta ${port}, iniciado com sucesso`));