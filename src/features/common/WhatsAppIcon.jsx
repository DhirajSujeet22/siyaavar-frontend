import React from "react";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <>
      <Link to="https://wa.me/+918825135770">
        <img
          src="https://i.imgur.com/LAuedkX.gif"
          alt="Icon 1"
          className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] mb-[2.5rem] fixed z-40 bottom-[0.8rem] left-[1rem]"
        />
      </Link>
    </>
  );
};

export default WhatsAppIcon;
