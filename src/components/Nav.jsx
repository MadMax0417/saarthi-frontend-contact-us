import React from "react";
import logo from "../assets/logo.webp";

const Nav = () => {
  return (
    <nav className="w-full h-20 bg-white shadow-[9px_3px_6px_1px_#0f0f0f99] flex items-center justify-center relative">
      
      {/* Centered text */}
      <div className="text-xl md:text-3xl lg:text-3xl xl:text-2xl text-center">
        STUDIO SAARTHI
      </div>

      {/* Logo in the corner */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 w-16 h-16">
        <img
          src={logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  );
};

export default Nav;
