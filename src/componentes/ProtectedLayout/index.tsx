import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider/useAuth";
import type { Children } from "@/interfaces";

export const ProtectedLayout = ({ children }: Children) => {
    const auth = useAuth();

    if (!auth.usuario) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
