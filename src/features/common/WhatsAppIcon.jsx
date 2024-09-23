import React from "react";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <>
      <div className="flex flex-col items-center text-white">
        <Link to="https://wa.me/8825135770">
          <img
            src="https://i.imgur.com/LAuedkX.gif"
            alt="Icon 1"
            className="w-[4rem] h-[4rem] mb-1 fixed z-40 bottom-[0.8rem] left-[0.8rem]"
          />
        </Link>
        <span className="text-sm">Home</span>
      </div>
    </>
  );
};

export default WhatsAppIcon;
