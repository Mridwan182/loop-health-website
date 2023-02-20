import router, { useRouter } from 'next/router';


const Journey = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
        <h2 className="my-5 text-5xl text-darkblue-100 font-normal">
            <span className="font-bold text-darkblue-100">Journey</span> Mereka <br/> Bersama Kami!
        </h2>
        <hr className="h-px my-3 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-24 xl:w-50 sm:text-sm text-black">
        Pengguna kami melihat hasil luar biasa dalam pengelolaan diabetes 
        & kesehatan. Loop menyediakan alat & sumber daya untuk membantu capai tujuan kesehatan. 
        Bergabung dengan komunitas kami untuk hidup lebih berdaya & sehat dengan Loop!
        </p>
       
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 text-center justify-center flex pr-0">
        <img
          id="hero"
          // src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"
          alt=""
        />
      </div>
    </div>
  </div>
  
)};

export default Journey
