const proServices = require('../services/proServices')



exports.getProducts = (req, res) => {
  proServices.getProducts()
    .then((products) => res.json(products))
    .catch(() => res.status(500).json({ msg: 'Something went wrong.' }))

}
exports.getSingleProduct = (req, res) => {

  const { id } = req.params

  proServices.getSingleProduct(id)
    .then((product) => res.json(product))
    .catch(() => res.status(404).json({
      msg: 'Product not found'
    }))
}

exports.uploadFile = (req, res) => {
  if (typeof req.file !== 'undefined') {
    res.json({
      imageUrl: 'http://localhost:3000/images/' + req.file.filename
    })
  } else {
    res.status(400).json({
      msg: 'Please upload valid file'
    })
  }
}

exports.addProduct = (req, res) => {
  const { proName, proDetails, proDescription, placing, imageUrl } = req.body

  if (!!proName && proName !== '') {
    proServices.addProduct(proName, proDetails, proDescription, placing, imageUrl)
      .then((newProduct) => res.json(newProduct))
      .catch(() => res.status(500).json({ msg: 'Something went wrong' }))
  } else {
    res.send('Caption can not be blank.')
  }
}

exports.deleteProduct = (req, res) => {
  const { id } = req.params

  proServices.deleteProduct(id)
    .then(() => res.json({}))
    .catch(() => res.status(404).json({
      msg: 'Product not found.'
    }))
}

exports.updateProduct = (req, res) => {
  const {id}=req.params
  const { proName, proDetails, proDescription, placing, imageUrl } = req.body

  proServices.updateProduct(id,{ proName, proDetails, proDescription, placing, imageUrl })
  .then(()=>res.json({
    msg:"Procust updated successfully..."
  }))
  .catch(()=>res.status(404).json({
    msg:"Product not found."
  }))
}