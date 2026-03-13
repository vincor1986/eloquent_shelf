"use client";

import { createPortal } from "react-dom";

type Props = {
  closeModal: () => void;
}

const ModalBackdrop = ({ closeModal }: Props) => {
  return createPortal(
    <div
      className="fixed inset-0 w-full h-full z-0 cursor-pointer"
      onClick={closeModal}
    />,
    document.body
  );
};

export default ModalBackdrop;
