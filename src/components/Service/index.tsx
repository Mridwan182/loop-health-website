import router, { useRouter } from 'next/router';


const Service = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
        <h2 className="my-5 text-5xl text-darkblue-100 font-normal">
            Layanan <span className="font-bold text-darkblue-100">Digital Self-Care</span> <br/> Bagi <span className="font-bold text-darkblue-100">Diabetes Tipe 2</span>
        </h2>
        <hr className="h-px my-3 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 xl:w-50 sm:text-sm text-black">
        Misi kami adalah membuat pengelolaan diabetes menjadi mudah dan komprehensif. 
        Platform kami yang komprehensif dirancang untuk memberikan Anda dengan alat dan sumber daya yang Anda butuhkan untuk mengambil kendali 
        atas kesehatan Anda melalui saran gaya hidup. Dengan pemantauan yang mudah, pelatihan pribadi, dan saran yang tepat waktu, kami akan bersama Anda setiap langkah!
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

export default Service
