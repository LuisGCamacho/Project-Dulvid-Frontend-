import type { User } from "./user.interface";

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    slug: string;
    stock: number;
    sizes: Size[];
    gender: Gender;
    tags: string[];
    images: string[];
    user: User;
}

export type Size =
    | "Cuadernos"
    | "Escritura"
    | "Colores"
    | "Marcadores"
    | "Arte"
    | "Dibujo"
    | "Oficina"
    | "Escolar"
    | "Universidad"
    | "Papeles"
    | "Carpetas"
    | "Organizacion"
    | "Mochilas"
    | "Paquetes";
export type Gender = "kid" | "men" | "women" | "unisex";
