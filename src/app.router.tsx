import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router";

import { ShopLayout } from "./shop/layouts/ShopLayout";

import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GanderPage } from "./shop/pages/gender/GanderPage";

import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";

import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProducsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import {
    AdminRoute,
    NotAuthenticatedRoute,
} from "./components/routes/ProtectedRoutes";

// Paginas perezosas para evitar cargarlas cuando no sean necesarias.
const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));

// Creamos router para las rutas del navegador
export const appRouter = createHashRouter([
    // Rutas publicas
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "product/:idSlug",
                element: <ProductPage />,
            },
            {
                path: "gender/:gender",
                element: <GanderPage />,
            },
        ],
    },
    // Rutas de Auth
    {
        path: "/auth",
        element: (
            <NotAuthenticatedRoute>
                <AuthLayout />
            </NotAuthenticatedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
    // Rutas de panel Administrativo
    {
        path: "/admin",
        element: (
            <AdminRoute>
                <AdminLayout />
            </AdminRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "products",
                element: <AdminProductsPage />,
            },
            {
                path: "products/:id",
                element: <AdminProductPage />,
            },
        ],
    },
    // Comodin por si no es ninguna de las rutas definidas
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
