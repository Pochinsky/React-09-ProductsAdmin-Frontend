import {
  ActionFunctionArgs,
  Form,
  useNavigate,
  redirect,
  useFetcher,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) await deleteProduct(+params.id);
  return redirect("/");
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800 text-left">{product.name}</td>
      <td className="p-3 text-lg text-gray-800 text-right">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800 text-center">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${
              isAvailable ? "text-black" : "text-red-600"
            } rounded-xl px-2 py-1 text-xs uppercase font-bold border border-slate-300 cursor-pointer`}
          >
            {isAvailable ? "Disponible" : "No disponible"}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800">
        <div className="flex flex-col gap-4 items-center justify-center md:flex-row-reverse">
          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if (
                !confirm(
                  "El producto no se podrá eliminar, ¿Aún desea eliminarlo?"
                )
              )
                e.preventDefault();
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer hover:bg-red-500 transition"
            />
          </Form>
          <button
            type="button"
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer hover:bg-indigo-500 transition"
            onClick={() => navigate(`/productos/${product.id}/editar`)}
          >
            Editar
          </button>
        </div>
      </td>
    </tr>
  );
}
