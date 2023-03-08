//é possivel criar uma pasta para gerenciar APIs

export default function capturadorDeRequest(req, res) {
  const id = req.query.id
  res.status(200).json({name: id})
}
