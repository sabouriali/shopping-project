import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { store } from "./redux/store/store";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
