import React from "react";

export const SectionFour = () => {

  return (
    <section className="section four">
      <div className="four-image">

        <div className="background-element" />
        <div className="background-element-two" />

          <div className="four-content-text" >
            <h1 class="reveal-type four-text" >
              We are exclussively partnering with the most<br/> reliable & reputable broker in the industry.
            </h1>
          </div>

        <div className="four-content-display-row" >

        <div className="four-content" >


          <div className="four-content-box" >
            <div className="content-text-icon" >
            <i class="fa-solid fa-earth-europe" style={{ fontSize: "75px", color: "white" }} ></i>
            </div>
            <h1 className="content-text" >EU-Onshore (Spain)</h1>
          </div>

          <div className="four-content-box " >
            <div className="content-text-icon purple " >
              <i class="fa-solid fa-ship" style={{ fontSize: "75px", color: "white" }} ></i>
            </div>
            <h1 className="content-text" >EU-Offshore (Cyprus)</h1>
          </div>

          <div className="four-content-box" >
            <div className="content-text-icon darkblue" style={{ fontSize: "75px", color: "white" }} >
              <i class="fa-solid fa-earth-asia"></i>
            </div>
            <h1 className="content-text" >APAC-Offshore<br/> (Vanuatu)</h1>
          </div>
          

        </div>

        <div className="four-content-two" >


          <div className="four-content-box" >
            <div className="content-text-icon mediumblue" >
              <i class="fa-solid fa-flag" style={{ fontSize: "75px", color: "white" }} ></i>
            </div>
            <h1 className="content-text" >Registered  with over<br/> 29 countries</h1>
          </div>

          <div className="four-content-box" >
            <div className="content-text-icon purpleblue " >
             <i class="fa-solid fa-calendar-days" style={{ fontSize: "75px", color: "white" }} ></i>
            </div>
            <h1 className="content-text" >Operating 12+ years,<br/> 30+ awards won</h1>
          </div>

          <div className="four-content-box" >
            <div className="content-text-icon otherblue " >
              <i class="fa-solid fa-store" style={{ fontSize: "75px", color: "white" }} ></i>
            </div>
            <h1 className="content-text" >Low commission &<br/> real market spreads</h1>
          </div>
          

        </div>

        </div>  

      </div>
    </section>
  );
};