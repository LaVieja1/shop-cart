import { useOutletContext, Link } from "react-router-dom";
import QuantityInput from "../components/QuantityInput";
import CartImage from '../assets/shopCart.png';

export default function Cart() {
    const { cartItems, setCartItems } = useOutletContext();

    const totalPrice = cartItems.reduce((accum, item) => {
        return accum + item.price * item.quantity;
    }, 0);

    function handleIncrementing(itemId) {
        const newCartItems = [...cartItems];
        const product = newCartItems.find((item) => item.id === itemId);
        console.log(itemId);
        product.quantity += 1;
        setCartItems(newCartItems);
    }

    function handleDecrementing(itemId) {
        const newCartItems = [...cartItems];
        const product = newCartItems.find((item) => item.id === itemId);
        if (product.quantity > 1) {
            product.quantity -= 1;
            setCartItems(newCartItems);
        }
    }

    function handleDelete(itemId) {
        const newCartItems = cartItems.filter((item) => item.id !== itemId);

        setCartItems(newCartItems);
    }

    if (cartItems.length < 1) {
        return (
            <div className="mt-20 flex flex-col items-center">
                <img className="mb-10 w-52" src={CartImage} alt="Shopping Cart" />
                <p className="ml-10 text-3xl text-slate-600">Cart is empty!</p>
                <p className="ml-10">
                    Explore{" "}
                    <Link className="underline hover:opacity-70" to="/shop/products">
                        today deals
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 p-4 sm:items-center">
            <div className="sm:p-8">
                <h1 className="mb-8 text-center text-3xl">Cart</h1>
                {cartItems.map((item) => {
                    return (
                        <div
                            className="relative flex w-full max-w-lg gap-4 border p-4 sm:min-w-[600px] "
                            key={item.id}
                        >
                            <div className="w-32 xs:w-24">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="">
                                <p className="text-lg sm:text-2xl">{item.title}</p>
                                <p className="mb-4 font-bold sm:text-xl">${item.price}</p>
                                <QuantityInput
                                    quantity={item.quantity}
                                    incrementQuantity={() => handleIncrementing(item.id)}
                                    decrementQuantity={() => handleDecrementing(item.id)}
                                />
                            </div>

                            <button
                                onClick={() => handleDelete(item.id)}
                                className="absolute right-0 top-0 m-1 rounded-[50%] bg-gray-300 bg-transparent p-1  hover:opacity-70 sm:text-sm"
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col items-center gap-10 self-end p-4">
                <div className="mr-4 flex items-center justify-between gap-4 text-2xl">
                    <p className="font-bold">Total:</p>
                    <p>${totalPrice}</p>
                </div>
            </div>
            <button className="mx-auto mt-4 w-52 bg-sky-700  text-gray-100 hover:bg-sky-600 hover:text-gray-50">
                Checkout
            </button>
        </div>
    );
}