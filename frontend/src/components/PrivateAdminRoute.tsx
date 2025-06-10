// components/PrivateAdminRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
  const token = localStorage.getItem('adminToken'); // Or context/state
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default PrivateAdminRoute;
