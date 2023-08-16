import React from "react";

const MessageHeaader = () => {
  return (
    <div className="  py-6 border-b-4 border-gray-100 flex flex-col gap-4 md:text-2xl">
      <div className="flex justify-between">
        <label className="opacity-75 self-center " htmlFor="sender">from:</label>
        <input type="text" name="from" id="" className="bg-gray-100 rounded-full p-2"  placeholder="Connect wallet"/>
      </div>

      <div className="flex justify-between">
        <label className="opacity-75 self-center " htmlFor="reciever">to:</label>
        <input type="text" name="to" id="" className="bg-gray-100 rounded-full p-2 text-black" placeholder="Add wallet" />
      </div>
    </div>
  );
};

export default MessageHeaader;
