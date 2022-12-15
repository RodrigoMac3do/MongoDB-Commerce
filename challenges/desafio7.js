db.produtos.find(
  { vendidos: { $ne: 50 }, tags: { $exists: 0 } },
  { nome: 1, vendidos: 1, tags: 1, _id: 0 }
);
