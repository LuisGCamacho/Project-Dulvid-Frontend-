import type { User } from "@/interfaces/user.interface";

// Login, Register y CheckStatus
export interface AuthResponse {
    user: User;
    token: string;
}
