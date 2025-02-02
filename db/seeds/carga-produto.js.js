/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('produtos').del()
  await knex('produtos').insert([
    { "id": 1, "descricao": "Camiseta", "marca": "Nike", "preco": 79.90 },
    { "id": 2, "descricao": "Calça Jeans", "marca": "Zara", "preco": 199.90 },
    { "id": 3, "descricao": "Jaqueta de Couro", "marca": "Levi's", "preco": 349.90 },
    { "id": 4, "descricao": "Tênis Esportivo", "marca": "Adidas", "preco": 299.90 },
    { "id": 5, "descricao": "Blusa de Moletom", "marca": "Puma", "preco": 159.90 },
    { "id": 6, "descricao": "Vestido Casual", "marca": "H&M", "preco": 129.90 },
    { "id": 7, "descricao": "Bermuda", "marca": "Tommy Hilfiger", "preco": 149.90 },
    { "id": 8, "descricao": "Boné", "marca": "New Era", "preco": 99.90 },
    { "id": 9, "descricao": "Calça Jeans", "marca": "Levi's", "preco": 199.90 },
    { "id": 10, "descricao": "Boné", "marca": "Nike", "preco": 89.90 }
  ]);
};
