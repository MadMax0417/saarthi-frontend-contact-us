import React from "react";
import logo from "../assets/logo.webp"

const Nav = () => {
    return (
        <nav className="flex h-18 items-center justify-center
        gap-[10px] w-full shadow-[9px_3px_6px_1px_#0f0f0f99] relative">
            <div className="w-20 h-15 mr-0 justify-items-start">
                <img src={logo} alt="logo"
                className=" h-[100%] w-[100%] object-contain ml-5"/>
            </div> 
           
            <div className=" text-xl
            md:text-3xl lg:text-3xl xl:text-2xl">
                STUDIO SAARTHI
            </div>
        </nav>
    )
}

export default Nav;