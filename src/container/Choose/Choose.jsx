import React from "react";

import { data, images } from "../../constants";
import { SubHeading } from "../../components";
import "./Choose.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
};

const Choose = () => {
  return (
    <div className="choosebg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Why Choose us" />
        <h1 className="headtext__title"> Welcome to Stock Story  </h1>
        <p className="p__opensans">Stock Story Academy over the period of time has evolved & can help anyone with no experience & no prior knowledge about the markets to become a consistent profitable trader & change his/her financial life after learning from us.</p>

      <div className="app__laurels_award">
        {data.awards.map((award) => (
            <AwardCard award={award} keys={award.title} />
            ))}
      </div>
    </div>

      <div className="app__wrapper_img">
        <img src={images.chartposter} alt="chartposter_img" />
      </div>
    </div>
  );
};

export default Choose;
