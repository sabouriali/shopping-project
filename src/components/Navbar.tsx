import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProductCategories } from "../utility/api";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [cats, setCats] = useState<string[]>();

  useEffect(() => {
    getProductCategories().then((res) => setCats(res));
  }, []);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <>
      {clicked && (
        <div
          onClick={handleClick}
          className="h-screen w-screen fixed top-0 left-0 z-10"
        />
      )}
      <ul dir="rtl" className="flex items-center gap-8">
        <li>
          <Link to="/" className="text-xl font-bold">
            دیجی‌مارکت
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="px-2.5 py-1.5 hover:text-white hover:bg-[#3498db] rounded-lg hover:shadow-md transition dark:hover:bg-[#34495e]"
          >
            همه محصولات
          </Link>
        </li>
        <li>
          <button
            onClick={handleClick}
            className={`px-2.5 py-1.5 hover:text-white hover:bg-[#3498db] rounded-lg ${
              clicked && "bg-[#3498db] text-white dark:bg-[#34495e]"
            } hover:shadow-md transition dark:hover:bg-[#34495e]`}
          >
            دسته‌بندی محصولات
          </button>
          <ul
            className="bg-white border p-6 rounded-lg absolute transition shadow-lg text-black top-14 z-20"
            style={{
              opacity: clicked ? "1" : "0",
              visibility: clicked ? "visible" : "hidden",
              transform: clicked ? "translateY(0)" : "translateY(-1vh)",
            }}
          >
            {cats?.map((item) => (
              <li
                key={item}
                onClick={handleClick}
                className="mb-1 px-2 py-1 rounded-lg transition hover:bg-gray-100"
              >
                <Link
                  to={`/products/category/${item}`}
                  className="block w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
