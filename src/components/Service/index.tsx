import router, { useRouter } from 'next/router';
import CardFeature from '../Card/card';
import MonitoringIcon from '../icon';
import CoachingIcon from '../icon/coaching';
import ContentIcon from '../icon/content';


const Service = (props: any) =>  {
  const router = useRouter()

  return (
    <div>
    <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-col xl:flex-row flex-col xl:mt-[20%] 2xl:mt-[20%] 4xl:mt-[28%] 3xl:mt-[8%]">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-4/5  flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
        <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal">
            Layanan <span className="font-bold text-darkblue-100">Digital Self-Care</span> <br/> Bagi <span className="font-bold text-darkblue-100">Diabetes Tipe 2</span>
        </h2>
        <hr className="h-px my-10 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem]">
          Misi kami adalah membuat pengelolaan diabetes menjadi mudah dan komprehensif. 
          Platform kami yang komprehensif dirancang untuk memberikan Anda dengan alat dan sumber daya yang Anda butuhkan untuk mengambil kendali 
          atas kesehatan Anda melalui saran gaya hidup. Dengan pemantauan yang mudah, pelatihan pribadi, dan saran yang tepat waktu, kami akan bersama Anda setiap langkah!
        </p>  
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-4/8 text-center justify-center flex pr-0">
        <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/3 px-6 sm:3/3 my-6">
              <CardFeature 
              title="Monitoring"
              icon={<MonitoringIcon/>}
              color="orange"
              description="Membuat kebiasaan self-care mudah dengan melacak dan memantau diabetes, wawasan dari data glukosa darah, semua catatan harian dalam database, dan pelacak makanan praktis."
              />
            </div>
            <div className="lg:w-1/3 px-6 my-6">
              <CardFeature 
                 title="Content"
                 color="purple"
                 icon={<ContentIcon/>}
                 description="Informasi dan sumber daya mudah diakses tentang pengelolaan diabetes, makan sehat, aktivitas fisik, dan lainnya, ramah pengguna, ukuran yang mudah diterima, dan mudah diakses."
              />
            </div>
            <div className="lg:w-1/3 px-6 my-6">
              <CardFeature 
                icon={<CoachingIcon/>}
                color="lightgreen"
                title="Coaching"
                description="Feedback dan dukungan pribadi dari pelatih kesehatan terlatih dan Diabetes Management Decision Support System milik kami, dengan opsi untuk pelatihan 1-on-1 dan virtual monitoring."
              />
            </div>
        </div>
      </div>
    </div>
  </div>
  
)};

export default Service
