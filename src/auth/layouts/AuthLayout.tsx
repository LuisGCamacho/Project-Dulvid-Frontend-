import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#efedf5] flex items-center justify-center p-6">
            <div className="w-full max-w-7xl">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
