import React from 'react'

import { images } from '../../constants'
import { SubHeading } from '../../components'
import "./About.css"

const About = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="about">
        <div  className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.storylogo} alt="chef_image" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="About us"/>
            <h1 className="headtext__about">Welcome to </h1>
            <h1 className="headtext__about"> Stock Story Academy</h1>

            <div className="app__chef-content">
            <p className="p__opensans">Booming Bulls Academy is the Best Stock Market Institute that provides you with Best Online Stock Market course in India. It is an initiative for the young generation who are keen on making more, Willing to step forward, and want to be free from financial situations.</p>
            <br />
            <p className="p__opensans">Generally, trading is considered as a business that is not suitable for everyone, but this is just a hoax that we clear by making you learn about the strategies that can provide a good profit.</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
