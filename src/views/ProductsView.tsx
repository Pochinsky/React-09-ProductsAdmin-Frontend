import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getProducts, updateAvailability } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";

export async function loader() {
  const products = await getProducts();
  return products;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await updateAvailability(+data.id);
  return "";
}

export default function ProductsView() {
  const products = useLoaderData() as Product[];
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to="productos/agregar"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition"
        >
          Agregar producto
        </Link>
      </div>
      <div className="p-2">
        {products.length ? (
          <table className="w-full mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2 text-left">Producto</th>
                <th className="p-2 text-right">Precio</th>
                <th className="p-2 text-center">Disponibilidad</th>
                <th className="p-2 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductDetails key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-5 text-xl">Agrega tus productos y adminístralos</p>
        )}
      </div>
    </>
  );
}
