import React from "react";

const MessageBody = () => {
  return (
    <div>
      <p className="opacity-75 mt-2 md:text-2xl mb-3">Message</p>
      <div className="">
        <div className="rounded-full bg-slate-300 p-2 w-1/2 mb-7">
          hello, here is Kenny
        </div>
        <div className="rounded-full bg-slate-300 p-2 w-1/2 float-right mb-3">welcome!!!</div>
        
      </div>

      <textarea className="bg-gray-50 p-4 w-full h-full"></textarea>
    </div>
  );
};

export default MessageBody;
