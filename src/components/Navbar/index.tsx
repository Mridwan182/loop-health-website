import router, { useRouter } from 'next/router';


const MainNavbar = (props: any) =>  {
  const router = useRouter()

  return (
    <header>
    <div className="mx-auto flex py-8 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
       <a href="/">
        <img 
           className="h-12"
           src={`${router.basePath}/assets/logo/logo.webp`}
           alt="" />
       </a>
       <div className="flex mr-0 lg:hidden cursor-pointer">
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
        <div className="bg-black fixed w-full hidden h-full top-0 left-0 z-30 bg-opacity-60"></div>
        <nav className="navigation lg:mr-auto hidden lg:flex flex-col text-base justify-center z-50 fixed top-8 left-12 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start">
                <a href="#">
                  <img
                    className="m-0 lg:hidden mb-3 h-8"
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
                  className="nav-text text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active text-black"
                  href="/about-us"
                >
                  Tentang Loop
                </a>
              
                <div className="flex items-center justify-end w-full lg:hidden mt-3">
                  <button className="text-black font-light py-3 px-8 focus:outline-none">
                    Log In
                  </button>
                  <button className="btn-try text-white text-lg py-3 px-8 rounded-xl focus:outline-none hover:shadow-lg font-semibold">
                    Try Now
                  </button>
                </div>
                <svg
                  className="w-6 h-6 absolute top-4 right-4 lg:hidden cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
              <button className="inline-flex text-xl focus:outline-none bg-green-100 text-white font-bold rounded-2xl 3xl:px-16 3xl:py-4 2xl:px-20 2xl:py-3 xl:px-16 xl:py-3  lg:px-12 lg:py-3">
                Request Demo
              </button>
            </div>
    </div>
 </header>
)};

export default MainNavbar
