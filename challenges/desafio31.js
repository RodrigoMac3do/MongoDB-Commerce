db.produtos.find({
  $expr: {
    $gte: ["$curtidas", "$vendidos"],
  },
}, {
  _id: 0,
  nome: 1,
});