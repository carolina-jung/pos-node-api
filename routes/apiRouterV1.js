var express = require('express');
var apiRouterV1 = express.Router();

var produtos = [
  {
    "id": 1,
    "descricao": "Camiseta",
    "marca": "Nike",
    "preco": 79.90
  },
  {
    "id": 2,
    "descricao": "Calça Jeans",
    "marca": "Zara",
    "preco": 199.90
  },
  {
    "id": 3,
    "descricao": "Jaqueta de Couro",
    "marca": "Levi's",
    "preco": 349.90
  },
  {
    "id": 4,
    "descricao": "Tênis Esportivo",
    "marca": "Adidas",
    "preco": 299.90
  },
  {
    "id": 5,
    "descricao": "Blusa de Moletom",
    "marca": "Puma",
    "preco": 159.90
  },
  {
    "id": 6,
    "descricao": "Vestido Casual",
    "marca": "H&M",
    "preco": 129.90
  },
  {
    "id": 7,
    "descricao": "Bermuda",
    "marca": "Tommy Hilfiger",
    "preco": 149.90
  },
  {
    "id": 8,
    "descricao": "Boné",
    "marca": "New Era",
    "preco": 99.90
  }
]

apiRouterV1.get('/produtos', function (req, res, next) {
  res.json(produtos);
});

apiRouterV1.get('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    let idx = produtos.findIndex(produto => produto.id === idInt)
    if (idx >= 0) {
      res.json(produtos[idx]);
    } else {
      res.status('404').json({ message: 'Produto não encontrado.' })
    }
  } else {
    res.status('404').json({ message: 'Produto não encontrado.' })
  }

});

module.exports = apiRouterV1;
