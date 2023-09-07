import React from 'react'
import "./ProvideService.css"

const ProvideService = () => {
  return (
    <div className="bodyy">
    <div className="container">
        <div className="box" style={{}}>
            <div className="content">
                <div className="icon"><ion-icon name="clipboard"></ion-icon></div>
                <div className="text">
                    <h3>Learn From Scratch</h3>
                    <p>Learn the basics of the stock market, to enhance the understanding of how does the Stock market works and what makes you earn in the market.
                    </p>
                    <a href="#Contact">Read More</a>
                </div>
            </div>
        </div>


        <div className="box" >
            <div className="content">
                <div className="icon"><ion-icon name="book"></ion-icon></div>
                <div className="text">
                    <h3>Revision Classes</h3>
                    <p>Over 300+ revision classes to help you cover any topic you miss in your live class. You will never be left behind
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>


        <div className="box" >
            <div className="content">
                <div className="icon"><ion-icon name="stats-chart"></ion-icon></div>
                <div className="text">
                    <h3>Live Q/A Session</h3>
                    <p>We have Live Q/A interaction sessions with Anish Singh Thakur, where students ask their queries directly to him.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProvideService