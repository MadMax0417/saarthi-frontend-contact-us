import React from "react";
import logo from "../assets/logo.jpg"

const Nav = () => {
    return (
        <nav className="flex h-18 justify-center items-center
        gap-[10px] w-full shadow-[9px_3px_6px_1px_#0f0f0f99]">
            <div className="w-20 h-15 ">
                <img src={logo} alt="logo" className=" h-[100%] w-[100%]object-cover" />
            </div>
            <div className=" text-xl
            md:text-3xl lg:text-3xl xl:text-2xl ">
                STUDIO SAARTHI
                {/* 
                normal: for mobile phones
                2xl: for ultra wide screen
                lg: for green ipad
                xl: for pc / laptop screen
                 */}
            </div>
        </nav>
    )
}

export default Nav;