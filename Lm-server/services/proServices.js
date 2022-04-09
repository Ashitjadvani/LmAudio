const Product = require('../models/products')

exports.getProducts = () => {
    return Product.find()


}

exports.addProduct = (proName, proDetails, proDescription, placing, imageUrl) => {

    const product = new Product()

    product.proName = proName
    product.proDetails = proDetails
    product.proDescription = proDescription
    product.placing = placing
    product.imageUrl = imageUrl

    return product.save()
}

exports.getSingleProduct = (id) => {
    return Product.findById(id)
}

exports.updateProduct = (id,proName, proDetails, proDescription, placing, imageUrl) => {
    return Product.findByIdAndUpdate(id,proName, proDetails, proDescription, placing, imageUrl)
 }

exports.deleteProduct = (id) => {
    return Product.findByIdAndDelete(id)
}