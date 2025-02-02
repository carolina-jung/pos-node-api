var express = require('express');
var apiRouterV2 = express.Router();

const knex = require('knex')(require('../knexfile').development);

apiRouterV2.get('/produtos', function (req, res, next) {
  knex('produtos')
    .select('*')
    .then(produtos => {
      res.status('200').json(produtos);
    })
    .catch(err => { res.status('500').json({ message: `Erro ao obter produtos. ${err.message}` }) });
});

apiRouterV2.get('/produtos/:id', function (req, res, next) {
  let id = parseInt(req.params.id, 10);
  if (id >= 0) {
    knex('produtos')
      .where({ id: id })
      .select('*')
      .then(produtos => {
        if (!produtos.length) {
          res.status('404').json({ message: 'Produto não encontrado.' });
          return;
        }
        let produto = produtos[0];
        res.status('200').json(produto);
      })
      .catch(err => { res.status('500').json({ message: `Erro ao obter produtos. ${err.message}` }) });
  } else {
    res.status('404').json({ message: 'Produto não encontrado.' })
  }

});

apiRouterV2.post('/produtos', function (req, res, next) {
  let produto = req.body;

  knex('produtos')
    .insert(produto, ['id'])
    .then(produto => {
      if (!produto) {
        res.status('400').json({ message: 'Erro ao inserir produto.' });
        return;
      }
      let id = produto[0].id;
      res.status('201').json({ message: 'Produto inserido com sucesso.', data: { id } });
    })
    .catch(err => { res.status('500').json({ message: `Erro ao inserir produto. ${err.message}` }) });
});

apiRouterV2.delete('/produtos/:id', function (req, res, next) {
  let id = parseInt(req.params.id, 10);
  if (id >= 0) {
    knex('produtos')
      .where({ id: id })
      .del()
      .then(() => {
        res.status('200').json({ messagem: 'Produto excluído com sucesso' });
      })
      .catch(err => { res.status('500').json({ message: `Erro ao excluir produto. ${err.message}` }) });
  } else {
    res.status('404').json({ message: 'Produto não encontrado.' })
  }
});

apiRouterV2.put('/produtos/:id', function (req, res, next) {
  let id = parseInt(req.params.id, 10);
  const produto = req.body;

  if (id >= 0) {
    knex('produtos')
      .where({ id: id })
      .update(produto)
      .then(() => {
        res.status('200').json({ message: 'Produto atualizado com sucesso.', data: { produto } });
      })
      .catch(err => { res.status('500').json({ message: `Erro ao atualizar o produto. ${err.message}` }) });
  } else {
    res.status('404').json({ message: 'Produto não encontrado.' })
  }
});

module.exports = apiRouterV2;
