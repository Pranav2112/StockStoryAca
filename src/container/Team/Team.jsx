import React from 'react'

import { images } from '../../constants'

import "./Team.css"




const Team = () => {
  return (
    <div className="team-section section__padding">
        <h1 className="headtext__cormorant">Our Team</h1>
        <div className="team-container">
            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Loren</p>
            </div>

            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Loren.</p>
            </div>


            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Loren.</p>
            </div>

            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Loren.</p>
            </div>


            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Lorem  </p>
            </div>

            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Lorem  </p>
            </div>

            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Lorem </p>
            </div>

            <div className="team-items">
            <div className="img"> <img src={images.chef} alt=""/></div>
                <h3>Fpunder Ceo</h3>
                <p>Lorem </p>
            </div>
        </div>


    </div>
  )
}

export default Team
