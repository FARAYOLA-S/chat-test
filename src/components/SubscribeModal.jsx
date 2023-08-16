import React from "react";
import Button from "./Button";
import { RxCross1 } from "react-icons/rx";

const SubscribeModal = ({ toggleModal}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10">
      <div onClick={toggleModal} className="fixed top-0 left-0 w-full h-full"></div>
      <div className="p-4 bg-slate-300 rounded-t-[16px] md:px-8 w-full h-auto fixed bottom-0 ">
        <div className="flex justify-between text-black mb-5">
          <p className="text-xl md:text-3xl font-semibold">Subscribe</p>
          <RxCross1  className="rounded-full bg-gray-200 self-center p-1 text-2xl" onClick={toggleModal} />
        </div>
        <div className=" flex flex-col gap-3 md:gap-5">
          <input
            type="email"
            name="email"
            id=""
            className="rounded-full w-full py-2 px-3"
            placeholder="Enter your email address"
          />
          <Button className="rounded-full w-full py-2 text-white bg-blue-500">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
