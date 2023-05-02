import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./heroBanner.css";
import 'animate.css';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="w-full md:h-[700px] h-[450px] -bg--black flex items-center relative">
      {!loading && (
        <div className="w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden">
          <Img src={background}></Img>
        </div>
      )}

      <div className="w-full h-[250px] absolute bottom-0 left-0 bg-[linear-gradient(180deg,_rgba(4,_21,_45,_0)_0%,_#04152d_79.17%)]"></div>

      <ContentWrapper>
        <div className="max-w-[800px] flex flex-col justify-center items-center m-auto relative bg-opacity-layer text-white text-center ">
          <span className="md:text-8xl text-5xl font-bold md:mb-3 mb-1 animate__animated animate__zoomIn">
            Welcome.
          </span>
          <span className="subtitle text-lg md:text-2xl leading-none font-medium mb-10 animate__animated animate__lightSpeedInLeft">
            Millions of movies, TV shows and people to discover. Explore Now.
          </span>
          <div className="flex justify-center items-center w-full">
            <input
              className="md:w-[calc(100%-150px)] w-[calc(100%-100px)] md:h-[60px] h-[50px] bg-white text-black md:px-[30px] px-[15px] md:text-xl text-sm rounded-l-md outline-none border focus:ring-2 focus:ring-fuchsia-600"
              type="text"
              placeholder="Search for a Movie or TV show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button
              type="submit"
              className="md:w-[150px] w-[100px] md:h-[60px] h-[50px] md:text-xl text-base rounded-r-md bg-gradient-to-r from-[#FF00CC] to-[#333399] "
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
