import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsSortNumericDownAlt, BsSortNumericDown } from "react-icons/bs";

import { getSingleCatProducts } from "../utility/api";

import ProductItem from "../components/ProductItem";

import { type Product } from "../types/productType";
import Loading from "../components/UI/Loading";

function SingleCatProductsPage() {
  const [products, setProducts] = useState<Product[]>();

  const { cat } = useParams<{ cat: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getSelectedProducts() {
      const selectedProducts = await getSingleCatProducts(cat!);
      setProducts(selectedProducts);
    }
    setProducts([]);
    getSelectedProducts();
  }, [cat]);

  function handleSortDesc() {
    setProducts([]);
    navigate("?sort=desc");
    getSingleCatProducts(cat!, "desc").then((res) => setProducts(res));
  }

  function handleSortAsc() {
    setProducts([]);
    navigate("?sort=asc");
    getSingleCatProducts(cat!, "asc").then((res) => setProducts(res));
  }

  return (
    <>
      {products?.length > 0 ? (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-4">محصولات: {cat}</h2>
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
            {products?.map((product) => (
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

export default SingleCatProductsPage;
