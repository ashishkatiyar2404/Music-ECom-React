import "./Home.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCards from "./CategoryCards";

// IMAGES IMPORT
import brand1 from "../../Assets/Images/new_brand1.jpg";
import brand2 from "../../Assets/Images/new_brand2.jpg";
import brand3 from "../../Assets/Images/new_brand3.jpg";
import brand4 from "../../Assets/Images/new_brand4.jpg";
import { useFilter } from "../../Context/filterContext";

const useDocumentation = (heading) => {
  useEffect(() => {
    document.title = heading;
  }, [heading]);
};

export default function Home() {
  useDocumentation("React Music E-Com");

  const { filterInitialDispatch } = useFilter();
  useEffect(() => {
    const clearFilter = () => {
      filterInitialDispatch({ type: "CLEAR_ALL" });
    };
    clearFilter();
  }, []);

  return (
    <div>
      {/* HERO SECTION  */}
      <section className="hero__section">
        <div className="heading__text-box">
          <h1 className="heading__primary">
            <span className="heading__primary-main">
              Welcome to Music Store!
            </span>
            <span className="heading__primary-sub">
              We have the eminent instruments at lowest prices in India.
            </span>
          </h1>
          <Link to="/ProductList" className="btn__white">
            Shop Now
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION  */}

      <section className="featured__section">
        <div className="featured__heading-container">
          <span className="featured__heading ">FEATURED CATEGORIES</span>
        </div>
        <CategoryCards />
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
