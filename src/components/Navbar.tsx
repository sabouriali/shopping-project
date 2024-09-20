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
        <button onClick={handleClick}>محصولات</button>
        <ul
          className="bg-white border p-6 rounded-lg absolute transition shadow-lg"
          style={{
            opacity: clicked ? "1" : "0",
            visibility: clicked ? "visible" : "hidden",
            transform: clicked ? 'translateY(0)' : 'translateY(-1vh)'
          }}
        >
          <li>همه محصولات</li>
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
