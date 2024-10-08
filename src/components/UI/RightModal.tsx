import { BsXLg } from "react-icons/bs";
import { RightModalProps } from "../../types/componentTypes";
import Backdrop from "./Backdrop";

function RightModal({
  children,
  showRightModal,
  hideRightModal,
}: RightModalProps) {
  return (
    <>
      <Backdrop showBackdrop={showRightModal} hideBackdrop={hideRightModal} />
      <div
        className="fixed top-0 right-0 h-screen p-6 transition z-20 bg-white dark:bg-[#424242] shadow-2xl rounded-l-2xl w-full sm:w-2/3 md:w-7/12 lg:w-5/12 xl:w-1/3"
        style={{
          transform: showRightModal ? "translateX(0)" : "translateX(100vw)",
          opacity: showRightModal ? "1" : "0",
        }}
      >
        <div className="text-left">
          <button onClick={hideRightModal}>
            <BsXLg />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

export default RightModal;
