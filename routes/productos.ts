import { productos } from "../types/productos.ts";

export const rProductos = (req: Request): Response => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const getMinPrecio = searchParams.get("minPrecio");
    const getMaxPrecio = searchParams.get("maxPrecio");

    const minPrecio = getMinPrecio ? Number(getMinPrecio) : undefined;
    const maxPrecio = getMaxPrecio ? Number(getMaxPrecio) : undefined;

    const productoslimpios = productos.filter((producto) => {
        let siminimo = true;
        let simax = true;

        if (minPrecio !== undefined) {
            siminimo = producto.precio >= minPrecio;
        }

        if (maxPrecio !== undefined) {
            simax = producto.precio <= maxPrecio;
        }

        return siminimo && simax;
    });

    return new Response(JSON.stringify(productoslimpios));
};
