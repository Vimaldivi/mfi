import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

function Navbar() {
  const [navbar, setNavbar] = useState(false);


  const path = usePathname();

  let navigation = [
    { title: "About Us", link: "#home" },
    { title: "Our Story", link: "#about" },
    { title: "Our Brands", link: "#brands" },
    { title: "Blogs", link: "#blogs" },
  ];
  return (
    <header>
      <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-50">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:py-5 md:block">
              <Link href="/">
                <Image
                  src={"/assets/logo.png"}
                  alt="techbees-logo"
                  width={200}
                  height={200}
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-x-lg fill-zinc-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-list fill-zinc-600"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? " md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center text-zinc-600 justify-center md:flex font-bold">
                {navigation?.map((v, i) => (
                  <li
                    key={i + "NAV"}
                    className=" text-base text-zinc-600 md:px-6 text-center border-b-2 md:border-b-0 lg:hover:text-primary  md:hover:bg-transparent"
                  >
                    <Link
                      className={`${
                        v.link === path
                          ? "text-primary border-b-2 pb-2 border-b-primary"
                          : ""
                      }`}
                      href={v?.link}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {v?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar




// import React from 'react'
// import Image from 'next/image'

// const NavBar = () => {

//     return (
//         <div>
//             <nav className='fixed p-3  left-0 right-0 z-10 bg-white bg-opacity-90'>
//                 <div className="nav__header fixed p-3  left-0 right-0 z-10 bg-white bg-opacity-90">
//                     <div className="nav__logo">
//                         <a href="/">
//                             <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
//                         </a>
//                     </div>
//                     <div className="nav__menu__btn" id="menu-btn">
//                         <span><i className="ri-menu-line"></i></span>
//                     </div>
//                 </div>
//                 <ul className="nav__links" id="nav-links">
//                     <li className="link"><a href="#home">Home</a></li>
//                     <li className="link"><a href="#about">About</a></li>
//                     <li className="link"><a href="#className">Brands</a></li>
//                     <li className="link"><a href="#price">Blogs</a></li>
//                     <li className="link"><a href="https://stage.myfitindia.com/signup"><button className="btn">Register</button></a></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default NavBar