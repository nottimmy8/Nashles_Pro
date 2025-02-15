import React from "react";

const Navbar = () => {
  return (
    <div className="bg-secondary text-black z-10 fixed w-full">
      <nav className="max-w-6xl mx-auto p-4">
        {/* destop nav */}
        <div className="">
          <div className=" flex items-center justify-between">
            {/* logo text */}

            <h1 className="">Nashles</h1>

            {/* links */}
            <div className="hidden md:block">
              <ul className="flex items-center font-semibold text-sm  py-3">
                <li className="px-6  ">ABOUT</li>
                <li className="px-6  ">WORK</li>
                <li className="px-6  ">BLOG</li>
                <li className="px-6 ">CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
