import { useState } from "react";

import { useThemeSelector } from "../hooks/useTheme";

import RightModal from "./UI/RightModal";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";

import { type LayoutProps } from "../types/componentTypes";

function Layout({ children }: LayoutProps) {
  const [showCart, setShowCart] = useState(false);

  const theme = useThemeSelector((state) => state.theme.value);

  const htmlEl = document.querySelector("html");

  if (theme === "dark") {
    htmlEl?.classList.add("dark");
  } else {
    htmlEl?.classList.remove("dark");
  }

  function handleShowCart() {
    setShowCart(true);
  }

  function handleCloseCart() {
    setShowCart(false);
  }

  return (
    <div dir="rtl">
      <RightModal showRightModal={showCart} hideRightModal={handleCloseCart}>
        <Cart closeModal={handleCloseCart} />
      </RightModal>
      <Header onCartClick={handleShowCart} />
      <main className="min-h-screen container mx-auto my-6 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
