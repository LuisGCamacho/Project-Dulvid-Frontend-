import type { LucideIcon } from "lucide-react";

interface Props {
    title: string;
    value: string;
    subtitle: string;
    icon: LucideIcon;
}

export const StatCard = ({ title, value, subtitle, icon: Icon }: Props) => {
    return (
        <div className="bg-white border border-[#ECE9F5] rounded-xl p-4">
            {/* Icono + título */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-violet-600" />
                </div>

                <p className="text-sm font-medium text-gray-500">{title}</p>
            </div>

            {/* Valor */}
            <h3 className="text-3xl font-bold text-gray-900">{value}</h3>

            {/* Subtítulo */}
            <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        </div>
    );
};
