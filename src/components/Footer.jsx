import React from "react";
import { PiCopyrightBold } from "react-icons/pi";
const Footer = () => {
  return (
    <div className=" h-[50vh] w-full p-4 bg-red-500 ">
      <div className=" max-w-7xl mx-auto flex justify-between items-baseline">
        <div className="flex">
          <PiCopyrightBold />
          2025 Oyewole
        </div>
        <div>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECT</li>
          <li>CONTACT</li>
        </div>
        <div>
          <li>Instagram</li>
          <li>Threads</li>
          <li>X(twitter) </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
