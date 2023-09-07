import React from 'react'
import CountUp from "react-countup"
import "./NumberCount.css"

const NumberCount = () => {
  return (
    <section className="app__bg section-work-data">
      <div className="container ">
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={38.4} duration={0.8}/>k+</h2>
            <p className="p__opensans">Instagram Followers</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={2500} duration={0.8} />+
            </h2>
            <p className="p__opensans">Youtube Suscribers</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={500} duration={0.8} />+
            </h2>
            <p className="p__opensans">Students Mentored</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={70} duration={0.8} />+
            </h2>
            <p className="p__opensans">SESSIONS FINISHED</p>
          </div>
      </div>

    </section>
  )
}

export default NumberCount
