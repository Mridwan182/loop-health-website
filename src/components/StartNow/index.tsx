import router, { useRouter } from 'next/router';


const StartNow = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 lg:px-24  lg:flex-row flex-col px-0 md:px-0 mxl:px-12 mmxl:px-24">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-2/3 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 px-8 mxl:px-0 md:px-24">
      <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal
        mxl:text-3xl
        mmxl:text-4xl
        text-left
        ssm:text-5xl
        md:text-5xl
        ">
            Mulai <span className="font-bold text-darkblue-100">Journey</span> Anda <br className=""/> Sekarang! 
        </h2>
        <hr className="h-px my-2 mx-2 md:my-10 md:mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6 mxl:my-4 mxl:mx-2"/>
        <p className="small-text mb-8 mt-4 leading-8 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 
        xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem] mxl:text-[1rem] mxl:leading-6 mxl:mr-[6rem] mmxl:mr-[1rem] xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        text-base
        text-left
        ssm:text-[1.5rem]
        md:text-[1.4rem]
        ">
        Kami hampir meluncurkan aplikasi kami. Beritahu kami <br className="hidden mmxl:block"/>jika Anda ingin terhubung dengan kami!
        </p>
        <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0 mt-10 -mb-[8rem] ssm:-mb-[10rem] mxl:mb-0 ">
          <button className="btn-fill 
          inline-flex 
          font-semibold 
          text-white 
          text-base 
          py-4 px-14 rounded-2xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-green-100 ssm:text-2xl mxl:text-base ">
             Register Now!
          </button>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/3 text-center justify-center flex pr-0">
        
    
        
      </div>

      
      <img
          id="hero"
          className="
          hidden
          md:hidden
          mxl:block mxl:absolute mxl:right-0 mxl:h-[52rem] mxl:-bottom-[115rem] 
          mmxl:block mmxl:absolute mmxl:right-0 mmxl:h-[65rem] mmxl:-bottom-[108rem] 
          lg:block lg:absolute lg:right-0 lg:h-[65rem] lg:-bottom-[118rem] 
          xl:block xl:absolute xl:right-0 xl:h-[65rem] xl:-bottom-[145rem] 
          xxl:block xxl:absolute xxl:right-0 xxl:h-[65rem] xxl:-bottom-[140rem] 
          3xl:block 3xl:absolute 3xl:right-0 3xl:h-[90rem] 3xl:-bottom-[150rem] 
          4xl:block 4xl:absolute 4xl:right-0 4xl:h-[90rem] 4xl:-bottom-[160rem] 
          5xl:bloxk 5xl:right-0 5xl:h-[1600px] 5xl:-bottom-[190rem] 
          "
          style={{zIndex: -10}}
          src={`${router.basePath}/assets/images/elips-orange-bottom.webp`}
          alt=""
        />
        <img
          id="hero"
          className="
          hidden
          md:hidden
          mxl:block mxl:absolute mxl:right-0 mxl:h-[34rem] mxl:-bottom-[109rem] 
          mmxl:block mmxl:absolute mmxl:right-0 mmxl:h-[43rem] mmxl:-bottom-[100rem] 
          lg:block lg:absolute lg:right-0 lg:h-[43rem] lg:-bottom-[110rem] 
          xl:block xl:absolute xl:right-0 xl:h-[43rem] xl:-bottom-[137rem] 
          xxl:block xxl:absolute xxl:right-0 xxl:h-[43rem] xxl:-bottom-[131rem] 
          2xl:block 2xl:absolute 2xl:right-0 2xl:h-[43rem] 2xl:-bottom-[124rem] 
          3xl:block 3xl:absolute 3xl:right-0 3xl:h-[60rem] 3xl:-bottom-[140rem] 
          4xl:block 4xl:absolute 4xl:right-0 4xl:h-[60rem] 4xl:-bottom-[150rem] 
          5xl:bloxk 5xl:right-0 5xl:h-[1000px] 5xl:-bottom-[177rem] 
          "
          style={{zIndex: -10}}
          src={`${router.basePath}/assets/images/device.webp`}
          alt=""
        />

   
        <img
          id="hero"
          className="
          block
          -mb-[97%]
          mxl:h-[0rem]
          mxl:w-[0rem]
          mxl:hidden
          lg:hidden
          xl:hidden
          mxl:hidden
          2xl:hidden
          3xl:hidden
          4xl:hidden
          5xl:hidden"
          style={{zIndex: -10}}
          src={`${router.basePath}/assets/images/device-mobile.webp`}
          alt=""
        />
    </div>
  </div>
)};

export default StartNow
