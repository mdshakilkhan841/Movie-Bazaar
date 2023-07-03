import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer relative -bg--black3 py-[50px] text-white">
            <ContentWrapper >
                <ul className="flex items-center justify-center md:space-x-8 space-x-4 md:mb-8 mb-5">
                    <li className="cursor-pointer md:text-base text-xs hover:-text--pink transition-all">Terms Of Use</li>
                    <li className="cursor-pointer md:text-base text-xs hover:-text--pink transition-all">Privacy-Policy</li>
                    <li className="cursor-pointer md:text-base text-xs hover:-text--pink transition-all">About</li>
                    <li className="cursor-pointer md:text-base text-xs hover:-text--pink transition-all">Blog</li>
                    <li className="cursor-pointer md:text-base text-xs hover:-text--pink transition-all">FAQ</li>
                </ul>
                <div className="flex justify-center items-center md:text-sm leading-5 text-xs opacity-[0.5] text-center md:mb-8 mb-5">
                    <p className=" max-w-[800px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="flex items-center justify-center space-x-3 ">
                    <span className="w-12 h-12 rounded-full -bg--black flex items-center justify-center cursor-pointer transition-all hover:-text--pink hover:shadow-[0_0_0.625em_#FF00CC]">
                        <FaFacebookF />
                    </span>
                    <span className="w-12 h-12 rounded-full -bg--black flex items-center justify-center cursor-pointer transition-all hover:-text--pink hover:shadow-[0_0_0.625em_#FF00CC]">
                        <FaInstagram />
                    </span>
                    <span className="w-12 h-12 rounded-full -bg--black flex items-center justify-center cursor-pointer transition-all hover:-text--pink hover:shadow-[0_0_0.625em_#FF00CC]">
                        <FaTwitter />
                    </span>
                    <span className="w-12 h-12 rounded-full -bg--black flex items-center justify-center cursor-pointer transition-all hover:-text--pink hover:shadow-[0_0_0.625em_#FF00CC]">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;