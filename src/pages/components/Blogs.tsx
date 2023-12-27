import React from 'react'
import Image from 'next/image'

const Blogs = () => {

  const blog = [
    {
      id: 1,
      image: "/assets/class-1.jpg",
      topic: "Puma Training",
      description: "Forms of physical activity which Puma can Support",
      date: "Posted on August 21, 2023"
    },
    {
      id: 2,
      image: "/assets/class-2.jpg",
      topic: "sports",
      description: "Sport' means all forms of physical activity which, through casual or organised participatio",
      date: "Posted on August 4, 2023"
    },
    {
      id: 3,
      image: "/assets/class-3.jpg",
      topic: "OUTDOOR VOICES",
      description: "Outdoor Voices is an American activewear brand that was founded in 2013 by Tyler Haney.",
      date: "Posted on August 2, 2023"
    },
  ]

  return (
    <div className='flex flex-col items-center' id='blogs'>
      <h2 className="section__header">Blogs</h2>
    <p className="section__description text-center">
      Our Brands are more than just experts in exercise; they are passionate
      about helping you achieve your health and fitness goals. Our trainers
      are equipped to tailor workout programs to meet your unique needs.
    </p>
      <div className='flex justify-around gap-5 flex-wrap py-5'>
      {
        blog.map(
          blogs =>
            <div key={blogs.id} className="card">
              <div className="bg p-2">
                <Image src={blogs.image} alt='image' height={100} width={150} />
                <h1 className='text-blue-700 font-bold text-2xl'>{blogs.topic}</h1>
                <p className='py-2'>{blogs.description}</p>
                <p className='text-slate-500'>{blogs.date}</p>
              </div><div className="blob"></div>
            </div>
        )
      }
    </div>
    </div>
  )
}

export default Blogs