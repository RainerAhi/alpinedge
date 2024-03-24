import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="section one">
          <div className="mobileScroll" >
      <div class="nav">
          <div className="social-media-container" >
            <div class="social-media-box">
              <i class="fa-brands fa-square-instagram" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div class="social-media-box">
              <i class="fa-brands fa-square-threads" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div class="social-media-box">
              <i class="fa-brands fa-facebook" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div class="social-media-box">
              <i class="fa-brands fa-tiktok" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div class="social-media-box">
              <i class="fa-brands fa-youtube" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
            <div class="social-media-box">
              <i class="fa-brands fa-discord" style={{ fontSize: "30px", color: "#80BFFF" }} ></i>
            </div>
          </div>
          <div className="right-content" >
            <div class="right-content-client-area">
                <h1>Client Area</h1>
            </div>
            <div class="right-content-other">
              <i class="fa-solid fa-lines-leaning"></i>
            </div>
          </div>
      </div>
      <div className="content-one" >
        <div className="content-one-top" >
          <img className="one-logo" src="/alpineedgelogo.png" />
          <h1 className="one-main" >ALPINEDGE</h1>
          <h1 className="one-description" >Slope To Success</h1>
        </div>
          <div className="content-one-bottom" >
            <div className="bottom-button-one" >
              <h1 className="bottom-button-one-text lightblue" >Start Your Alpine Journey</h1>
            </div>
            <div className="bottom-button-two" >
              <h1 className="bottom-button-one-text white" >Buy Program</h1>
            </div>
          </div>
      </div>
      </div>
        </section>
    )
}