/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useOutletContext } from "react-router-dom";
import { getProducts } from "../api/products";
import { useState } from "react";
import QuantityInput from "../components/QuantityInput";

export async function productLoader({ params }) {
    const product = await getProducts(params.productId);
    return { product };
}

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const { handleProductAdded } = useOutletContext();

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };

    const { product } = useLoaderData();

    const pickedProduct = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity,
    };

    return (
        <div className="mx-auto mt-10 p-8 md:flex md:max-w-5xl">
            <div className="mx-auto w-60 sm:w-72 md:m-0 md:w-96">
                <img className="w-full" src={product.image} alt="product image" />
            </div>
            <div className="ml-4 flex flex-col flex-wrap justify-between p-4 md:w-1/2">
                <p className="text-2xl sm:text-3xl md:text-4xl">{product.title}</p>
                <p className="mt-2 text-2xl font-bold text-sky-700">${product.price}</p>
                <p className="p-4 text-lg">{product.description}</p>
                <div className="flex items-center gap-4">
                    <QuantityInput 
                        quantity={quantity}
                        decrementQuantity={decrementQuantity}
                        incrementQuantity={incrementQuantity}
                    />
                    <button
                        onClick={() => handleProductAdded(pickedProduct)}
                        className="mx-auto mt-auto flex w-full max-w-sm  justify-center gap-4 border border-gray-400 font-bold text-gray-50 outline-none transition-colors duration-300 hover:bg-gray-50 hover:text-black"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M220.61 60.16A6 6 0 0 0 216 58H53l-5.17-28.5A14 14 0 0 0 34.05 18H16a6 6 0 0 0 0 12h18a2 2 0 0 1 2 1.64l25.51 140.3a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.14 6.29h52.22A26 26 0 1 0 180 178H83.17a10 10 0 0 1-9.84-8.21L69.73 150H188.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91ZM98 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm3.94-74.21a10 10 0 0 1-9.84 8.21H67.55L55.19 70h153.62Z"
                            ></path>
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}