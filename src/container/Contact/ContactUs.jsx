import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    
    <section className="contact_section section__padding">
      
      <div className="heading_content">
        <h2 className="headtext__cormorant">Contact Us</h2>
        <p className="p__cormorant">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque minima incidunt saepe nostrum unde ut voluptatum quam, veniam praesentium laborum quidem obcaecati blanditiis, sed odit magnam iste consequatur minus.</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.273987119045!2d72.89873587411516!3d19.09563255135797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c40ea3f323%3A0x7cc85494d7d02408!2sStock%20Story%20Academy!5e0!3m2!1sen!2sin!4v1681924388764!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



      <div className="contactcontainer">
        <div className="contactInfo">
          <h3 className="p_getint">Get in touch</h3>
          <p className="P_extratext">Have any queries? or want to know more?
            Contact us and we will be happy to help</p>
          <div className="contactbox">
            <div className="iconss"><ion-icon name="location"></ion-icon></div>
            <div className="infoText">
              <h3>Address</h3>
              <p className="p__opensans">23345 bhatwadi ghatkopar(W),<br />Mumbai <br />400084</p>
            </div>
          </div>


          <div className="contactbox">
            <div className="iconss"><ion-icon name="mail"></ion-icon></div>
            <div className="infoText">
              <h3>Email</h3>
              <p className="p__opensans">pranavauti2003@gmail.com</p>
            </div>
          </div>



          <div className="contactbox">
            <div className="iconss"><ion-icon name="call"></ion-icon></div>
            <div className="infoText">
              <h3>Contact</h3>
              <p className="p__opensans">+91-9870857939</p>
            </div>
          </div>
            <h2 className="txt">Connect with us</h2>
            <ul className="social-icon">
              <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            </ul>
        </div>



        <div className="contactForm">
          <form action="https://formspree.io/f/myyalkvv" method="POST" >
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Full Name</span>
            </div>

            <div className="inputBox">
              <input type="text" name="" required />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea name="text" id="" cols="30" rows="10" required></textarea>
              <span>Type your Message</span>
            </div>

            <div className="inputBox">
              <input type="submit" name="" required="required" />
              
            </div>


          </form>
        </div>
      </div>
</section>
  )
}

export default ContactUs
