import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/auth/store/auth.store";
import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Lock, User, Eye, ArrowLeft } from "lucide-react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const [isPosting, setIsPosting] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsPosting(true);

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const isValid = await login(email, password);

        if (isValid) {
            navigate("/");
            return;
        }

        toast.error("Correo o contraseña incorrectos");
        setIsPosting(false);
    };

    return (
        <div className="w-full">
            <div
                className="
                    grid
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                    lg:grid-cols-2
                    lg:rounded-[32px]
                "
            >
                {/* PANEL IZQUIERDO */}
                <div
                    className="
                        relative
                        hidden
                        overflow-hidden
                        bg-gradient-to-br
                        from-violet-50
                        via-white
                        to-violet-100
                        px-10
                        py-16
                        lg:flex
                        lg:flex-col
                        lg:justify-center
                        xl:px-16
                    "
                >
                    <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-violet-100 opacity-50" />
                    <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-violet-100 opacity-40" />
                    <div className="absolute right-16 top-1/2 h-10 w-10 rounded-full bg-violet-100" />

                    {/* BOTÓN VOLVER */}
                    <div className="mb-6">
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-gray-500
                                    transition-colors
                                    hover:text-violet-600
                                    relative
                                    Z-1
                                    cursor-pointer
                                "
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver al inicio
                        </button>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-2xl font-bold tracking-wide text-violet-600">
                            PAPELERÍA
                        </h1>

                        <h2 className="text-5xl xl:text-6xl font-black text-violet-700">
                            DULVID
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Sistema de Gestión de Inventario y Ventas
                        </p>

                        <img
                            src="/banner-removebg-preview.png"
                            alt="Papelería"
                            className="
                                mt-10
                                w-full
                                max-w-[650px]
                                object-contain
                            "
                        />
                    </div>
                </div>

                {/* PANEL DERECHO */}
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        bg-[#fafafa]
                        px-5
                        py-8
                        sm:px-8
                        md:px-10
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-md
                            rounded-2xl
                            border
                            border-gray-100
                            bg-white
                            p-6
                            shadow-lg
                            sm:p-8
                            md:p-10
                        "
                    >
                        {/* LOGO MÓVIL */}
                        <div className="mb-8 text-center lg:hidden">
                            <h1 className="text-xl font-bold text-violet-600">
                                PAPELERÍA
                            </h1>

                            <h2 className="text-4xl font-black text-violet-700">
                                DULVID
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Sistema de Gestión de Inventario y Ventas
                            </p>
                        </div>

                        {/* ICONO */}
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 sm:h-20 sm:w-20">
                                <Lock className="h-8 w-8 text-violet-600 sm:h-10 sm:w-10" />
                            </div>
                        </div>

                        {/* TÍTULO */}
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                                Iniciar Sesión
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Ingresa tus credenciales para continuar
                            </p>
                        </div>

                        {/* FORMULARIO */}
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div>
                                <Label className="mb-2 block">Usuario</Label>

                                <div className="relative">
                                    <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Ingresa tu usuario"
                                        className="
                                            h-11
                                            rounded-xl
                                            pl-10
                                            sm:h-12
                                        "
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className="mb-2 block">Contraseña</Label>

                                <div className="relative">
                                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña"
                                        className="
                                            h-11
                                            rounded-xl
                                            pl-10
                                            pr-10
                                            sm:h-12
                                        "
                                        required
                                    />

                                    <Eye className="absolute right-3 top-3.5 h-4 w-4 cursor-pointer text-gray-400" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="accent-violet-600"
                                />

                                <label
                                    htmlFor="remember"
                                    className="text-sm text-gray-500"
                                >
                                    Recordarme
                                </label>
                            </div>

                            <Button
                                type="submit"
                                disabled={isPosting}
                                className="
                                    h-11
                                    w-full
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-violet-700
                                    to-purple-500
                                    shadow-md
                                    hover:from-violet-800
                                    hover:to-purple-600
                                    sm:h-12
                                "
                            >
                                {isPosting ? "Ingresando..." : "Iniciar Sesión"}
                            </Button>
                        </form>

                        <p className="mt-8 text-center text-xs text-gray-400">
                            © 2025 Papelería Dulvid. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
