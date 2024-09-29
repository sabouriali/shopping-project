import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsDash, BsPlus, BsTrashFill } from "react-icons/bs";

import { getSingleProduct } from "../utility/api";
import { useStoreDispatch } from "../hooks/useStore";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
} from "../redux/slices/cart-slice";

import Button from "./UI/Button";

import { type Product } from "../types/productType";
import { type CartItemProps } from "../types/componentTypes";

function CartItem({ id, qty, price, closeModal }: CartItemProps) {
  const [product, setProduct] = useState<Product>();

  const dispatch = useStoreDispatch();

  useEffect(() => {
    getSingleProduct(id).then((res) => setProduct(res));
  }, [id]);

  function handleIncreaseItem() {
    dispatch(addToCart({ id, price }));
  }

  function handleDecreaseItem() {
    dispatch(removeFromCart(id));
  }

  function handleDeleteItem() {
    dispatch(deleteItemFromCart(id));
  }

  return (
    <tr>
      <td className="text-left p-2">
        <Link
          to={`/products/${id}`}
          onClick={closeModal}
          className="flex items-center"
        >
          <img
            src={product?.image}
            alt={product?.title}
            width={30}
            className="mr-2"
          />
          <p className="line-clamp-1">{product?.title}</p>
        </Link>
      </td>
      <td className="text-center p-2">x{qty}</td>
      <td className="text-left p-2 text-red-500">{price * qty}$</td>
      <td className="text-right p-2 w-14">
        <div className="flex items-center justify-between gap-1 mb-1">
          <Button
            variant="solid"
            size="sm"
            color="primary"
            onClick={handleDecreaseItem}
            className="hover:!bg-[#2980b9]"
          >
            <BsDash />
          </Button>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            onClick={handleIncreaseItem}
            className="hover:!bg-[#2980b9]"
          >
            <BsPlus />
          </Button>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="danger"
          onClick={handleDeleteItem}
          className="hover:!bg-red-600 !w-full"
        >
          <BsTrashFill className="mx-auto" />
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;
