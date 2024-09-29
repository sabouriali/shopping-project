import { Navigate, Outlet } from "react-router-dom";

import { useStoreSelector } from "../hooks/useStore";

function PrivateRoute() {
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
