import { useEffect, useState } from "react";

import { getProducts } from "../utility/api";

import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";
import ProductItem from "../components/ProductItem";

import { type Product } from "../types/productType";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  function handleSortAsc() {
    setProducts([]);
    getProducts("asc").then((res) => setProducts(res));
  }

  function handleSortDesc() {
    setProducts([]);
    getProducts("desc").then((res) => setProducts(res));
  }

  function handleSortPrice(sort?: "asc" | "desc") {
    setProducts([]);
    const sortedProducts = [...products].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  }

  function handleSortRate() {
    setProducts([]);
    const sortedProducts = [...products].sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
    setProducts(sortedProducts);
  }

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-bold">محصولات</h2>
            <div className="flex items-center text-xs">
              <p className="ml-2">مرتب سازی:</p>
              <div className="flex items-center gap-1">
                <Button
                  size="md"
                  onClick={handleSortAsc}
                  className="hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
                >
                  پیش‌فرض
                </Button>
                <Button
                  size="md"
                  onClick={handleSortDesc}
                  className="hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
                >
                  جدیدترین
                </Button>
                <Button
                  size="md"
                  onClick={() => handleSortPrice("asc")}
                  className="hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
                >
                  ارزان‌ترین
                </Button>
                <Button
                  size="md"
                  onClick={() => handleSortPrice("desc")}
                  className="hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
                >
                  گران‌ترین
                </Button>
                <Button
                  size="md"
                  onClick={handleSortRate}
                  className="hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
                >
                  پیشنهاد خریداران
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
