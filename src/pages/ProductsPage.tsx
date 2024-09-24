import { useEffect, useState } from "react";

import { getProducts } from "../utility/api";

import Loading from "../components/UI/Loading";

import { type Product } from "../types/productType";
import ProductItem from "../components/ProductItem";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <>
          <h2 className="text-lg font-bold transition dark:text-white">
            محصولات
          </h2>
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
