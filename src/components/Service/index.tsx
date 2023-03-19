import CardFeature from '../Card/card';
import MonitoringIcon from '../icon';
import CoachingIcon from '../icon/coaching';
import ContentIcon from '../icon/content';

const Service = () => {
  return (
    <div>
      <div
        className="mx-auto flex flex-col px-8 py-12 sm:px-8 md:px-16 lg:flex-col lg:px-10 lg:pb-20 mxl:flex-col mxl:px-12 mmxl:flex-row mmxl:px-24 xl:mt-[6rem] xl:flex-row 
    2xl:mt-[20%]
    3xl:mt-[8%]
    4xl:mt-[28%]"
      >
        {/* Left Column */}
        <div className="mxl:w-2/2  mb-3 flex flex-col text-center md:mb-12 lg:mb-0 lg:w-4/5 lg:grow lg:items-start lg:text-left mmxl:w-2/6 xl:w-3/6">
          <h2
            className="my-5 text-left text-4xl font-normal text-darkblue-100
            ssm:text-5xl
            md:text-5xl lg:text-3xl xl:text-4xl
            mxl:text-3xl
            mmxl:text-4xl
        "
          >
            Layanan{' '}
            <span className="font-bold text-darkblue-100">
              Digital Self-Care
            </span>{' '}
            <br className="hidden lg:block xl:block" /> Bagi{' '}
            <span className="font-bold text-darkblue-100">
              Diabetes <br className="hidden mmxl:block xl:hidden" /> Tipe 2
            </span>
          </h2>
          <hr className="m-2 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100 md:my-10 lg:my-4 md:mx-4 mxl:my-4 mxl:mx-2" />
          <p
            className="small-text xl:pr-22 xl:w-50 mb-8 mt-4 text-left text-base font-light leading-8 text-black 
        sm:text-sm ssm:text-[1.5rem] md:mr-12 md:text-[1.4rem] lg:text-base lg:leading-6 mxl:mr-[6rem] mxl:text-[1rem] mxl:leading-6 mmxl:mr-[1rem]
        xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        3xl:pr-[10rem]
        3xl:text-2xl
        3xl:leading-10
        "
          >
            Misi kami adalah membuat pengelolaan diabetes menjadi mudah dan
            komprehensif. Platform kami yang komprehensif dirancang untuk
            memberikan Anda dengan alat dan sumber daya yang Anda butuhkan untuk
            mengambil kendali atas kesehatan Anda melalui saran gaya hidup.
            Dengan pemantauan yang mudah, pelatihan pribadi, dan saran yang
            tepat waktu, kami akan bersama Anda setiap langkah!
          </p>
        </div>
        {/* Right Column */}
        <div className="mxl:w-2/2 lg:w-4/8 flex w-full justify-center pr-0 text-center mmxl:w-4/6 mmxl:pl-[2rem] xl:w-5/6">
          <div className="flex flex-col lg:flex-row">
            <div className="sm:3/3 my-6 px-6 lg:w-1/3 mxl:px-3">
              <CardFeature
                title="Monitoring"
                icon={<MonitoringIcon />}
                color="orange"
                description="Membuat kebiasaan self-care mudah dengan melacak dan memantau diabetes, wawasan dari data glukosa darah, semua catatan harian dalam database, dan pelacak makanan praktis."
              />
            </div>
            <div className="my-6 px-6 lg:w-1/3 mxl:px-3">
              <CardFeature
                title="Content"
                color="purple"
                icon={<ContentIcon />}
                description="Informasi dan sumber daya mudah diakses tentang pengelolaan diabetes, makan sehat, aktivitas fisik, dan lainnya, ramah pengguna, ukuran yang mudah diterima, dan mudah diakses."
              />
            </div>
            <div className="my-6 px-6 lg:w-1/3 mxl:px-3">
              <CardFeature
                icon={<CoachingIcon />}
                color="lightgreen"
                title="Coaching"
                description="Feedback dan dukungan pribadi dari pelatih kesehatan terlatih dan Diabetes Management Decision Support System milik kami, dengan opsi untuk pelatihan 1-on-1 dan virtual monitoring."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
