/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import logo from '../assets/logoipsum-260.svg';
import { Link, useLocation } from "react-router-dom";

function MobileMenu({ active, handleMenuChange }) {
    return (
        <>
            <div className="flex">
                <input
                onChange={() => handleMenuChange(!active)}
                    id="mobileMenu"
                    className="relative z-[1000] appearance-none"
                    type="checkbox" 
                />
                <label className="cursor-pointer sm:hidden" htmlFor="mobileMenu">
                    {active ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                            ></path>
                        </svg>
                    )}
                </label>
            </div>
        </>
    );
}

export default function Header({ cartLength }) {
    const [isActive, setIsActive] = useState(false);
    const pathName = useLocation();

    function handleMenuChange(state) {
        setIsActive(state);
    }

    useEffect(() => {
        setIsActive(false);
    }, [pathName]);

    return (
        <div className="bg-white">
            <div className="flex items-center p-4 shadow-sm shadow-slate-400">
                <div className="w-42">
                    <img className="w-full" src={logo} alt="Logo" />
                </div>
                <div className="ml-auto mr-24 hidden sm:flex">
                    <ul className="hidden w-full justify-between text-2xl sm:flex">
                        <li className="mx-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="shop/products">Tienda</Link>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto flex gap-2">
                    <div className="flex">
                        <Link to="cart" className="relative flex">
                            {cartLength > 0 && (
                                <span className="absolute right-6 top-0 rounded-[50%] bg-orange-500 px-1 text-sm text-gray-100">
                                    {cartLength}
                                </span>
                            )}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M4 22V6h4q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h4v16H4Zm2-2h12V8h-2v3h-2V8h-4v3H8V8H6v12Zm4-14h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20V8v12Z"
                                    ></path>
                                </svg>
                        </Link>
                    </div>
                    <MobileMenu active={isActive} handleMenuChange={handleMenuChange} />
                </div>
            </div>
            {isActive && (
                <div className="border-b-2 bg-gray-100 sm:hidden">
                    <ul className="flex flex-col gap-4 p-8 text-2xl items-center">
                        <li className="">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="">
                            <Link to="shop/products">Tienda</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}