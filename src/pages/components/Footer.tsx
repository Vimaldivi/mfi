import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
    <div className="section__container footer__container">
      <div className="footer__col">
        <div className="footer__logo">
          <a href="#"><img src="assets/logo.png" alt="logo" /></a>
        </div>
        <p>
        Experience a fitness revolution by purchasing our top-quality products from MyFitIndia.
        </p>
      </div>
      <div className="footer__col">
        <h4>Contact</h4>
        <div className="footer__links">
          <a href="#">Contact Us</a>
          <a href="#">Get In Touch: support@Mfi.com</a>
          <a href="#">Partner With Us</a>
          <a href="#">Network</a>
        </div>
      </div>
      <div className="footer__col">
        <h4>About</h4>
        <div className="footer__links">
          <a href="#">About Us</a>
          <a href="#">Copyright</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms And Conditions</a>
        </div>
      </div>
      <div className="footer__col">
        <h4>Social</h4>
        <div className="footer__links">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
        </div>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2023. All rights reserved.
    </div>
  </section>
  )
}

export default Footer