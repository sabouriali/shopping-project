import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BsArrowBarLeft,
  BsCartPlusFill,
  BsDashLg,
  BsPlusLg,
  BsStarFill,
  BsTrashFill,
} from "react-icons/bs";

import { useCartDispatch, useCartSelector } from "../hooks/useCart";

import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
  getProductQty,
} from "../redux/slices/cart-slice";
import { getSingleProduct } from "../utility/api";

import Button from "../components/UI/Button";

import { type Product } from "../types/productType";
import Loading from "../components/UI/Loading";

function ProductPage() {
  const [product, setProduct] = useState<Product>();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cart = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  useEffect(() => {
    getSingleProduct(JSON.parse(id!)).then((res) => setProduct(res));
  }, []);

  const productQty = getProductQty(cart, JSON.parse(id!));

  function handleAddToCart() {
    dispatch(addToCart(JSON.parse(id!)));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(JSON.parse(id!)));
  }

  function handleDeleteFromCart() {
    dispatch(deleteItemFromCart(JSON.parse(id!)));
  }

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
                <p className="text-xs text-gray-400">{product?.category}</p>
                <div className="mb-2 flex items-center gap-2">
                  <p className="flex items-center text-sm">
                    <BsStarFill className="ml-1 text-yellow-400 dark:text-yellow-300" />
                    {product.rating.rate}
                  </p>
                  <p className="text-xs text-gray-400">
                    ({product.rating.count})
                  </p>
                </div>
                <p className="text-red-500">{product?.price}$</p>
              </div>
              <p className="text-justify">{product?.description}</p>
            </div>
            <div className="my-4 p-4 md:col-span-5 lg:col-span-4 md:row-span-1">
              {productQty === 0 ? (
                <Button
                  size="full"
                  variant="outline"
                  color="success"
                  onClick={handleAddToCart}
                  className="hover:bg-[#2ecc71] hover:!text-white flex items-center justify-center"
                >
                  افزودن به سبد خرید
                  <BsCartPlusFill className="mr-2" />
                </Button>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <Button
                      variant="outline"
                      size="sm"
                      color="secondary"
                      onClick={handleAddToCart}
                      className="hover:bg-[#34495e] hover:!text-white dark:!border-white dark:!text-white dark:hover:bg-white dark:hover:!text-black"
                    >
                      <BsPlusLg />
                    </Button>
                    <span>x{productQty}</span>
                    {productQty === 1 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        color="secondary"
                        onClick={handleRemoveFromCart}
                        className="hover:bg-[#34495e] hover:!text-white dark:!border-white dark:!text-white dark:hover:bg-white dark:hover:!text-black"
                      >
                        <BsTrashFill />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        color="secondary"
                        onClick={handleRemoveFromCart}
                        className="hover:bg-[#34495e] hover:!text-white dark:!border-white dark:!text-white dark:hover:bg-white dark:hover:!text-black"
                      >
                        <BsDashLg />
                      </Button>
                    )}
                  </div>
                  {productQty > 1 && (
                    <Button
                      variant="outline"
                      size="full"
                      color="danger"
                      onClick={handleDeleteFromCart}
                      className="flex items-center justify-center hover:bg-red-500 hover:!text-white"
                    >
                      حذف از سبد خرید
                      <BsTrashFill className="mr-2" />
                    </Button>
                  )}
                </>
              )}
            </div>
          </article>
        </>
      ) : (
        <Loading showLoading={true} hideLoading={() => null} />
      )}
    </>
  );
}

export default ProductPage;
