import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../images/nukangid.png";
const Navbar = () => {
  return (
    <>
      <header className="fixed bg-white w-full top-0 z-50">
        <nav
          className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm "
          role="navigation"
        >
          <img src={logo} alt="" className="pl-8" />

          <div className="px-4 cursor-pointer md:hidden">
            <GiHamburgerMenu className="w-6 h-6" />
          </div>

          <div className="pr-8">
            <strong className="text-xl">Jadi Mitra</strong>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
