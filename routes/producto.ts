import { productos } from "../types/productos.ts";

export const rProducto = (req: Request): Response => {
    const id = parseInt(req.url.split("/").pop() || "");

    const producto = productos.find((p) => p.id === id);

    return new Response(
        JSON.stringify(producto),
    );
};
