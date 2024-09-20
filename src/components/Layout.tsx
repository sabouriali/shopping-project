import Header from "./Header";
import Footer from "./Footer";

import { LayoutProps } from "../types/componentTypes";

function Layout({ children }: LayoutProps) {
  return (
    <div dir="rtl" className="min-h-screen grid grid-rows-12">
      <Header />
      <main className="container mx-auto my-6 px-4 row-span-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
