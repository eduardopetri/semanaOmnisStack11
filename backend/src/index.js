const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Rota /nomeRecurso (ex: localhost:3333/aula)
 */
/**
 * Métodos HTTP:
 * GET: Busca informação no backend
 * POST: Cria uma informação no backend (ex: criar um usuário)
 * PUT: Alterar uma informação no backend
 * DELETE: Deleta a informação no backend
 */
/**Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo ? (Filtros, Paginação)
 * Route Params: Parâmetro usado para identificar recursos
 * Request body: Corpo da requisição, usado para criar/alterar algum recurso.
 */
/**
 * SQL: MySQL, SQLITE, POSTGREESql, Oracle
 * noSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: select * from users
 * Query Builder: table('users').select('*').where()
 */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);   