import React from "react";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <>
      <Link to="https://wa.me/+918825135770">
        <img
          src="https://i.imgur.com/LAuedkX.gif"
          alt="Icon 1"
          className="w-[4rem] h-[4rem] mb-1 fixed z-40 bottom-[0.8rem] left-[0.8rem]"
        />
      </Link>
    </>
  );
};

export default WhatsAppIcon;
