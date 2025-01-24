import { Link } from "react-router-dom";

export default function ProductsView() {
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
    </>
  );
}
