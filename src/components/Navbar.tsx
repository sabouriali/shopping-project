import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <ul dir="rtl" className="flex items-center gap-8">
      <li>
        <Link to="/" className="text-xl font-bold">
          دیجی‌مارکت
        </Link>
      </li>
      <li>
        <button
          onClick={handleClick}
          className={`px-2.5 py-1.5 hover:text-white hover:bg-[#3498db] rounded-lg ${
            clicked && "bg-[#3498db] text-white dark:bg-[#34495e]"
          } hover:shadow-md transition dark:hover:bg-[#34495e]`}
        >
          محصولات
        </button>
        <ul
          className="bg-white border p-6 rounded-lg absolute transition shadow-lg text-black top-14"
          style={{
            opacity: clicked ? "1" : "0",
            visibility: clicked ? "visible" : "hidden",
            transform: clicked ? "translateY(0)" : "translateY(-1vh)",
          }}
        >
          <li>
            <Link to="/products" onClick={handleClick}>
              همه محصولات
            </Link>
          </li>
          <hr />
          <p>بر‌اساس برند</p>
          <li>اپل</li>
          <li>سامسونگ</li>
          <hr />
          <p>بر‌اساس دسته بندی</p>
          <li>موبایل</li>
          <li>تبلت</li>
          <li>لپ‌تاپ</li>
        </ul>
      </li>
    </ul>
  );
}

export default Navbar;
