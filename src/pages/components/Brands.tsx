import React from 'react'

const Brands = () => {
  return (
    <section className="section__container trainer__container" id="brands">
    <h2 className="section__header">Our Top Brands</h2>
    <p className="section__description">
      Our Brands are more than just experts in exercise; they are passionate
      about helping you achieve your health and fitness goals. Our trainers
      are equipped to tailor workout programs to meet your unique needs.
    </p>
    <div className="trainer__grid">
      <div className="trainer__card">
        <img src="assets/trainer-1.jpg" alt="trainer" />
      </div>
      <div className="trainer__card">
        <div className="trainer__content">
          <h4>FITGO - Where Fitness Meets Purpose</h4>
          <hr />
          <p>
          FITGO embraces the power of fitness as a holistic experience. 
          Whether you prefer cardio, yoga, dancing, or strength training, 
          FITGO can provide the perfect apparel and gear to maximize your performance. 
          Their collection is designed to motivate and inspire, allowing you to wear your motivation proudly.
          </p>
          
        </div>
      </div>
      <div className="trainer__card">
        <img src="assets/trainer-2.jpg" alt="trainer" />
      </div>
      <div className="trainer__card">
        <div className="trainer__content">
          <h4>Muscle MX - CBD Infused Fitness Products</h4>
          <hr />
          <p>
          Fitness Brands step back! Make way for Muscle MX. Here’s a Brand that stands tall behind its products. 
          From CBD balms to lotions to gummies, their all-natural 
          products are perfect for fitness recovery and to give you that pre and post-workout boost.
          </p>
          
        </div>
      </div>
      <div className="trainer__card">
        <img src="assets/trainer-3.jpg" alt="trainer" />
      </div>
      <div className="trainer__card">
        <div className="trainer__content">
          <h4>VELA — Workout Resistance Bands</h4>
          <hr />
          <p>
          Squats. Lateral band walks. Hop bridges. And more squats. 
          No pain no gain right? But how about more gain? More gain with lower-body resistance bands from VELA.
          Along your fitness journey, sometimes you need a little push.
          VELA is that push that you’ll love, every squat along the way.
          </p>
          
        </div>
      </div>
    </div>
  </section>

  )
}

export default Brands