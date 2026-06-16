import { projectApi } from "@/api/projectApi";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number;
    maxPrice?: number;
    query?: string;
}

export const getProductActions = async (
    options: Options,
): Promise<ProductsResponse> => {
    const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;

    // Peticion HTTP GET
    const { data } = await projectApi.get<ProductsResponse>("/products", {
        params: {
            limit,
            offset,
            gender,
            sizes,
            minPrice,
            maxPrice,
            q: query,
        },
    });

    // // Convierte los nombres de las imágenes en URLs completas para poder mostrarlas
    const productsWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map(
            (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`,
        ),
    }));

    return {
        ...data,
        products: productsWithImageUrls,
    };
};
