import { useRouter } from 'next/router';

const StartNow = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mx-auto flex flex-col px-0  pt-12 md:px-0 lg:flex-row lg:px-24 mxl:px-12 mmxl:px-24">
        {/* Left Column */}
        <div className="mb-3 flex flex-col px-8 md:mb-12 md:px-24 lg:mb-0 lg:w-2/3 lg:grow lg:items-start lg:text-left mxl:px-0 mmxl:-mt-[0%]">
          <h2
            className="my-5 text-left text-4xl font-normal text-darkblue-100
        ssm:text-5xl
        md:text-5xl
        lg:text-5xl
        mxl:text-3xl
        mmxl:text-4xl
        "
          >
            Mulai <span className="font-bold text-darkblue-100">Journey</span>{' '}
            Anda <br className="" /> Sekarang!
          </h2>
          <hr className="m-2 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100 md:my-10 md:mx-4 mxl:my-4 mxl:mx-2" />
          <p
            className="small-text xl:pr-22 xl:w-50 mb-8 mt-4 text-left text-base font-light leading-8 text-black 
        sm:text-sm ssm:text-[1.5rem] md:mr-12 md:text-[1.4rem] lg:mr-12 lg:text-xl mxl:mr-[6rem] mxl:text-[1rem] mxl:leading-6 mmxl:mr-[1rem]
        xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        3xl:pr-[10rem]
        3xl:text-2xl
        3xl:leading-10
        "
          >
            Kami hampir meluncurkan aplikasi kami. Beritahu kami{' '}
            <br className="hidden mmxl:block" />
            jika Anda ingin terhubung dengan kami!
          </p>
          <div className="mx-auto mt-10 -mb-[8rem] inline-block items-center justify-center space-x-0 sm:space-x-3 ssm:-mb-[10rem] md:space-x-2 lg:mx-0 lg:flex lg:space-x-8 mxl:mb-0 ">
            <button
              className="
          mb-4 
          inline-flex 
          rounded-2xl 
          bg-green-100 
          py-4 px-14 text-base font-semibold text-white hover:shadow-lg focus:outline-none ssm:text-2xl md:mb-0 lg:mb-0 mxl:text-base "
            >
              Register Now!
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex w-full justify-center pr-0 text-center lg:w-1/3"></div>

        <img
          id="hero"
          className="
          hidden
          md:hidden lg:absolute lg:right-0 lg:-bottom-[118rem] lg:block 
          lg:h-[65rem] mxl:absolute mxl:right-0 mxl:bottom-[calc(100%_-_138.5em)] mxl:block 
          mxl:h-[52rem] mmxl:absolute mmxl:right-0 mmxl:bottom-[calc(100%_-_129.5em)] mmxl:block 
          mmxl:h-[65rem] xl:absolute xl:right-0 xl:bottom-[calc(100%_-_186rem)] xl:block 
          xl:h-[65rem] 2xl:absolute 2xl:right-0 2xl:bottom-[calc(100%_-_196rem)] 2xl:block 
          2xl:h-[65rem] xxl:absolute xxl:right-0 xxl:bottom-[calc(100%_-_195rem)] xxl:block 
          xxl:h-[65rem] 3xl:absolute 3xl:right-0 3xl:bottom-[calc(100%_-_215rem)] 3xl:block
          3xl:h-[78rem] 3xxl:absolute 3xxl:right-0 3xxl:bottom-[calc(100%_-_211rem)] 3xxl:block
          3xxl:h-[82rem] 4xl:absolute 4xl:right-0 4xl:-bottom-[160rem] 4xl:block 
          4xl:h-[90rem] 5xl:absolute 5xl:right-0 5xl:bottom-[calc(100%_-_243rem)]
          4xl:h-[90rem]   
          "
          style={{ zIndex: -10 }}
          src={`${router.basePath}/assets/images/elips-orange-bottom.webp`}
          alt=""
        />
        <img
          id="hero"
          className={`
          hidden
          md:hidden
          lg:absolute lg:right-0 lg:-bottom-[110rem] lg:block lg:h-[43rem] 
          mxl:absolute mxl:right-0 mxl:bottom-[calc(100%_-_134em)] mxl:block mxl:h-[34rem] 
          mmxl:absolute mmxl:right-0 mmxl:bottom-[calc(100%_-_123em)] mmxl:block mmxl:h-[43rem] 
          xl:absolute xl:right-0 xl:bottom-[calc(100%_-_179rem)] xl:block xl:h-[43rem] 
          2xl:absolute 2xl:right-0 2xl:bottom-[calc(100%_-_188.5rem)] 2xl:block 2xl:h-[43rem] 
          xxl:absolute xxl:right-0 xxl:bottom-[calc(100%_-_186.5rem)] xxl:block xxl:h-[43rem] 
          3xl:absolute 3xl:right-0 3xl:bottom-[calc(100%_-_208rem)] 3xl:block 3xl:h-[55rem] 
          3xxl:absolute 3xxl:right-0 3xxl:bottom-[calc(100%_-_202rem)] 3xxl:block 3xxl:h-[55rem]
          4xl:absolute 4xl:right-0 4xl:-bottom-[150rem] 4xl:block 4xl:h-[60rem] 
          5xl:absolute 5xl:right-0 5xl:bottom-[calc(100%_-_232rem)] 5xl:block 3xxl:h-[55rem]
          `}
          style={{ zIndex: -10 }}
          src={`${router.basePath}/assets/images/device.webp`}
          alt=""
        />

        <img
          id="hero"
          className="
          -mb-[97%]
          block
          lg:hidden
          mxl:hidden
          mxl:h-[0rem]
          mxl:w-[0rem]
          xl:hidden
          2xl:hidden
          3xl:hidden
          4xl:hidden
          5xl:hidden"
          style={{ zIndex: -10 }}
          src={`${router.basePath}/assets/images/device-mobile.webp`}
          alt=""
        />
      </div>
    </div>
  );
};

export default StartNow;
