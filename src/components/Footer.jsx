import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import { CiImageOn } from "react-icons/ci";
import { AiOutlinePlusCircle, AiOutlineSend } from "react-icons/ai";
import Button from "./Button";
import SubscribeModal from "./SubscribeModal";

const Footer = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <div className="  bg-gray-100 px-4 pt-3 pb-5 flex justify-between  md:px-8 md:pt-5 md:text-2xl">
      <div className="flex gap-5 text-gray-500 text-lg md:text-2xl ">
        <ImBin className="cursor-pointer hover:shadow-gray-500 hover:shadow-lg" />
        <CiImageOn className=" text-xl md:text-3xl cursor-pointer  hover:shadow-gray-500 hover:shadow-lg" />
      </div>

      <div className="flex gap-4">
        <Button
          className=" border-2 border-sky-500 rounded-full relative pr-9 pl-3 md:pr-11  text-sky-500 hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
          onClick={toggleModal}
        >
          Subscribe
          <AiOutlinePlusCircle className="absolute top-1 right-3 " />
        </Button>
        {modalVisibility && <SubscribeModal toggleModal={toggleModal} />}
        <Button className="bg-blue-500 rounded-full  relative pr-8 pl-4 md:pr-10 text-white font-normal cursor-pointer hover:shadow-lg hover:shadow-blue-500/50">
          Send
          <AiOutlineSend className="absolute top-[6px] right-[10px]" />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
