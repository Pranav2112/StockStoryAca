import React from 'react'
import "./CourseEnroll.css"
import { SubHeading } from '../../components'
import { images } from '../../constants';

const CourseEnroll = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="">
    <div className="app__wrapper_info">
      <SubHeading title="Most Valuable Stock Market Course " />
      <h1 className="header-h1">Traders Live Mentorship Program</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Elite Traders Live Mentorship Program aims to make you a professional trader with perfect knowledge of how and when to enter/exit the trade and book big profits. It includes many strategies to suit every trader's style, advanced in-depth dive of the current syllabus, future and options trading deep dive, and much more.</p>
      <p className="p__opensans">Enroll Now by just paying ₹30000</p>
      <button type="button" className="custom__button">Know More </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cover_courseimg} alt="header_img" />
    </div>
  </div>
  )
}

export default CourseEnroll
