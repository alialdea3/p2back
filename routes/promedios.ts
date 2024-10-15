import { productos } from "../types/productos.ts";

export const rPromedio = (req: Request): Response => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const minPrecio = Number(searchParams.get("minPrecio")) || undefined;
    const maxPrecio = Number(searchParams.get("maxPrecio")) || undefined;

    const productoslimpios = productos.filter((producto) =>
        (minPrecio === undefined || producto.precio >= minPrecio) &&
        (maxPrecio === undefined || producto.precio <= maxPrecio)
    );

    const promedio =
        productoslimpios.reduce((acc, producto) => acc + producto.precio, 0) /
        productoslimpios.length;

    return new Response(JSON.stringify({ promedio }));
};
