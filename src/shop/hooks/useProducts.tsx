import { useQuery } from "@tanstack/react-query";
import { getProductActions } from "../actions/get-products.action";
import { useParams, useSearchParams } from "react-router";

export const useProduts = () => {
    const [searchParams] = useSearchParams();

    const { gender } = useParams();

    const limit = searchParams.get("limit") || 9;
    const page = searchParams.get("page") || 1;
    const sizes = searchParams.get("sizes") || undefined;
    const query = searchParams.get("query") || undefined;

    // Calcula desde qué registro comenzar la consulta
    const offset = (Number(page) - 1) * Number(limit);

    const price = searchParams.get("price") || "any";
    let minPrice = undefined;
    let maxPrice = undefined;

    switch (price) {
        case "any":
            break;

        case "0-50":
            minPrice = 0;
            maxPrice = 50;
            break;

        case "50-100":
            minPrice = 50;
            maxPrice = 100;
            break;

        case "100-200":
            minPrice = 100;
            maxPrice = 200;
            break;

        case "200+":
            minPrice = 200;
            maxPrice = undefined;
            break;
    }

    // Ejecuta la consulta y administra automáticamente el caché
    return useQuery({
        // Identifica la consulta en caché
        queryKey: [
            "products",
            page,
            limit,
            gender,
            sizes,
            minPrice,
            maxPrice,
            query,
        ],

        // Función que obtiene los productos desde la API
        queryFn: () =>
            getProductActions({
                limit: isNaN(+limit) ? 9 : limit,
                offset: isNaN(offset) ? 0 : offset,
                sizes: sizes,
                gender: gender,
                minPrice,
                maxPrice,
                query,
            }),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
};
