import { BackdropProps } from "../../types/componentTypes";

function Backdrop({ showBackdrop, hideBackdrop }: BackdropProps) {
  return (
    <div
      className={
        showBackdrop
          ? "min-h-screen w-full z-10 backdrop-blur-sm fixed top-0 left-0 transition bg-[#00000080]"
          : ""
      }
      style={{
        opacity: showBackdrop ? "1" : "0",
      }}
      onClick={hideBackdrop}
    />
  );
}

export default Backdrop;
