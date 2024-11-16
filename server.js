
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const Papa = require('papaparse');

const app = express();
const PORT = 3000;
const CSV_FILE_PATH = path.join(__dirname, 'usuarios.csv');

// Middleware para interpretar JSON
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Rota para carregar os dados do CSV
app.get('/dados', (req, res) => {
    fs.readFile(CSV_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo CSV:', err);
            return res.status(500).json({ error: 'Erro ao carregar os dados.' });
        }
        const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
        res.json(parsedData);
    });
});

// Rota para adicionar um novo usuário ao CSV
app.post('/adicionar', (req, res) => {
    const novoUsuario = req.body;
    console.log(novoUsuario)
    // const linhaCSV = `\n${novoUsuario.id},${novoUsuario.usuario},${novoUsuario.senha},${novoUsuario.email},"${novoUsuario.dados}"`;

    // fs.appendFile(CSV_FILE_PATH, linhaCSV, (err) => {
    //     if (err) {
    //         console.error('Erro ao escrever no arquivo CSV:', err);
    //         return res.status(500).json({ error: 'Erro ao adicionar o usuário.' });
    //     }
    //     res.json({ message: 'Usuário adicionado com sucesso!' });
    // });
});

// Rota para excluir um usuário pelo ID
app.delete('/excluir/:id', (req, res) => {
    const id = req.params.id;

    fs.readFile(CSV_FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Erro ao ler o arquivo CSV.' });

        const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
        const updatedData = parsedData.filter(user => user.id !== id);
        const csvUpdated = Papa.unparse(updatedData);

        fs.writeFile(CSV_FILE_PATH, csvUpdated, (err) => {
            if (err) return res.status(500).json({ error: 'Erro ao atualizar o arquivo CSV.' });
            res.json({ message: 'Usuário excluído com sucesso!' });
        });
    });
});

// Rota para editar um usuário pelo ID
app.put('/editar/:id', (req, res) => {
    const id = req.params.id;
    const usuarioEditado = req.body;

    fs.readFile(CSV_FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Erro ao ler o arquivo CSV.' });

        const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
        const updatedData = parsedData.map(user => user.id === id ? usuarioEditado : user);
        const csvUpdated = Papa.unparse(updatedData);

        fs.writeFile(CSV_FILE_PATH, csvUpdated, (err) => {
            if (err) return res.status(500).json({ error: 'Erro ao atualizar o arquivo CSV.' });
            res.json({ message: 'Usuário editado com sucesso!' });
        });
    });
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

