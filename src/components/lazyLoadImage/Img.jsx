import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || "w-full h-full"}
            style={{objectFit: 'cover', objectPosition: 'center'}}
            alt="hero image"
            effect="blur"
            src={src}
        />
    );
};

export default Img;