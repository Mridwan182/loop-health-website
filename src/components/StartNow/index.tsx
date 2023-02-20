import router, { useRouter } from 'next/router';


const StartNow = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-2/3 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center lg:mt-28">
        <h2 className="my-5 text-5xl text-darkblue-100 font-normal">
            Mulai <span className="font-bold text-darkblue-100">Journey</span> Anda <br/> Sekarang! 
        </h2>
        <hr className="h-px my-3 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-28 xl:w-50 sm:text-sm text-black lg:w-3/4">
        Kami hampir meluncurkan aplikasi kami. Beritahu kami jika Anda ingin terhubung dengan kami!
        </p>
        <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
          <button className="btn-fill inline-flex font-semibold text-white text-base py-4 px-14 rounded-2xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-green-100">
            Request Demo
          </button>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/3 text-center justify-center flex pr-0">
        <img
          id="hero"
          className="w-[500px] h-100"
          src={`${router.basePath}/assets/images/app.webp`}
          alt=""
        />
      </div>
    </div>
  </div>
  
)};

export default StartNow
