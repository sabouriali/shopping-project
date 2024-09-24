import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";

import { useCartDispatch, useCartSelector } from "../hooks/useCart";

import { clearCart, getTotalPrice } from "../redux/slices/cart-slice";

import Button from "./UI/Button";
import CartItem from "./CartItem";

import { type CartProps } from "../types/componentTypes";

function Cart({ closeModal }: CartProps) {
  const cart = useCartSelector((state) => state.cart.items);
  const totalPrice = getTotalPrice(cart);
  const dispatch = useCartDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
      {cart.length === 0 ? (
        <p className="text-sm">سبد خرید خالی است</p>
      ) : (
        <>
          <table dir="ltr" className="text-sm w-full border-b mb-4">
            <thead className="border-b">
              <tr>
                <th className="font-bold pb-1 px-2 text-left">عنوان</th>
                <th className="font-bold pb-1 px-2 text-left">تعداد</th>
                <th className="font-bold pb-1 px-2 text-left">هزینه</th>
                <th className="font-bold pb-1 px-2 text-right">تغییر</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-300">
              {cart.map((item) => (
                <CartItem key={item.id} {...item} closeModal={closeModal} />
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between text-sm mb-4">
            <p>قابل پرداخت:</p>
            <p className="text-red-500">{totalPrice}$</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <Button
              variant="outline"
              size="lg"
              color="success"
              className="flex items-center hover:bg-[#2ecc71] hover:!text-white"
            >
              ثبت سفارش
              <BsCartCheckFill className="mr-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              color="danger"
              onClick={handleClearCart}
              className="flex items-center hover:bg-red-500 hover:!text-white"
            >
              حذف سفارش
              <BsCartXFill className="mr-2" />
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
