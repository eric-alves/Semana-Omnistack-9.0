const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
//Este projeto foi desenvolvido utilizando o MongoDB
//Neste trecho do código vc deve colar o link de conexão do banco
mongoose.connect('mongodb+srv://<usuario>:<senha>@cluster0-txzbl.mongodb.net/airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = Acessa os parametros da query para filtros
//req.params = Acessa os parametros da rota para edição ou delete
//req.body = Acessa o corpo da requisição JSON

//app.use(cors({origin: 'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);