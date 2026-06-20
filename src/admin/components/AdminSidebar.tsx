import React from "react";
import {
    Home,
    Users,
    BarChart3,
    Settings,
    FileText,
    ShoppingCart,
    Bell,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { CustomLogo } from "@/components/Custom/CustomLogo";
import { Link, useLocation } from "react-router";

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export const AdminSidebar: React.FC<SidebarProps> = ({
    isCollapsed,
    onToggle,
}) => {
    const { pathname } = useLocation();

    const menuItems = [
        { icon: Home, label: "Dashboard", to: "/admin" },
        { icon: BarChart3, label: "Productos", to: "/admin/products" },
        { icon: Users, label: "Usuarios", to: "/admin/users" },
        { icon: ShoppingCart, label: "Ordenes", to: "/admin/orders" },
        { icon: FileText, label: "Reportes", to: "/admin/reports" },
        { icon: Bell, label: "Notificaciones", to: "/admin/notifications" },
        { icon: Settings, label: "Configuracion", to: "/admin/settings" },
        { icon: HelpCircle, label: "Ayuda", to: "/admin/help" },
    ];

    const isActiveRoute = (to: string) => {
        if (pathname.includes("/admin/products") && to === "/admin/products") {
            return true;
        }

        return pathname === to;
    };

    return (
        <aside
            className={`
                bg-[#F4EDFF]
                border-r
                border-[#ECE9F5]
                transition-all
                duration-300
                ease-in-out
                min-h-screen
                flex
                flex-col
                relative
                ${isCollapsed ? "w-20" : "w-72"}
            `}
        >
            {/* Logo */}
            <div className="h-20 flex items-center justify-center px-6">
                <CustomLogo />
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;

                        const active = isActiveRoute(item.to);

                        return (
                            <li key={index}>
                                <Link
                                    to={item.to}
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        h-11
                                        px-4
                                        rounded-xl
                                        transition-all
                                        duration-200
                                        font-medium
                                        ${
                                            active
                                                ? "bg-violet-600 text-white shadow-sm"
                                                : "text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                                        }
                                    `}
                                >
                                    <Icon size={18} className="flex-shrink-0" />

                                    {!isCollapsed && (
                                        <span className="text-sm">
                                            {item.label}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Imagen decorativa */}
            {!isCollapsed && (
                <div className="px-4 pb-4">
                    <div
                        className="
                            h-52
                            rounded-2xl
                            bg-gradient-to-br
                            from-violet-50
                            to-purple-100
                            overflow-hidden
                            flex
                            items-center
                            justify-center
                        "
                    >
                        {/* Agrega aquí tu imagen */}
                        <img
                            src="/banner-login.png"
                            alt="Decoracion Sidebar"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Toggle */}
            <div className="px-4 pb-4">
                <button
                    onClick={onToggle}
                    className="
                        w-full
                        h-11
                        rounded-xl
                        border
                        border-[#ECE9F5]
                        flex
                        items-center
                        justify-center
                        hover:bg-violet-50
                        transition-colors
                    "
                >
                    {isCollapsed ? (
                        <ChevronRight size={18} />
                    ) : (
                        <ChevronLeft size={18} />
                    )}
                </button>
            </div>
        </aside>
    );
};
