import React from 'react'
import Image from 'next/image'

const About = () => {
  const stories = [
    { id: 1,
      topic :"Inception:",
      description : "Embark on a journey with MyFitIndia as we trace our roots back to the passion for fitness and a commitment to promoting a healthy lifestyle. Our story begins with a shared vision of creating a platform that not only offers top-notch fitness products but also inspires individuals to embrace wellness as a way of life."
    },
    { id: 2,
      topic :"Commitment to Quality:",
      description : "At the core of our story is an unwavering commitment to quality. From the careful curation of our product range to the seamless online shopping experience we provide, every aspect is a testament to our dedication. We believe that quality is not just a standard but a promise to our customers, fostering trust and building lasting relationships"
    },
    { id: 3,
      topic :"Empowering Wellness:",
      description : "MyFitIndia's narrative is woven with the threads of empowerment and wellness.Our story unfolds as a celebration of individuals achieving their fitness goals, breaking boundaries, and embracing a healthier version of themselves. Join us in this empowering journey whereevery purchase contributes to a community dedicated to fostering a culture of well-being and vitality."
    }
  ]
  return (
    <section className="section__container about__container" id="about">
    <div className="about__image">
      <Image className="about__bg" src="/assets/dot-bg.png" alt="bg" width={300} height={50} />
      <Image src="/assets/about.png" alt="bg" width={400} height={50} />
    </div>
    <div className="about__content">
      <h2 className="section__header">Our Story</h2>
      
      <div className="about__grid">
        <div className="about__card">
          {stories.map( story => 
            <div key={story.id}>
            <h4>{story.topic}</h4>
            <p>{story.description}</p>
          </div>
          )}
        </div>
      </div>
    </div> 
  </section>
  )
}

export default About