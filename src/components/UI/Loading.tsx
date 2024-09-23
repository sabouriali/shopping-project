import { Oval } from "react-loader-spinner";

import Backdrop from "./Backdrop";

import { LoadingProps } from "../../types/componentTypes";

function Loading({ showBackdrop, hideBackdrop }: LoadingProps) {
  return (
    <>
      <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
      <Oval
        ariaLabel="loading..."
        color="#ffffff"
        secondaryColor="#fafafa"
        wrapperClass="z-20 fixed left-1/2 top-1/3 -translate-x-1/2"
      />
    </>
  );
}

export default Loading;
