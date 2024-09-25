import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSortNumericDownAlt, BsSortNumericDown } from "react-icons/bs";

import { getProducts } from "../utility/api";

import Loading from "../components/UI/Loading";
import ProductItem from "../components/ProductItem";

import { type Product } from "../types/productType";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  function handleSortAsc() {
    setProducts([]);
    navigate("?sort=asc");
    getProducts("asc").then((res) => setProducts(res));
  }

  function handleSortDesc() {
    setProducts([]);
    navigate("?sort=desc");
    getProducts("desc").then((res) => setProducts(res));
  }

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-bold">محصولات</h2>
            <div className="flex items-center text-sm">
              <p className="ml-2">مرتب سازی:</p>
              <div>
                <button
                  onClick={handleSortDesc}
                  className="p-2 rounded-full hover:bg-[#3498db] hover:shadow-md hover:text-white dark:hover:bg-[#34495e] transition"
                >
                  <BsSortNumericDownAlt />
                </button>
                <button
                  onClick={handleSortAsc}
                  className="p-2 rounded-full hover:bg-[#3498db] hover:shadow-md hover:text-white dark:hover:bg-[#34495e] transition"
                >
                  <BsSortNumericDown />
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </>
      ) : (
        <Loading showLoading={true} hideLoading={() => null} />
      )}
    </>
  );
}

export default ProductsPage;
