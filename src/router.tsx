import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductsView, {
  loader as productsLoader,
  action as productsAction,
} from "./views/ProductsView";
import NewProductView, {
  action as newProductAction,
} from "./views/NewProductView";
import EditProductView, {
  loader as editProductLoader,
  action as editProductAction,
} from "./views/EditProductView";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
        loader: productsLoader,
        action: productsAction,
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
      {
        path: "productos/:id/eliminar",
        action: deleteProductAction,
      },
    ],
  },
]);
