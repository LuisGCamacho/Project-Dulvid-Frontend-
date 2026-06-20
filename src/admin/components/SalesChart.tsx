import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    { month: "Ene", ventas: 15 },
    { month: "Feb", ventas: 22 },
    { month: "Mar", ventas: 20 },
    { month: "Abr", ventas: 38 },
    { month: "May", ventas: 32 },
    { month: "Jun", ventas: 58 },
];

export const SalesChart = () => {
    return (
        <div className="bg-white border border-[#ECE9F5] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="font-semibold text-gray-900">
                        Ventas de los últimos 6 meses
                    </h2>
                </div>

                <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
                    Este año
                </button>
            </div>

            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient
                                id="salesGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#7C3AED"
                                    stopOpacity={0.25}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#7C3AED"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid vertical={false} stroke="#F1F1F4" />

                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                        />

                        <YAxis
                            tickFormatter={(v) => `${v}%`}
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="ventas"
                            fill="url(#salesGradient)"
                            stroke="none"
                        />

                        <Line
                            type="monotone"
                            dataKey="ventas"
                            stroke="#7C3AED"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 6,
                                fill: "#7C3AED",
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#FAFAFC] border border-[#F0EEF6] rounded-xl p-3">
                    <p className="text-xs text-gray-500">Promedio mensual</p>
                    <h3 className="font-bold text-lg">$28,450</h3>
                    <span className="text-xs text-gray-400">Ventas</span>
                </div>

                <div className="bg-[#FAFAFC] border border-[#F0EEF6] rounded-xl p-3">
                    <p className="text-xs text-gray-500">Mejor mes</p>
                    <h3 className="font-bold text-lg">Junio</h3>
                    <span className="text-xs text-gray-400">$45,230</span>
                </div>

                <div className="bg-[#FAFAFC] border border-[#F0EEF6] rounded-xl p-3">
                    <p className="text-xs text-gray-500">Menor mes</p>
                    <h3 className="font-bold text-lg">Marzo</h3>
                    <span className="text-xs text-gray-400">$18,120</span>
                </div>

                <div className="bg-[#FAFAFC] border border-[#F0EEF6] rounded-xl p-3">
                    <p className="text-xs text-gray-500">Total ventas</p>
                    <h3 className="font-bold text-lg">$170,700</h3>
                    <span className="text-xs text-gray-400">Semestre</span>
                </div>
            </div>
        </div>
    );
};
