import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductsView, { loader as productsLoader } from "./views/ProductsView";
import NewProductView, {
  action as newProductAction,
} from "./views/NewProductView";
import EditProductView, {
  loader as editProductLoader,
  action as editProductAction,
} from "./views/EditProductView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
        loader: productsLoader,
      },
      {
        path: "productos/agregar",
        element: <NewProductView />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar",
        element: <EditProductView />,
        loader: editProductLoader,
        action: editProductAction,
      },
    ],
  },
]);
