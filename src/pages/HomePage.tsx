import { useEffect, useMemo, useState } from "react";

import { getProducts } from "../utility/api";

import { type Product } from "../types/productType";
import ProductItem from "../components/ProductItem";
import Loading from "../components/UI/Loading";
import { BsEmojiFrownFill } from "react-icons/bs";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const searchResult = useMemo(() => {
    return products.filter((product) => {
      return (
        title === "" ||
        product.title.toLowerCase().includes(title.toLowerCase())
      );
    });
  }, [title, products]);

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">خانه</h2>
            <input
              type="text"
              id="search"
              placeholder="دنبال چی می‌گردی؟..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-1/3 px-4 py-2 rounded-lg text-sm outline-none bg-white shadow-md transition focus:shadow-lg dark:bg-[#2c3e50] dark:placeholder:text-gray-300"
            />
          </div>
          {searchResult.length === 0 ? (
            <div className="p-4 mx-auto mt-12 bg-white rounded-2xl shadow-md w-64 text-center transition dark:bg-[#424242]">
              <p>محصول موردنظر یافت نشد.</p>
              <BsEmojiFrownFill size={32} className="mx-auto mt-4" />
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {searchResult.map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Loading showLoading={true} hideLoading={() => null} />
      )}
    </>
  );
}

export default HomePage;
