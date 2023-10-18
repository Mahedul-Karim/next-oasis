"use client";
import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
};

const Modal: React.FC<Props> = function ({ children, onClick, type }) {
  const modal = (
    <div className="fixed top-0 left-0 w-screen bg-backdrop backdrop-blur-[4px] h-screen flex items-center justify-center z-[100000]">
      <div
        className={`w-full overflow-y-scroll ${
          type === "form" ? "h-[400px]" : ""
        } sm:w-max bg-grey-0 rounded-md py-[32px] px-[40px] shadow-lg relative`}
        id="modal"
      >
        <button className="absolute top-[10px] right-[10px]" onClick={onClick}>
          <RxCross2 size={25} />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
