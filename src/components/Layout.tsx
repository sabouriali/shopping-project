import { useThemeSelector } from "../hooks/useTheme";

import Header from "./Header";
import Footer from "./Footer";

import { type LayoutProps } from "../types/componentTypes";

function Layout({ children }: LayoutProps) {
  const theme = useThemeSelector((state) => state.theme.value);

  const htmlEl = document.querySelector("html");

  if (theme === "dark") {
    htmlEl?.classList.add("dark");
  } else {
    htmlEl?.classList.remove("dark");
  }

  return (
    <div dir="rtl">
      <Header />
      <main className="min-h-screen container mx-auto my-6 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
