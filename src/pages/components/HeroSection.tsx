import React from 'react'
import Image from 'next/image'


const HeroSection = () => {

    const data = [
        {
            image: "/assets/header.png",
            head_1: "Build Your Body &",
            head_2: "Buy for you!",
            description: "Experience a fitness revolution by purchasing our top-quality products from MyFitIndia. Elevate your workout routine with premium gear and accessories designed to enhance performance and style. From cutting-edge fitness technology to stylish activewear, we offer a curated selection to meet all your health and wellness needs. Shop with confidence at MyFitIndia, where quality meets innovation, and embark on a journey to a healthier and fitter you. Elevate your fitness game - purchase your essentials today and embrace a lifestyle of well-being with MyFitIndia."
        }
    ]

    return (
        <div>
            <header className="header py-20">
                
                {
                    data.map(
                        datum => <div className="section__container header__container" id="home">
                            <div className="header__image">
                                <Image src={datum.image} alt="header" width={400} height={400} />
                            </div>
                            <div className="header__content">
                                <h4>{datum.head_1}</h4>
                                <h1 className="section__header">{datum.head_2}</h1>
                                <p>{datum.description}</p>
                                <div className="header__btn">
                                    <a href="https://stage.myfitindia.com/"><button className="btn">Explore Now</button></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </header>
        </div>
    )
}

export default HeroSection