// src/admin/actions/delete-product-by-id.action.ts

import { projectApi } from "@/api/projectApi";
import { sleep } from "@/lib/sleep";

export const deleteProductByIdAction = async (id: string): Promise<void> => {
    await sleep(1500);

    if (!id) {
        throw new Error("Id is required");
    }

    if (id === "new") {
        throw new Error("Cannot delete a new product");
    }

    await projectApi.delete(`/products/${id}`);
};
