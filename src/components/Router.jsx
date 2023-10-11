import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root";
import App from "../App";
import Shop, { shopLoader } from "../routes/Shop";

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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}