import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Lista 2</h2>
        <p><bdo dir="rtl">Texto invertido</bdo></p>
        <a href="/rota2">Rota 2</a>
    `);
});

app.get('/rota2', (req, res) => {
    res.send(`
        <h2>Rota 2</h2>
        <form action="/rota2" method="POST">
            <label for="user">Usuário:</label>
            <input type="text" id="user" name="user" required><br><br>
            <label for="passw">Senha:</label>
            <input type="password" id="passw" name="passw" required><br><br>
            <button type="submit">Enviar</button>
        </form>
        <a href="/">Rota 1</a>
    `);
});

app.post('/rota2', (req, res) => {
    const { user, passw } = req.body;
    if (passw === 2 * user) {
        res.send('<h3>Acesso permitido</h3>');
    } else {
        res.send('Acesso negado');
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
