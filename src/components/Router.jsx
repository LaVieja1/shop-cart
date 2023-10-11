import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/Root";
import Shop, { shopLoader } from "../routes/Shop";
import { productLoader } from "../routes/Product";
import Product from "../routes/Product";
import App from "../App";
import Cart from "../routes/Cart";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Root />,
                },
                {
                    path: "/shop/products",
                    element: <Shop />,
                    loader: shopLoader,
                },
                {
                    path: "shop/products/:productId",
                    element: <Product />,
                    loader: productLoader,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}