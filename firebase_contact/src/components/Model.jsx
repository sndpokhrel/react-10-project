import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

function Model({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center backdrop-blur top-0 z-40 h-screen absolute w-screen">
          <div className="m-auto relative z-50 min-h-[200px] min-w-[80%] p-4 bg-white">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  );
}

export default Model;
