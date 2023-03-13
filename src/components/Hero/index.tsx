import router, { useRouter } from 'next/router';


const Hero = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 pb-16 lg:pb-20 mxl:px-12 mmxl:px-24 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      {/* Left Column */}

      <div className="w-full lg:w-1/2 text-center justify-center flex pr-0 block md:hidden">
        <div className="">
            <img
              id="hero"
              className="lg:h-[85%] lg:w-[100%] xl:h-[90%] xl:w-[55%] 2xl:h-[80%] 2xl:w-[45%] xl:w-4/6 xl:absolute 2xl:absolute 3xl:absolute xl:top-[2%] top-[6px] xl:right-3 2xl:right-4 3xl:right-24 text-center" 
              style={{zIndex: -12}}
              src={`${router.basePath}/assets/images/hero-content.webp`}
              alt=""
            />
        </div>
      </div>
      <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0  text-left mt-10 md:mt-0 ">
        <h2 className="text-my-5 lg:text-5xl text-4xl ssm:text-5xl text-darkblue-100 font-normal mmxl:text-4xl mxl:text-3xl md:text-5xl">
              <span className="font-bold text-darkblue-100">Your</span> Everyday Diabetes <span className="font-bold text-darkblue-100">Coach</span>
        </h2>
        <hr className="h-px my-2 mx-2 md:my-10 md:mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6 mxl:my-4 mxl:mx-2"/>
        <p className="small-text 
        text-[1.3rem]
        font-light
        mb-8 mt-4 leading-8 lg:leading-9 font-light lg:text-2xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-6 xl:w-[80%] 
        sm:text-xs md:text-xs text-base ssm:text-[1.5rem] text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem] mmxl:text-[1rem] mmxl:leading-7 mmxl:mr-30 mxl:text-[1rem] mxl:leading-6 md:text-[1.4rem] xl:text-[1.4rem]">
            Di Loop, kami percaya dalam memberikan kekuatan kepada orang untuk membuat perubahan positif 
            yang berlangsung lama dalam kesehatan mereka melalui modifikasi perilaku dan gaya hidup. 
            Kami bangga menjadi mitra dalam perjalanan ini dan berkomitmen untuk membantu klien kami 
            mencapai peningkatan kesehatan nyata dan penghematan biaya melalui program virtual care kami.
        </p>
        <div className="inline-block md:items-center md:mx-auto lg:mx-0 lg:flex md:justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank" className="btn-fill 
          inline-flex font-bold text-white 
          text-base 
          py-4
          px-16 rounded-2xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-green-100 text-[1.2rem] mt-5">
            Request Demo
          </a>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 text-center justify-center flex pr-0 hidden md:block">
        <div className="">
            <img
              id="hero"
              className="lg:h-[85%] 
              lg:w-[100%] 
              xl:h-[44rem] 
              xl:w-[44rem] 
              xl:top-[2rem]
              xl:right-[4rem]
              2xl:h-[80%] 
              2xl:w-[45%] 
              xl:w-4/6 
              xl:absolute 
              2xl:absolute 
              3xl:absolute 
              xl:top-[2%] top-[6px] 
              xl:right-3 2xl:right-4 
              3xl:right-24 text-center
              mmxl:absolute
              mmxl:w-[38rem]
              mmxl:h-[38rem]
              mmxl:top-[4rem]
              mxl:absolute
              mxl:w-[34rem]
              mxl:h-[34rem]
              mxl:top-[4rem]
              mxl:right-[1.8rem]
              " 
              style={{zIndex: -12}}
              src={`${router.basePath}/assets/images/hero-content.webp`}
              alt=""
            />
        </div>
      </div>
    </div>
  </div>
  
)};

export default Hero
