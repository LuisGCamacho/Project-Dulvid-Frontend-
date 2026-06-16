import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { cn } from "@/lib/utils";
import { CustomLogo } from "@/components/Custom/CustomLogo";
import { useAuthStore } from "@/auth/store/auth.store";

export const CustomHeader = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { gender } = useParams();

    const { authStatus, isAdmin, logout } = useAuthStore();

    const [isOpen, setIsOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const query = searchParams.get("query") || "";

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") return;

        const query = inputRef.current?.value;

        const newSearchParams = new URLSearchParams();

        if (!query) {
            newSearchParams.delete("query");
        } else {
            newSearchParams.set("query", query);
        }

        setSearchParams(newSearchParams);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-slate-50/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <CustomLogo />

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-violet-600",
                                !gender ? "underline underline-offset-4" : "",
                            )}
                        >
                            Inicio
                        </Link>

                        <p className="text-sm font-medium transition-colors hover:text-violet-600 cursor-pointer">
                            Nosotros
                        </p>

                        <Link
                            to="/gender/men"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-violet-600",
                                gender === "men"
                                    ? "underline underline-offset-4"
                                    : "",
                            )}
                        >
                            Productos
                        </Link>

                        <Link
                            to="/gender/women"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-violet-600",
                                gender === "women"
                                    ? "underline underline-offset-4"
                                    : "",
                            )}
                        >
                            Paquetes Escolares
                        </Link>

                        <Link
                            to="/gender/kid"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-violet-600",
                                gender === "kid"
                                    ? "underline underline-offset-4"
                                    : "",
                            )}
                        >
                            Promociones
                        </Link>

                        <p className="text-sm font-medium transition-colors hover:text-violet-600 cursor-pointer">
                            Contacto
                        </p>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-2">
                        {/* Search Desktop */}
                        <div className="hidden lg:flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    placeholder="Buscar productos..."
                                    className="pl-9 w-64 h-9 bg-white"
                                    ref={inputRef}
                                    onKeyDown={handleSearch}
                                    defaultValue={query}
                                />
                            </div>
                        </div>

                        {/* Login Desktop */}
                        <div className="hidden sm:flex items-center gap-2">
                            {authStatus === "not-authenticated" ? (
                                <Link to="/auth/login">
                                    <Button
                                        size="sm"
                                        className="cursor-pointer "
                                    >
                                        Login
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer"
                                    onClick={logout}
                                >
                                    Cerrar Sesión
                                </Button>
                            )}

                            {isAdmin() && (
                                <Link to="/admin">
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="cursor-pointer"
                                    >
                                        Admin
                                    </Button>
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="border-t py-4 lg:hidden">
                        <div className="flex flex-col gap-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    placeholder="Buscar productos..."
                                    className="pl-9"
                                    onKeyDown={handleSearch}
                                    defaultValue={query}
                                />
                            </div>

                            {/* Tus Links originales */}
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                Inicio
                            </Link>

                            <Link to="/" onClick={() => setIsOpen(false)}>
                                Productos
                            </Link>

                            <Link
                                to="/gender/men"
                                onClick={() => setIsOpen(false)}
                            >
                                Paquetes Escolares
                            </Link>

                            <Link
                                to="/gender/men"
                                onClick={() => setIsOpen(false)}
                            >
                                Hombres
                            </Link>

                            <Link
                                to="/gender/women"
                                onClick={() => setIsOpen(false)}
                            >
                                Mujeres
                            </Link>

                            <Link
                                to="/gender/kid"
                                onClick={() => setIsOpen(false)}
                            >
                                Niños
                            </Link>

                            <div className="border-t pt-4">
                                {authStatus === "not-authenticated" ? (
                                    <Link
                                        to="/auth/login"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Button className="w-full cursor-pointer">
                                            Login
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full cursor-pointer"
                                        onClick={() => {
                                            logout();
                                            setIsOpen(false);
                                        }}
                                    >
                                        Cerrar Sesión
                                    </Button>
                                )}
                            </div>

                            {isAdmin() && (
                                <Link
                                    to="/admin"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button
                                        variant="destructive"
                                        className="w-full cursor-pointer"
                                    >
                                        Admin
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
