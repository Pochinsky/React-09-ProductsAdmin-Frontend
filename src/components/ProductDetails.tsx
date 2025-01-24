import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800 text-left">{product.name}</td>
      <td className="p-3 text-lg text-gray-800 text-right">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800 text-center">
        {isAvailable ? "Disponible" : "No disponible"}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <div className="flex flex-col gap-4 items-center justify-center md:flex-row-reverse">
          <button
            type="button"
            className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer hover:bg-red-500 transition"
          >
            Eliminar
          </button>
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
