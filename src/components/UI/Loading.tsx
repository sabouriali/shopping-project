import { Oval } from "react-loader-spinner";

import Backdrop from "./Backdrop";

import { LoadingProps } from "../../types/componentTypes";

function Loading({ showLoading, hideLoading }: LoadingProps) {
  return (
    <>
      <Backdrop showBackdrop={showLoading} hideBackdrop={hideLoading} />
      <Oval
        ariaLabel="loading..."
        color="#ffffff"
        secondaryColor="#fafafa"
        wrapperClass="z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}

export default Loading;
