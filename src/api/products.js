export async function getProducts(productId = '') {
    const prefix = 'gid://shopify/Product/'
    if (productId) {
        const response = await fetch(`https://mock.shop/api?query={product(id:%20%22${prefix}${productId}%22){id%20title%20description%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}%20images(first:%201){edges%20{node%20{url}}}}}`)
        const json = await response.json()

        const productData = json.data.product

        return {
            id: productData.id.match(/\d+$/)[0],
            title: productData.title,
            description: productData.description,
            price: productData.variants.edges[0].node.price.amount,
            image: productData.images.edges[0].node.url,

        }
    }
    const response = await fetch('https://mock.shop/api?query={products(first:%208){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
    const productsData = await response.json()

    return productsData.data.products.edges
}   