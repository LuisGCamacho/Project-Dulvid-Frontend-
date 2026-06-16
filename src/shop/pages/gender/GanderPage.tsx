// Productos por genero

import { CustomPagination } from "@/components/Custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useProduts } from "@/shop/hooks/useProducts";
import { useParams } from "react-router";

export const GanderPage = () => {
    const { gender } = useParams();
    const { data } = useProduts();
    const genderLabel =
        gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />
            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </>
    );
};
