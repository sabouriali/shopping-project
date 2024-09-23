import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";

import { getSingleProduct } from "../utility/api";

import Button from "../components/UI/Button";

import { type Product } from "../types/productType";
import Loading from "../components/UI/Loading";

function ProductPage() {
  const [product, setProduct] = useState<Product>();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(JSON.parse(id!)).then((res) => setProduct(res));
  }, []);

  return (
    <>
      {product ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{product?.title}</h2>
            <Button
              size="md"
              onClick={() => navigate("..")}
              className="flex items-center hover:bg-[#3498db] hover:text-white dark:hover:bg-[#34495e]"
            >
              بازگشت
              <BsArrowBarLeft />
            </Button>
          </div>
          <article className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 rounded-2xl shadow-lg bg-white dark:bg-[#424242] transition">
            <div className="md:col-span-5 lg:col-span-4 md:row-span-2">
              <img
                src={product?.image}
                alt={product?.title}
                className="rounded-r-2xl w-full"
              />
            </div>
            <div className="md:col-span-7 lg:col-span-8 md:row-span-3 px-4 py-2">
              <div className="mb-2">
                <h2 className="font-bold">{product?.title}</h2>
                <p className="text-xs text-gray-400 mb-2">
                  {product?.category}
                </p>
                <p className="text-red-500">{product?.price}$</p>
              </div>
              <p className="text-justify">{product?.description}</p>
            </div>
            <div className="my-4 p-4 md:col-span-5 lg:col-span-4 md:row-span-1">
              <Button
                variant="outline"
                color="success"
                size="full"
                className="hover:bg-[#2ecc71] hover:!text-white"
              >
                افزودن به سبد خرید
              </Button>
            </div>
          </article>
        </>
      ) : (
        <Loading showBackdrop={true} hideBackdrop={() => null} />
      )}
    </>
  );
}

export default ProductPage;
