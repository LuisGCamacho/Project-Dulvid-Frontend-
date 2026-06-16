import { projectApi } from "@/api/projectApi";
import type { AuthResponse } from "../interface/auth.response";

// verificar si el usuario sigue autenticado usando el token guardado en el navegador
export const checkAuthAction = async (): Promise<AuthResponse> => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const { data } = await projectApi.get<AuthResponse>(
            "/auth/check-status",
            {},
        );

        localStorage.setItem("token", data.token);

        return data;
    } catch (error) {
        localStorage.removeItem("token");

        throw new Error("Token expired or not valid");
    }
};
