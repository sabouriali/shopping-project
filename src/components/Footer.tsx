import { useState } from "react";
import {
  BsChatDots,
  BsEnvelopeAt,
  BsInstagram,
  BsTelegram,
  BsTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <>
      {clicked && (
        <div
          onClick={handleClick}
          className="h-screen w-screen fixed top-0 left-0 z-20"
        />
      )}
      <footer className="px-4 h-20">
        <ul className="flex items-center gap-8 h-full">
          <li>
            <Link to="#">درباره ما</Link>
          </li>
          <li className="relative">
            <button onClick={handleClick}>تماس با ما</button>
            <ul
              className="bg-white border p-6 rounded-lg absolute transition shadow-lg bottom-8 text-black z-30"
              style={{
                opacity: clicked ? "1" : "0",
                visibility: clicked ? "visible" : "hidden",
                transform: clicked ? "translateY(0)" : "translateY(1vh)",
              }}
            >
              <li className="flex items-center">
                <BsEnvelopeAt className="ml-2" />
                <p>sabouri.ali@outlook.com</p>
              </li>
              <li className="flex items-center">
                <BsInstagram className="ml-2" />
                <BsTelegram className="ml-2" />
                <p>_alisabouri_</p>
              </li>
              <li className="flex items-center">
                <BsTelephoneFill className="ml-2" />
                <BsChatDots className="ml-2" />
                <p>09171140965</p>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
