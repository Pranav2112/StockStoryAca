import React from "react";
import { images } from "../../constants";

import "./CourseDetails.css";

const CourseDetails = () => {
  return (        
    <div className="choosebg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <h1 className="headtext__title"> Welcome to Stock Story </h1>
        <p className="p__opensans">
          Stock Story trading course can provide you to learn about the stock
          market from the basics, where you get to learn how does a market
          operates to how can you earn simply by putting all the logical
          thinking into the action. Our simplified strategies will help you to
          earn and stand financially independent.
        </p>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>6 months Membership in WhatsApp Important updates Group</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>Revision Classes</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>5 Star Trading Setup</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>Booming Bulls Facebook Stock Selection Group</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>Trading System Development</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>
        
        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>Trading Psychology</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>

        <div className="optionbox">
          <div className="tickicon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <div className="benifitsText">
            <h3>Ultimate Trader's Checklist</h3>
            {/* <p className="p__opensans">+91-9870857939</p> */}
          </div>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.cover_courseimg} alt="cover_courseimg" />
        {/* <img className="youtube_icon" src={images.youtubeicon} alt="youtubeicon" /> */}
      </div>
    </div>
  );
};

export default CourseDetails;
