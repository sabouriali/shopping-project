import {
  BsCartFill,
  BsMoonFill,
  BsPersonFill,
  BsSunFill,
} from "react-icons/bs";

import { useThemeDispatch, useThemeSelector } from "../hooks/useTheme";

import { switchTheme } from "../redux/slices/theme-slice";

import Navbar from "./Navbar";

function Header() {
  const theme = useThemeSelector((state) => state.theme.value);

  const dispatch = useThemeDispatch();

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  return (
    <header
      dir="ltr"
      className="flex items-center justify-between px-4 shadow bg-white dark:bg-[#34495e] dark:text-white transition"
    >
      <div className="flex items-center gap-5">
        <button onClick={handleSwitchTheme}>
          {theme === "dark" ? (
            <BsSunFill size={20} />
          ) : (
            <BsMoonFill size={20} />
          )}
        </button>
        <button>
          <BsPersonFill size={20} />
        </button>
        <button>
          <BsCartFill size={20} />
        </button>
        <input
          dir="rtl"
          type="text"
          placeholder="دنبال چی می‌گردی؟..."
          className="border text-sm"
        />
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
