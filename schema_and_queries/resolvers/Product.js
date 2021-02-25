
const product = {
    priceWithDiscount(product) {
        return product.price * (1 - product.discountPercentage/100)
    }
}

module.exports = { ...product }