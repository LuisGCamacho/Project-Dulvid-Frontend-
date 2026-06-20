// src/admin/hooks/useDeleteProduct.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductByIdAction } from "../actions/delete-by-id.action";

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProductByIdAction,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
};
