import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

// import "./header.css";
import 'animate.css';


import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    }
    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    }

    return (
        <header className={` flex absolute w-full h-16 translate-y-0 z-20 items-center transition-all text-white ${mobileMenu ? ' -bg--black3 backdrop-blur-none' : 'bg-[#00000040] backdrop-blur-sm'}`}>
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <div className="py-1 logo">
                        <img
                            className="h-12 py-1 cursor-pointer"
                            src={logo}
                            alt="header logo"
                        />
                    </div>

                    {/* animation class added "animate__animated animate__fadeInDown" */}
                    <ul className={`text-lg font-semibold ${mobileMenu ? 'flex absolute w-full flex-col top-16 left-0 py-5 -bg--black3  border-t-[1px] border-opacity-20 border-neutral-100 animate__animated animate__fadeInDown' : 'md:flex hidden items-center space-x-8'}`}>
                        <li className={`cursor-pointer hover:text-[#FF00CC] ${mobileMenu ? 'w-full h-auto py-4 px-5' : ''}`}>Movies</li>
                        <li className={`cursor-pointer hover:text-[#FF00CC] ${mobileMenu ? 'w-full h-auto py-4 px-5' : ''}`}>Tv Shows</li>
                        <li className={`cursor-pointer hover:text-[#FF00CC] ${mobileMenu ? 'w-full h-auto py-4 px-5' : ''}`}>
                            <HiOutlineSearch />
                        </li>
                    </ul>
                    <div className="mobileMenuItems md:hidden flex items-center space-x-6 text-lg">
                        <HiOutlineSearch className="cursor-pointer" />
                        {mobileMenu ? <VscChromeClose className="cursor-pointer" onClick={() => setMobileMenu(false)} /> : <SlMenu className="cursor-pointer" onClick={openMobileMenu} />}
                    </div>
                </div>
            </ContentWrapper>
        </header>
    );
};

export default Header;
