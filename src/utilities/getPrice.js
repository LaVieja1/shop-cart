export default function getPrice(data) {
    const price = parseInt(data.variants.edges[0].node.price.amount)
    return Math.round(price)
}