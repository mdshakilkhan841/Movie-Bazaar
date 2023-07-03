import React from "react";
import "./contentWrapper.css";

const ContentWrapper = ({ children }) => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-5">{children}</div> 
    )
};

export default ContentWrapper;