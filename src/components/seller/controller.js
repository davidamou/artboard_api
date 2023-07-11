const { db } = require("./data")

exports.getAll = (req, res) => {
  res.json(db).status(200)
}

exports.findOne = (req, res) => {
  console.log(req.params.id)
  const seller = db.find(value => value.id == req.params.id);
  res.json(seller).status(200)
}
