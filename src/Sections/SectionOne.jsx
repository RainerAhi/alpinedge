import React, { useState } from "react";

export const SectionOne = () => {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

  const hideNavigation = () => {
    setNavigationVisible(false);
  };

  return (
    <section className="section one">
      <div className="one-content">
        <div className="nav">
          <div className="social-media-container">
            <div className="social-media-box">
              <i className="fa-brands fa-square-instagram" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div className="social-media-box">
              <i className="fa-brands fa-square-threads" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div className="social-media-box">
              <i className="fa-brands fa-facebook" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div className="social-media-box">
              <i className="fa-brands fa-tiktok" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div className="social-media-box">
              <i className="fa-brands fa-youtube" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div className="social-media-box">
              <i className="fa-brands fa-discord" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
          </div>
          <div className="right-content">
            <div className="right-content-client-area">
              <h1>Client Area</h1>
            </div>
            <div className="right-content-other" onClick={toggleNavigation}>
              <i className="fa-solid fa-lines-leaning"></i>
            </div>
          </div>
        </div>
        <div className="content-one">
          <div className="content-one-top">
            <img className="one-logo" src="/alpineedgelogo.png" />
            <h1 className="one-main">ALPINEDGE</h1>
            <h1 className="one-description">Slope To Success</h1>
          </div>
          <div className="content-one-bottom">
            <div className="bottom-button-one">
              <h1 className="label-down lightblue">Start Your Alpine Journey</h1>
              <h1 className="label-down lightblue">Start Your Alpine Journey</h1>
            </div>
            <div className="bottom-button-two">
              <h1 className="label-down white">Buy Program</h1>
              <h1 className="label-down white">Buy Program</h1>
            </div>
          </div>
        </div>
      </div>

      {navigationVisible && (
        <div className="navigation">
          <div className="navigation-container" >
            <div className="navigation-top" >
             <h1 className="navigation-main" >Navigation</h1>
             <button className="navigation-close-button" onClick={hideNavigation}>
               <i class="fa-solid fa-xmark"></i>
             </button>
            </div>
            <div className="navigation-center" >
              <h1 className="nav-center-text" >Lorem Magna</h1>
              <h1 className="nav-center-text" >Lorem Magna</h1>
              <h1 className="nav-center-text" >Lorem Magna</h1>
              <h1 className="nav-center-text" >Lorem Magna</h1>
            </div>
            <div className="navigation-bottom" >
              <h1 className="navigation-bottom-main" >Follow us</h1>
              <div className="navigation-socials" >
                <h1 className="navigation-socials-text" >Instagram</h1>
                <h1 className="navigation-socials-text" >Threads</h1>
                <h1 className="navigation-socials-text" >Facebook</h1>
                <h1 className="navigation-socials-text" >Tiktok</h1>
                <h1 className="navigation-socials-text" >Youtube</h1>
                <h1 className="navigation-socials-text" >Discord</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};