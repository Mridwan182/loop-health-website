import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mx-auto flex flex-col px-8 pt-12 pb-16 sm:px-8 md:px-16 lg:flex-row lg:px-10 lg:pb-20 mxl:px-12 mmxl:px-24">
        {/* Left Column */}

        <div className="flex w-full justify-center pr-0 text-center md:hidden lg:w-1/2">
          <div className="">
            <img
              id="hero"
              className="top-[6px] text-center lg:h-[85%] lg:w-[100%] xl:absolute xl:top-[2%] xl:right-3 xl:h-[90%] xl:w-[55%] 2xl:absolute 2xl:right-4 2xl:h-[80%] 2xl:w-[45%] 3xl:absolute 3xl:right-24"
              style={{ zIndex: -12 }}
              src={`${router.basePath}/assets/images/hero-content.webp`}
              alt=""
            />
          </div>
        </div>
        <div className="mb-3 mt-10 flex flex-col text-left md:mb-12 md:mt-0 lg:mb-0 lg:w-1/2  lg:grow lg:items-start lg:text-left ">
          <h2 className="text-my-5 text-4xl font-normal text-darkblue-100 ssm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl mxl:text-3xl mmxl:text-4xl">
            <span className="font-bold text-darkblue-100">Your</span> Everyday <br className="hidden mxl:block mmxl:hidden"/>
            Diabetes <span className="font-bold text-darkblue-100">Coach</span>
          </h2>
          <hr className="m-2 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100 md:my-10 lg:my-4 md:mx-4 mxl:my-4 mxl:mx-2" />
          <p
            className="small-text 
        mmxl:mr-30
        mb-8
        mt-4 text-[1.3rem] font-light leading-8 text-black sm:text-xs ssm:text-[1.5rem] md:mr-12
        md:text-[1.4rem] lg:text-base lg:leading-6 mxl:text-[1rem] mxl:leading-6 mmxl:text-[1rem] mmxl:leading-7 xl:mr-28 xl:w-[80%] xl:pr-6 xl:text-[1.4rem] 3xl:pr-[10rem] 3xl:text-2xl 3xl:leading-10"
          >
            Di Loop, kami percaya dalam memberikan kekuatan kepada orang untuk
            membuat perubahan positif yang berlangsung lama dalam kesehatan
            mereka melalui modifikasi perilaku dan gaya hidup. Kami bangga
            menjadi mitra dalam perjalanan ini dan berkomitmen untuk membantu
            klien kami mencapai peningkatan kesehatan nyata dan penghematan
            biaya melalui program virtual care kami.
          </p>
          <div className="inline-block space-x-0 sm:space-x-3 md:mx-auto md:items-center md:justify-center md:space-x-2 lg:mx-0 lg:flex lg:space-x-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              className="btn-fill 
                  mb-4 mt-5 inline-flex 
                  rounded-2xl 
                  bg-green-100
                  py-4 px-16 text-[1.2rem] font-bold text-white hover:shadow-lg focus:outline-none md:mb-0 lg:mb-0"
              rel="noreferrer"
            >
              Request Demo
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="hidden w-full justify-center pr-0 text-center md:block lg:w-1/2">
          <div className="">
            <img
              id="hero"
              className="top-[6px] 
              text-center 
              lg:h-[85%] 
              lg:w-[100%] 
              mxl:absolute
              mxl:top-[4rem]
              mxl:right-[1.8rem] 
              mxl:h-[34rem] 
              mxl:w-[34rem] 
              mmxl:absolute 
              mmxl:top-[4rem] 
              mmxl:h-[38rem] 
              mmxl:w-[38rem] xl:absolute 
              xl:top-[2rem] 
              xl:right-[4rem] 
              xl:h-[44rem]
              xl:w-[44rem]
              2xl:absolute
              2xl:right-4
              xl:h-[45rem]
              xl:w-[45rem]
              2xl:h-[50rem]
              2xl:w-[50rem]
              3xl:absolute
              3xl:right-24
              3xxl:h-[55rem]
              3xxl:w-[55rem]
              "
              style={{ zIndex: -12 }}
              src={`${router.basePath}/assets/images/hero-content.webp`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
