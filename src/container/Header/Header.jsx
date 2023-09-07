import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header
 = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="We look forward for " />
      <h1 className="app__header-h1">Making India's Youth independent</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Stock Story Academy is the best stock market institute that provides the most simplified and to-the-point stock market course from the scratch for beginners.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cover_courseimg} alt="header_img" />
    </div>
    
  </div>
    
    
  )
}

export default Header;
