import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsCartFill,
  BsMoonFill,
  BsPersonFill,
  BsSunFill,
} from "react-icons/bs";

import { useStoreDispatch, useStoreSelector } from "../hooks/useStore";

import { switchTheme } from "../redux/slices/theme-slice";
import { getCartQty } from "../redux/slices/cart-slice";
import { setLogout } from "../redux/slices/login-slice";

import Navbar from "./Navbar";

import { type HeaderProps } from "../types/componentTypes";

function Header({ onCartClick }: HeaderProps) {
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const theme = useStoreSelector((state) => state.theme.value);
  const cart = useStoreSelector((state) => state.cart.items);
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  const dispatch = useStoreDispatch();

  const cartQty = getCartQty(cart);

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  function handleClick() {
    setClicked(!clicked);
  }

  function handleLogout() {
    dispatch(setLogout());

    handleClick();

    navigate("/login");
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
        <button
          onClick={handleClick}
          className="p-3 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full"
        >
          <BsPersonFill size={20} />
        </button>
        <div
          dir="rtl"
          className="bg-white border p-6 rounded-lg absolute transition shadow-lg text-black top-14"
          style={{
            opacity: clicked ? "1" : "0",
            visibility: clicked ? "visible" : "hidden",
            transform: clicked ? "translateY(0)" : "translateY(-1vh)",
          }}
        >
          {isLogin ? (
            <ul>
              <li className="mb-1 px-2 py-1 rounded-lg transition hover:bg-gray-100">
                <Link to="/user" onClick={handleClick} className="block w-full">
                  حساب کاربری
                </Link>
              </li>
              <li className="mb-1 px-2 py-1 rounded-lg transition hover:bg-gray-100">
                <button onClick={handleLogout} className="w-full text-right">
                  خروج
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="mb-1 px-2 py-1 rounded-lg transition hover:bg-gray-100">
                <Link
                  to="/login"
                  onClick={handleClick}
                  className="block w-full"
                >
                  ورود
                </Link>
              </li>
              <li className="mb-1 px-2 py-1 rounded-lg transition hover:bg-gray-100">
                <Link
                  to="/signup"
                  onClick={handleClick}
                  className="block w-full"
                >
                  ثبت نام
                </Link>
              </li>
            </ul>
          )}
        </div>
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
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
