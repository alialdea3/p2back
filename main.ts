import { rProductos } from "./routes/productos.ts";
import { rProducto } from "./routes/producto.ts";
import { rPromedio } from "./routes/promedios.ts";

const handler = (req: Request): Response => {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/productos") {
        return rProductos(req);
    } else if (path.startsWith("/producto/")) {
        return rProducto(req);
    } else if (path === "/calcular-promedio") {
        return rPromedio(req);
    }

    return new Response();
};

Deno.serve({ port: 3000 }, handler);
