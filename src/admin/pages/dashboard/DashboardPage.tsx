import { AdminTitle } from "@/admin/components/AdminTitle";
import { StatCard } from "@/admin/components/StatCard";
import { SalesChart } from "@/admin/components/SalesChart";
import { RecentMovements } from "@/admin/components/RecentMovements";

import { Package, Boxes, DollarSign, ShoppingBag } from "lucide-react";

const stats = [
    {
        title: "Productos",
        value: "245",
        subtitle: "Total registrados",
        icon: Package,
    },
    {
        title: "Inventario",
        value: "1,250",
        subtitle: "Unidades disponibles",
        icon: Boxes,
    },
    {
        title: "Ventas (Mes)",
        value: "$45,230",
        subtitle: "Total en ventas",
        icon: DollarSign,
    },
    {
        title: "Paquetes vendidos",
        value: "320",
        subtitle: "Este mes",
        icon: ShoppingBag,
    },
];

export const DashboardPage = () => {
    return (
        <main className="flex-1 min-h-screen p-8">
            <AdminTitle
                title="Dashboard"
                subtitle="Resumen general del sistema"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 xl:col-span-8">
                    <SalesChart />
                </div>

                <div className="col-span-12 xl:col-span-4">
                    <RecentMovements />
                </div>
            </div>
        </main>
    );
};
