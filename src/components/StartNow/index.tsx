import router, { useRouter } from 'next/router';


const StartNow = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-2/3 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center lg:mt-28">
        <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal">
            Mulai <span className="font-bold text-darkblue-100">Journey</span> Anda <br/> Sekarang! 
        </h2>
        <hr className="h-px my-3 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-28 xl:w-50 sm:text-sm text-black lg:w-3/4 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem]">
        Kami hampir meluncurkan aplikasi kami. Beritahu kami <br/>jika Anda ingin terhubung dengan kami!
        </p>
        <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0 mt-10">
          <button className="btn-fill inline-flex font-semibold text-white text-base py-4 px-14 rounded-2xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-green-100">
             Register Now!
          </button>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/3 text-center justify-center flex pr-0">
        
      <img
          id="hero"
          className="
          hidden
          mxl:hidden
          md:hidden
          lg:block lg:absolute lg:right-0 lg:h-[1200px] lg:-bottom-[168rem] 
          xl:block xl:absolute xl:right-0 xl:h-[1200px] xl:-bottom-[165rem] 
          3xl:block 3xl:absolute 3xl:right-0 3xl:h-[1550px] 3xl:-bottom-[170rem] 
          4xl:block 4xl:absolute 4xl:right-0 4xl:h-[1600px] 4xl:-bottom-[180rem] 
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
          mxl:hidden
          md:hidden
          lg:block lg:absolute lg:right-0 lg:h-[800px] lg:-bottom-[148rem] 
          xl:block xl:absolute xl:right-0 xl:h-[800px] xl:-bottom-[159rem] 
          2xl:block 2xl:absolute 2xl:right-0 2xl:h-[800px] 2xl:-bottom-[147rem] 
          3xl:block 3xl:absolute 3xl:right-0 3xl:h-[1000px] 3xl:-bottom-[159rem] 
          4xl:block 4xl:absolute 4xl:right-0 4xl:h-[1000px] 4xl:-bottom-[168rem] 
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
          sm:h-[50%] sm:w-[50%]
          md:h-[50%] md:w-[50%]
          mxl:block mxl:h-[100%] mxl:w-[100%]
          lg:hidden
          xl:hidden
          2xl:hidden
          3xl:hidden
          4xl:hidden
          5xl:hidden"
          style={{zIndex: -10}}
          src={`${router.basePath}/assets/images/app.webp`}
          alt=""
        />
        
      </div>
    </div>
  </div>
)};

export default StartNow
