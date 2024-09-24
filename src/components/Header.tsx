import {
  BsCartFill,
  BsMoonFill,
  BsPersonFill,
  BsSunFill,
} from "react-icons/bs";

import { useThemeDispatch, useThemeSelector } from "../hooks/useTheme";
import { useCartSelector } from "../hooks/useCart";

import { switchTheme } from "../redux/slices/theme-slice";
import { getCartQty } from "../redux/slices/cart-slice";

import Navbar from "./Navbar";

import { type HeaderProps } from "../types/componentTypes";

function Header({ onCartClick }: HeaderProps) {
  const theme = useThemeSelector((state) => state.theme.value);
  const dispatch = useThemeDispatch();

  const cart = useCartSelector((state) => state.cart.items);
  const cartQty = getCartQty(cart);

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  return (
    <header
      dir="ltr"
      className="flex items-center justify-between px-4 shadow bg-white dark:bg-[#2c3e50] transition h-16"
    >
      <div className="flex items-center gap-5">
        <button
          onClick={handleSwitchTheme}
          className="p-2.5 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full"
        >
          {theme === "dark" ? (
            <BsSunFill size={20} />
          ) : (
            <BsMoonFill size={20} />
          )}
        </button>
        <button className="p-3 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full">
          <BsPersonFill size={20} />
        </button>
        <button
          onClick={onCartClick}
          className="relative p-3 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full flex items-center"
        >
          <BsCartFill size={20} />
          {cartQty > 0 && (
            <span className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 ms-1 flex items-center justify-center text-xs">
              {cartQty}
            </span>
          )}
        </button>
        <input
          dir="rtl"
          type="text"
          placeholder="دنبال چی می‌گردی؟..."
          className="border text-sm px-3 py-1 rounded-lg outline-none dark:bg-[#34495e] transition focus:border-[#3498db]"
        />
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
