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
      className="flex items-center justify-between px-4 shadow bg-white dark:bg-[#2c3e50] transition h-16"
    >
      <div className="flex items-center gap-5">
        <button
          onClick={handleSwitchTheme}
          className="p-2.5 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full"
        >
          {theme === "dark" ? (
            <BsSunFill />
          ) : (
            <BsMoonFill />
          )}
        </button>
        <button className="p-3 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full">
          <BsPersonFill />
        </button>
        <button className="p-3 hover:shadow-md hover:text-white hover:dark:bg-[#34495e] hover:bg-[#3498db] transition rounded-full">
          <BsCartFill />
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
