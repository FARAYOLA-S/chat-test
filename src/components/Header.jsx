import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "./Button";
import WalletModal from "./WalletModal";

const Header = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };
  return (
    <div className="bg-gray-100 px-4 py-3 md:px-8 md:py-4 md:text-2xl flex justify-between">
      <BsArrowLeftShort className="rounded-full bg-gray-200 text-2xl md:text-3xl self-center " />
      <Button
        className="bg-blue-500 rounded-full  px-4 py-2 text-white font-normal cursor-pointer hover:shadow-lg hover:shadow-blue-500/50"
        onClick={toggleModal}
      >
        Connect Wallet
      </Button>
      {modalVisibility && <WalletModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Header;
