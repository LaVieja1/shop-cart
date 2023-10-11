/* eslint-disable react-refresh/only-export-components */
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";

export async function shopLoader() {
    const products = await getProducts();
    return { products };
}

export default function Shop() {
    const { products } = useLoaderData();
    return (
        <div className="mt-16 text-center">
            <h1 className="text-4xl">Products</h1>
            <div className="mt-4 grid grid-cols-1 grid-rows-fluid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => {
                    return <ProductCard key={product.id} props={product} />
                })}
            </div>
        </div>
    );
}