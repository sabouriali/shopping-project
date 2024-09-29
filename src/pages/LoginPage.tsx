import { type FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { loginHandler } from "../utility/api";

import { useStoreDispatch } from "../hooks/useStore";

import { setLogin } from "../redux/slices/login-slice";

import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";

function LoginPage() {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useStoreDispatch();

  function handleCheck() {
    setChecked(!checked);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    loginHandler(usernameRef.current?.value, passwordRef.current?.value)
      .then((res) => {
        setIsLoading(false);
        sessionStorage.setItem("token", res.token);
        dispatch(setLogin());
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
      });
  }

  return (
    <>
      <Loading showLoading={isLoading} hideLoading={() => null} />
      <h2 className="text-xl font-bold mb-4">ورود</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 p-6 bg-white rounded-2xl shadow-lg mx-auto"
      >
        <div className="w-full flex items-center justify-between mb-4">
          <input
            type="text"
            id="username"
            ref={usernameRef}
            placeholder="نام کاربری..."
            className="bg-white px-3 py-2 border rounded-lg focus:shadow-lg transition focus:border-[#3498db] outline-none w-5/12"
          />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="رمز عبور..."
            className="bg-white px-3 py-2 border rounded-lg focus:shadow-lg transition focus:border-[#3498db] outline-none w-5/12"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            onChange={handleCheck}
            checked={checked}
            type="checkbox"
            id="userAgreement"
            className="ml-1 w-4 h-4"
          />
          <label htmlFor="userAgreement">
            <Link to="/user-agreement" className="text-[#3498db]">
              قوانین و شرایط
            </Link>{" "}
            را می‌پذیرم.
          </label>
        </div>
        <div>
          {checked &&
          usernameRef.current?.value.length !== 0 &&
          passwordRef.current?.value.length !== 0 ? (
            <Button
              variant="solid"
              size="lg"
              color="primary"
              type="submit"
              className="hover:!bg-[#2980b9] ml-1"
            >
              ورود
            </Button>
          ) : (
            <Button
              variant="disabled"
              size="lg"
              type="button"
              className="ml-1 hover:cursor-not-allowed"
            >
              ورود
            </Button>
          )}
          <span>
            یا{" "}
            <Link to="/signup" className="text-[#3498db]">
              عضویت
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
