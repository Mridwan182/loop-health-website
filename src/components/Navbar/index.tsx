import router, { useRouter } from 'next/router';
import React, { useState } from 'react';


const MainNavbar = (props: any) =>  {
  const router = useRouter()
  const [show, setShow] = useState(false)

  return (
    <header>
    <div className="mx-auto flex py-8 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
       <a href="/">
        <img 
           className="h-12"
           src={`${router.basePath}/assets/logo/logo.webp`}
           alt="" />
       </a>
       <div className="flex mr-0 lg:hidden cursor-pointer" onClick={() => setShow(!show)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div  className={show ? "block bg-black fixed w-full h-full top-0 left-0 z-30 bg-opacity-60" : "hidden bg-black fixed w-full h-full top-0 left-0 z-30 bg-opacity-60" }
            onClick={() => setShow(!show)}></div>
        <nav className={show ? "flex navigation lg:mr-auto lg:flex flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start" : "hidden navigation lg:mr-auto hidden lg:flex flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start"}>
                <a href="#">
                  <img
                    className="m-0 lg:hidden mb-3 h-10"
                    src={`${router.basePath}/assets/logo/logo.webp`}
                    alt=""
                  />
                </a>
                {/* <a
                  className="nav-text text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active text-black"
                  href="/about"
                >
                  Pengalaman Dari Loop
                </a> */}
                <a
                  className="nav-text text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active text-black hover:text-lightgreen-200"
                  href="/about-us"
                >
                  Tentang Loop
                </a>
              
                <div className="w-full lg:hidden mt-3">
                  <div className="w-full">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank" className="inline-flex text-xl focus:outline-none bg-green-100 text-white font-bold rounded-lg text-center px-6 py-2 w-[100%] justify-center">
                Request Demo
              </a>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 absolute top-4 right-4 lg:hidden cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setShow(!show)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </nav>
              <div className="hidden lg:inline-flex">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank" className="inline-flex text-xl focus:outline-none bg-green-100 text-white font-bold rounded-2xl 3xl:px-16 3xl:py-4 2xl:px-20 2xl:py-3 xl:px-16 xl:py-3  lg:px-12 lg:py-3">
                Request Demo
              </a>
            </div>
    </div>
 </header>
)};

export default MainNavbar
