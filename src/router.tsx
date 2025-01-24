import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductsView from "./views/ProductsView";
import NewProductView, {
  action as newProductAction,
} from "./views/NewProductView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
      },
      {
        path: "productos/agregar",
        element: <NewProductView />,
        action: newProductAction,
      },
    ],
  },
]);
