import React from "react";
import { RxCross1 } from "react-icons/rx";
import { PiDog } from "react-icons/pi";
import { FaCircleDot } from "react-icons/fa6";
import { BsWalletFill } from "react-icons/bs";
import { RiCopperCoinLine } from "react-icons/ri";

const WalletModal = ({ toggleModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10">
      <div
        onClick={toggleModal}
        className="fixed top-0 left-0 w-full h-full"
      ></div>
      <div className="p-4 bg-slate-300 rounded-t-[16px] w-full h-auto fixed bottom-0 ">
        <div className="flex justify-between text-black mb-5">
          <p className="text-lg font-semibold">Connect a Wallet</p>
          <RxCross1
            className="rounded-full bg-gray-200 self-center p-1 text-2xl"
            onClick={toggleModal}
          />
        </div>
        <ul className="">
          <li className="rounded-full bg-white px-4 py-2 mb-2 flex justify-between">
            <label htmlFor="metamask" className="flex gap-2">
              <PiDog className="text-orange text-2xl" />
              <p className="font-semibold">Metamask </p>
            </label>
            <input type="radio" name="option" id="" />
          </li>
          <li className="rounded-full bg-white px-4 py-2 mb-2 flex justify-between">
            <label htmlFor="Coinbase" className="flex gap-2">
              <FaCircleDot className="text-2xl" />
              <p className="font-semibold"> Coinbase </p>
            </label>

            <input type="radio" name="option" id="" />
          </li>
          <li className="rounded-full bg-white px-4 py-2 mb-2 flex justify-between">
            <label htmlFor="WalletConnect" className="flex gap-2">
              <BsWalletFill className="text-2xl" />
              <p className="font-semibold"> WalletConnect </p>
            </label>

            <input type="radio" name="option" id="" />
          </li>
          <li className="rounded-full bg-white px-4 py-2  flex justify-between">
            <label htmlFor="Coinbase" className="flex gap-2">
              <RiCopperCoinLine className="text-2xl" />
              <p className="font-semibold"> Coinbase </p>
            </label>

            <input type="radio" name="option" id="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletModal;
