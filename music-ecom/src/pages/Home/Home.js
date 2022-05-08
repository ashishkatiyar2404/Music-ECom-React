import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

// IMAGES IMPORT
import guitar_wall from "../../Assets/Images/featured__guitar1.jpg";
import piano from "../../Assets/Images/featured__piano.jpg";
import drum from "../../Assets/Images/featured__drum.jpg";
import xylo from "../../Assets/Images/featured__xylo.jpg";
import brand1 from "../../Assets/Images/new_brand1.jpg";
import brand2 from "../../Assets/Images/new_brand2.jpg";
import brand3 from "../../Assets/Images/new_brand3.jpg";
import brand4 from "../../Assets/Images/new_brand4.jpg";

export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <div className="nav">
        <Navbar />
      </div>

      {/* HERO SECTION  */}
      <section className="hero__section">
        <div className="heading__text-box">
          <h1 className="heading__primary">
            <span className="heading__primary-main">
              Welcome to Music Store!{" "}
            </span>
            <span className="heading__primary-sub">
              We have the eminent instruments at lowest prices in India.
            </span>
          </h1>
          <a href="/" className="btn__white">
            Shop Now
          </a>
        </div>
      </section>

      {/* FEATURED SECTION  */}
      <section className="featured__section">
        <div className="featured__heading-container">
          <span className="featured__heading ">FEATURED CATEGORIES</span>
        </div>
        <div className="featured__items-container">
          <div className="featured__guitar">
            <img src={guitar_wall} alt="Guitars" />
            <span className="guitar__text">Guitars</span>
          </div>
          <div className="featured__piano">
            <img src={piano} alt="Pianos" />
            <span className="piano__text">Pianos</span>
          </div>
          <div className="featured__drum">
            <img src={drum} alt="Drums" />
            <span className="drum__text">Drums</span>
          </div>
          <div className="featured__xylo">
            <img src={xylo} alt="Xylophones" />
            <span className="xylo__text">Xylophones</span>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS  */}
      <section className="new__arrival-section">
        <div className="featured__heading-container">
          <span className="featured__heading">WHAT'S NEW</span>
        </div>
        <div className="new__items-container">
          <div className="new__brand">
            <div>
              <img src={brand1} alt="guitar" />
              <span className="new">NEW</span>
            </div>
            <span>AK-101 Dreadnought</span>
          </div>
          <div className="new__brand">
            <div>
              <img src={brand2} alt="guitar" />
              <span className="new">NEW</span>
            </div>
            <span>AK-10BAS Dreadnought</span>
          </div>
          <div className="new__brand">
            <div>
              <img src={brand3} alt="guitar" />
              <span className="new">NEW</span>
            </div>
            <span>AK-101PP Parlor</span>
          </div>
          <div className="new__brand">
            <div>
              <img className="guitar__image" src={brand4} alt="guitar" />
              <span className="new">NEW</span>
            </div>
            <span>60th Anniversary Jaguar</span>
          </div>
        </div>
      </section>
    </div>
  );
}
