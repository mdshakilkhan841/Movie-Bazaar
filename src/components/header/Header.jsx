import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./header.css";
import "animate.css";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movie-bazaar-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        var navbar = document.querySelector(".Navbar");
        if(window.scrollY > 200) {
            if(window.scrollY > lastScrollY &&  !mobileMenu) {
                navbar.classList.toggle(setShow("hide"));
            } else {
                navbar.classList.toggle(setShow("show"));
            }
        } else {
            navbar.classList.toggle(setShow("top"));
        }
        setLastScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY]);

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };
    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        if (type === "movies") {
            navigate("/explore/movies");
        } else {
            navigate("/explore/tv-shows");
        }
        setMobileMenu(false);
    };

    return (
        <header
            className={`Navbar fixed flex w-full h-16 translate-y-0 z-20 items-center transition-all text-white ${mobileMenu
                ? " -bg--black3 backdrop-blur-none"
                : "bg-[#00000040] backdrop-blur-sm"
                } ${show}`}
        >
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <div className="py-1 logo">
                        <Link to={"/"}>
                            <img
                                className="h-12 py-1 cursor-pointer"
                                src={logo}
                                alt="header logo"
                            />
                        </Link>
                    </div>

                    {/* animation class added "animate__animated animate__fadeInDown" */}
                    <ul
                        className={`text-lg font-semibold ${mobileMenu
                            ? "flex absolute w-full flex-col top-16 left-0 py-5 -bg--black3  border-t-[1px] border-opacity-20 border-neutral-100 animate__animated animate__fadeInDown"
                            : "md:flex hidden items-center space-x-8"
                            }`}
                    >
                        <li
                            onClick={() => navigationHandler("movies")}
                            className={`cursor-pointer hover:-text--pink ${mobileMenu ? "w-full h-auto py-4 px-5" : ""
                                }`}
                        >
                            Movies
                        </li>
                        <li
                            onClick={() => navigationHandler("tv-shows")}
                            className={`cursor-pointer hover:-text--pink ${mobileMenu ? "w-full h-auto py-4 px-5" : ""
                                }`}
                        >
                            Tv Shows
                        </li>
                        <li
                            className={`cursor-pointer hover:-text--pink ${mobileMenu ? "hidden" : ""
                                }`}
                        >
                            <HiOutlineSearch onClick={openSearch} />
                        </li>
                    </ul>
                    <div className="md:hidden flex items-center space-x-6 text-lg">
                        <HiOutlineSearch
                            onClick={openSearch}
                            className="cursor-pointer hover:-text--pink"
                        />
                        {mobileMenu ? (
                            <VscChromeClose
                                className="cursor-pointer"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <SlMenu className="cursor-pointer" onClick={openMobileMenu} />
                        )}
                    </div>
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="w-full h-12 absolute top-16 bg-white animate__animated animate__fadeInDown">
                    <ContentWrapper>
                        <div className="flex items-center w-full h-10 mt-1">
                            <input
                                className="w-full h-10 bg-white text-black outline-none"
                                type="text"
                                placeholder="Search for a Movie or TV show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                className="cursor-pointer text-xl flex-shrink-0 ml-[10px] text-black"
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
