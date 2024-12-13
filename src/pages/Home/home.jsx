import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import Info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            A young man in Istanbul discovers ancient ties and must protect the
            city from immortal enemies. Compelling.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={Info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Upcoming"} category={"popular"} />
        <TitleCards title={"Only on Netflix"} category={"top_rated"} />
        <TitleCards title={"Blockbuster Movies"} category={"now_playing"} />
        <TitleCards title={"Top picks for you"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};
export default home;
