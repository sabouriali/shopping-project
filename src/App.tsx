import { Navigate, Route, Routes } from "react-router-dom";

import { useStoreSelector } from "./hooks/useStore";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleCatProductsPage from "./pages/SingleCatProductsPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserPage from "./pages/UserPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path={`category/:cat`} element={<SingleCatProductsPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/user" /> : <LoginPage />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route
          path="/user"
          element={isLogin ? <UserPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
