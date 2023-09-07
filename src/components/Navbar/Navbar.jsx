import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#service">Services</a></li>
          <li className="p__opensans"><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="app__navbar-register">
          <a href="#contact" className="p__opensans">Register Now !</a>
          <div />
        </div>



        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <GiHamburgerMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#service">Services</a></li>
                <li className="p__opensans"><a href="#contact">Contact Us</a></li>
               </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };
    

export default Navbar;
