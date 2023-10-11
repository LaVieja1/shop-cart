import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root";
import App from "../App";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Root />,
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}