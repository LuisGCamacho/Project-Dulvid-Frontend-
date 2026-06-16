// Esta función sirve para formatear un número como moneda usando la configuración regional Mexico.
export const currencyFormatter = (value: number) => {
    return value.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
    });
};
