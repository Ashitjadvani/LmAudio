exports.addProductValidator = (req, res, next) => {

    const { proName, proDetails, proDescription,placing,imageUrl } = req.body
    let errors = {}

    if (proName === '') errors.proName = 'Product name can not be blank.'
    if (proDetails === '') errors.proDetails = 'Details can not be blank.'
    if (proDescription === '') errors.proDescription = 'Description Can not be blank.'
    if (placing === '') errors.placing = 'Placing Can not be blank.'
    if (imageUrl === '') errors.imageUrl = 'Image Can not be blank.'

    if (Object.keys(errors).length === 0) {
      next()
    } else {
      res.status(400).json(errors)
    }
  }
