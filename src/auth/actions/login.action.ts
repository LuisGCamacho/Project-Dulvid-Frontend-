import { projectApi } from "@/api/projectApi";
import type { AuthResponse } from "../interface/auth.response";

// Post de informacion necesaria para el login
export const loginAction = async (
    email: string,
    password: string,
): Promise<AuthResponse> => {
    try {
        const { data } = await projectApi.post("/auth/login", {
            email: email,
            password: password,
        });

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
