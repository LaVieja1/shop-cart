import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="grid h-[100vh] min-h-[30rem] place-items-center bg-[url('/src/assets/hero.jpeg')] bg-cover bg-center bg-no-repeat">            
            <div className="col-start-1 row-start-1 h-full w-full bg-[#2a323c99] opacity-60"></div>
            <div className="z-0 col-start-1 row-start-1 flex max-w-3xl items-center justify-center gap-4 text-[#a6adba] opacity-100">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-center text-3xl font-bold leading-loose text-white sm:text-4xl lg:text-5xl">
                        Explora la mejor colección de ropa online!
                    </h1>

                    <Link
                        to="shop/products"
                        className="rounded-md bg-black px-10 py-2 text-xl font-semibold text-white hover:opacity-80"
                    >
                        Tienda
                    </Link>
                </div>
            </div>
        </div>
    );
}