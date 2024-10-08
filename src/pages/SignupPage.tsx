import { type FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signupHandler } from "../utility/api";

import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";

function SignupPage() {
  const [checked, setChecked] = useState(false);
  const [checkedForm, setCheckedForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const latRef = useRef<HTMLInputElement>(null);
  const longRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const userInfo = {
    email: emailRef.current?.value ? emailRef.current!.value : "test",
    username: usernameRef.current?.value ? usernameRef.current!.value : "test",
    password: passwordRef.current?.value ? passwordRef.current!.value : "test",
    name: {
      firstname: firstNameRef.current?.value
        ? firstNameRef.current!.value
        : "test",
      lastname: lastNameRef.current?.value
        ? lastNameRef.current!.value
        : "test",
    },
    address: {
      city: cityRef.current?.value ? cityRef.current!.value : "test",
      street: streetRef.current?.value ? streetRef.current!.value : "test",
      number: numberRef.current?.value ? numberRef.current!.value : "test",
      zipcode: zipCodeRef.current?.value ? zipCodeRef.current!.value : "test",
      geolocation: {
        lat: latRef.current?.value ? latRef.current!.value : "test",
        long: longRef.current?.value ? longRef.current!.value : "test",
      },
    },
    phone: phoneNumberRef.current?.value
      ? phoneNumberRef.current!.value
      : "test",
  };

  function handleCheck() {
    setChecked(!checked);
    checkForm();
  }

  function checkForm() {
    if (
      firstNameRef.current?.value !== null &&
      lastNameRef.current?.value !== null &&
      emailRef.current?.value !== null &&
      usernameRef.current?.value !== null &&
      passwordRef.current?.value !== null &&
      password2Ref.current?.value !== null &&
      cityRef.current?.value !== null &&
      streetRef.current?.value !== null &&
      numberRef.current?.value !== null &&
      zipCodeRef.current?.value !== null &&
      latRef.current?.value !== null &&
      longRef.current?.value !== null &&
      phoneNumberRef.current?.value !== null &&
      checked
    ) {
      setCheckedForm(true);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    signupHandler(userInfo)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        alert("ثبت نام موفق");
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <>
      {isLoading && <Loading showLoading={true} hideLoading={() => null} />}
      <h2 className="text-xl font-bold mb-4">ثبت نام</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-2xl shadow-lg dark:bg-[#424242] transition"
      >
        <div className="flex items-center justify-between flex-wrap mb-2">
          <input
            type="text"
            id="firstname"
            ref={firstNameRef}
            placeholder="نام..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="lastname"
            ref={lastNameRef}
            placeholder="نام خانوادگی..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="ایمیل..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="username"
            ref={usernameRef}
            placeholder="نام کاربری..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="رمز..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="password"
            id="password2"
            ref={password2Ref}
            placeholder="تکرار رمز..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="city"
            ref={cityRef}
            placeholder="شهر..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="street"
            ref={streetRef}
            placeholder="خیابان..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="number"
            ref={numberRef}
            placeholder="پلاک..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="zipcode"
            ref={zipCodeRef}
            placeholder="کد پستی..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="lat"
            ref={latRef}
            placeholder="طول..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="long"
            ref={longRef}
            placeholder="عرض..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
          />
          <input
            type="text"
            id="phone"
            ref={phoneNumberRef}
            placeholder="شماره تماس..."
            className="px-3 py-2 mb-2 border rounded-lg transition focus:border-[#3498db] outline-none w-5/12 dark:bg-[#212121] dark:placeholder:text-gray-300"
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
          <label htmlFor="userAgreement">شرایط و قوانین را می‌پذیرم</label>
        </div>
        <div>
          {checkedForm ? (
            <Button
              variant="solid"
              size="lg"
              color="primary"
              type="submit"
              className="hover:!bg-[#2980b9] ml-1"
            >
              ثبت نام
            </Button>
          ) : (
            <Button
              variant="disabled"
              size="lg"
              type="button"
              className="ml-1 hover:cursor-not-allowed"
            >
              ثبت نام
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default SignupPage;
