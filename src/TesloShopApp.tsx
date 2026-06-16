// RouterProvider: permite que React Router controle la navegación
import { RouterProvider } from "react-router";

// Configuración principal de rutas definida en app.router.ts
import { appRouter } from "./app.router";

// QueryClientProvider: comparte esa instancia con toda la aplicación.
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";

// Herramienta visual para depurar consultas de React Query.
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "sonner"; // componentes de notificaciones
import type { PropsWithChildren } from "react";
import { CustomFullScreenLoading } from "./components/Custom/CustomFullScreenLoading";
import { useAuthStore } from "./auth/store/auth.store";

// Esta instancia almacenará todas las consultas de la aplicación.
const queryClient = new QueryClient();

// validar periódicamente el token del usuario mediante checkAuthAction()
const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { checkAuthStatus } = useAuthStore();

    const { isLoading } = useQuery({
        queryKey: ["auth"],
        queryFn: checkAuthStatus,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5,
    });

    if (isLoading) return <CustomFullScreenLoading />;

    return <>{children}</>;
};

export const TesloShopApp = () => {
    return (
        // Hace disponible React Query en toda la aplicación.
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <CheckAuthProvider>
                {/* Maneja la navegación y renderiza la página correspondiente */}
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
