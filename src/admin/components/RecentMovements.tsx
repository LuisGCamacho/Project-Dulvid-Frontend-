import { ArrowDown, ArrowUp, ShoppingCart, PackageCheck } from "lucide-react";

const movements = [
    {
        title: "Entrada de productos",
        date: "11/07/2024 10:30 a.m.",
        icon: ArrowDown,
        badge: "Entrada",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        title: "Venta de paquete",
        date: "11/07/2024 11:15 a.m.",
        icon: ShoppingCart,
        badge: "Venta",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        title: "Compra realizada",
        date: "10/07/2024 02:10 p.m.",
        icon: PackageCheck,
        badge: "Compra",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Salida de productos",
        date: "09/07/2024 04:30 p.m.",
        icon: ArrowUp,
        badge: "Salida",
        color: "text-red-600",
        bg: "bg-red-100",
    },
];

export const RecentMovements = () => {
    return (
        <div className="bg-white border border-[#ECE9F5] rounded-xl p-6 h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900">
                    Movimientos recientes
                </h2>

                <button className="text-violet-600 text-sm font-medium">
                    Ver todos
                </button>
            </div>

            <div className="space-y-4">
                {movements.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="flex items-start gap-3"
                        >
                            <div className={`${item.bg} p-2 rounded-full`}>
                                <Icon className={`w-4 h-4 ${item.color}`} />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm font-medium">
                                    {item.title}
                                </h4>

                                <p className="text-xs text-gray-400">
                                    {item.date}
                                </p>
                            </div>

                            <span
                                className={`
                                    ${item.bg}
                                    ${item.color}
                                    text-[10px]
                                    font-medium
                                    px-2
                                    py-1
                                    rounded-md
                                `}
                            >
                                {item.badge}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
