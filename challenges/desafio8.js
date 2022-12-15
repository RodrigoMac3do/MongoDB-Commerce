db.produtos.remove({ curtidas: { $lt: 50 } }, { nome: 1, curtidas: 1, _id: 0 });

db.produtos.find({}, { nome: 1, _id: 0 });
