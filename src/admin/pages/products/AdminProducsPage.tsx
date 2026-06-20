import { AdminTitle } from "@/admin/components/AdminTitle";
import { useDeleteProduct } from "@/admin/hooks/useDeleteProduct";
import { CustomFullScreenLoading } from "@/components/Custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/Custom/CustomPagination";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currency-formartter";
import { useProduts } from "@/shop/hooks/useProducts";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
    const { data, isLoading } = useProduts();

    const deleteMutation = useDeleteProduct();

    const handleDelete = async (id: string, title: string) => {
        const confirmed = window.confirm(
            `¿Seguro que deseas eliminar "${title}"?`,
        );

        if (!confirmed) return;

        try {
            await deleteMutation.mutateAsync(id);
        } catch (error) {
            console.error(error);
            alert("No se pudo eliminar el producto");
        }
    };

    if (isLoading) {
        return <CustomFullScreenLoading />;
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <AdminTitle
                    title="Productos"
                    subtitle="Aquí puedes ver y administrar tus productos"
                />

                <div className="flex justify-end mb-10 gap-4">
                    <Link to="/admin/products/new">
                        <Button className="bg-violet-700 py-5 hover:bg-violet-900">
                            <PlusIcon />
                            Nuevo producto
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-white shadow-xs border border-gray-200 rounded-xl overflow-hidden mb-10">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F4EDFF]">
                            <TableHead>Imagen</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Precio</TableHead>
                            <TableHead>Categoría</TableHead>
                            <TableHead>Inventario</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data?.products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                </TableCell>

                                <TableCell>{product.title}</TableCell>

                                <TableCell>
                                    {currencyFormatter(product.price)}
                                </TableCell>

                                <TableCell>{product.tags.join(", ")}</TableCell>

                                <TableCell>{product.stock} stock</TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-4">
                                        <Link
                                            to={`/admin/products/${product.id}`}
                                        >
                                            <PencilIcon className="text-violet-700 w-4 h-4" />
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    product.id,
                                                    product.title,
                                                )
                                            }
                                            disabled={deleteMutation.isPending}
                                        >
                                            <Trash2Icon className="text-red-600 w-4 h-4 cursor-pointer" />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <CustomPagination totalPages={data?.pages || 0} />
        </>
    );
};
