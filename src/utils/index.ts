export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(amount);
}

export function stringToBoolean(str: string) {
  return str.toLowerCase() === "true";
}
