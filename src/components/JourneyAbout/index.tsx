import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Slider from 'react-slick';
import MainNavbar from '../Navbar';

const JourneyAbout = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const settings: any = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 976,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
    ],
    beforeChange: (next: any) => {
      // here to detect slide change
      setIndex(next);
    },
    customPaging: (pagi: any) => {
      return (
        <div
          className={
            index === pagi
              ? 'mr-92 h-4 w-4 rounded-full bg-green-100 md:h-6 md:w-6'
              : 'mr-92 h-4 w-4 rounded-full border bg-gray-500 md:h-6 md:w-6'
          }
        ></div>
      );
    },
  };

  return (
    <div id="journey-about" className="mb-[8rem]">
      <div className="bg-[#F2F9FF]">
      <div className="absolute w-full " style={{zIndex: 10}}>
         <div className="block"> 
               <MainNavbar />
         </div>
      </div>
      <div className="h-32">

      </div>
      <div className="grid lg:grid-cols-2 gap-4 ">
          <div className="px-8 md:px-16 lg:pl-10 mxl:px-12 order-2 lg:order-1 xl:pl-24 3xl:pl-24">
                <h2 className="my-5 text-4xl font-normal text-darkblue-100 md:text-5xl lg:text-3xl xl:text-4xl mxl:text-[calc(5vh_-_1.5rem)] mmxl:my-0 mmxl:text-5xl xl:my-5 5xl:text-6xl">
                  Tentang {' '}
                  <span className="font-bold text-darkblue-100">
                   Loop
                  </span>
                </h2>
                <hr className="my-3 w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100" />
                <p
                  className="small-text xl:pr-22 xl:w-50 mb-8 mt-4 text-left text-base font-light leading-8 text-black 
                  sm:text-sm ssm:text-[1.5rem] md:text-[1.4rem] lg:text-base lg:leading-6 mxl:text-[0.9rem] mxl:leading-6 mmxl:mr-[1rem]
                  xl:mr-[0rem]
                  xl:text-[1.2rem]
                  xl:leading-8
                  xl:pr-8
                  3xl:pr-[10rem]
                  3xl:text-2xl
                  3xl:leading-10
                  5xl:text-3xl
                  5xl:leading-[3.5rem]
                  5xl:pr-[12rem]
                  ">
                 Loop adalah aplikasi manajemen diabetes yang dirancang oleh sekelompok individu yang terinspirasi untuk mengatasi kurangnya akses ke tutorial harian sederhana bagi orang yang hidup dengan diabetes. Platform kami yang mudah digunakan memberikan akses ke sumber daya, pelatihan personal, dan real-time feedback dari para ahli kesehatan untuk memudahkan pengelolaan diabetes
                </p>
          </div>
          <div className="order-1 lg:order-2 flex-col self-end justify-center" style={{zIndex: 1}}>
                 
            <div className="flex justify-center items-end">
               
            <img
                id="hero"
                className=""
                src={`${router.basePath}/assets/images/group-coach.webp`}
                alt=""
                style={{zIndex: 10}}
              />
             <img
                id="hero"
                className="
                hidden
                mxl:block
                mxl:absolute
                3xl:absolute
                md:top-0
                3xl:top-0
                right-0
                w-[55%]
                "
                style={{zIndex: -1}}
                src={`${router.basePath}/assets/images/elipse-orange.webp`}
                alt=""
              />
             <div style={{zIndex: 50,}} className="absolute
                        bg-white 
                        px-6
                        md:px-8
                        py-1
                        mb-2
                        md:mb-6
                        rounded-lg
                      ">
                        <div className="my-1 text-base font-semibold text-[#27275D] md:text-[1.5rem]">
                                Health Coach
                        </div>
                  </div>
            </div>
          </div>
         
      </div>
      </div>
      
      <div className="mx-auto mt-5 mb-[4em] px-8 pt-12 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-10 xl:pl-24 3xl:pl-24 xl:mt-16 mxl:mt-20 mxl:mb-[2em]">
        {/* Left Column */}
        <div className="mb-3">
          <h2 className="mb-5 text-4xl font-normal text-darkblue-100 md:text-5xl lg:text-3xl xl:text-4xl mxl:text-[calc(5vh_-_1.5rem)] mmxl:my-0 mmxl:text-5xl xl:my-5 5xl:text-6xl">
            Kami Memfasilitasi <br /> Konsultasi Bersama <br />
            <span className="font-bold text-darkblue-100">
              Coach Bersertifikat
            </span>
          </h2>
          <hr className="my-3 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100" />
          <p
            className="small-text xl:pr-22 xl:w-50 mb-8 mt-4 text-left text-base font-light leading-8 text-black 
        sm:text-sm ssm:text-[1.5rem] md:mr-12 md:text-[1.4rem] lg:text-base lg:leading-6 mxl:mr-[6rem] mxl:text-[0.9rem] mxl:leading-6 mmxl:mr-[1rem]
        xl:mr-[0rem]
        xl:text-[1.2rem]
        xl:leading-8
        xl:pr-14
        3xl:pr-[10rem]
        3xl:text-2xl
        3xl:leading-10
        5xl:text-3xl
        5xl:leading-[3.5rem]
        5xl:pr-[12rem]
        ">
            Loop menawarkan akses mudah ke Lifestyle Coach dan informasi praktis
            untuk membantu mengelola diabetes tipe 2, tanpa batasan ruang dan
            waktu. Struktur pelatihan kami yang kuat dan penggunaan data
            perilaku perawatan diri diabetes memungkinkan pelatihan yang
            konsisten dan standar dengan kontinuitas bagi pengguna kami.
          </p>
        </div>
        {/* Right Column */}
        <div className="w-100 w-full">
          <Slider {...settings}>
            <div className="px-8">
              <div className="rounded-3xl bg-lightgreen-100 px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 -mb-5"
                    src={`${router.basePath}/assets/images/ayunda.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded-3xl bg-[#E5F3FF] px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 mx-auto -mb-2"
                    src={`${router.basePath}/assets/images/vivi.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded-3xl bg-[#FEF5EF] px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 -mb-2"
                    src={`${router.basePath}/assets/images/savira.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded-3xl bg-[#E5F3FF] px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 -mb-2"
                    src={`${router.basePath}/assets/images/rahma.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded-3xl bg-[#E4F4F4] px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 -mb-2"
                    src={`${router.basePath}/assets/images/khoirunisa.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded-3xl bg-[#FEF5EF] px-2 pt-10 pb-2 shadow-md">
                <div>
                  <img
                    id="hero"
                    className="w-100 -mb-2"
                    src={`${router.basePath}/assets/images/thasya.webp`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="mx-auto px-8 pt-12 sm:px-8 md:px-16 lg:px-10 xl:pl-24 3xl:pl-24 mmxl:-mt-10 xl:mt-0 2xl:mt-14 3xl:mt-14 mmmxl:mt-20 3xxl:mt-[10rem] 5xl:mt-[15rem]">
        <div className="w-100 lg:pt-18 lg:pb-18 flex flex-col rounded-3xl bg-orange-100 px-8 py-10 lg:flex-row lg:px-20 mxl:px-14">
          {/* Left Column */}
          <div className="flex w-full pr-0 lg:w-3/6 xl:w-3/6">
            <div className="">
              <span className="text-left text-[50px] font-bold text-[#97C7F0] lg:text-[50px] mxl:text-[62px] mmxl:text-[72px]">
                VISI
              </span>
              <p className="lg:pr-18 text-base font-light md:text-[1.2rem] lg:text-base mxl:text-base xl:pr-20 xl:text-xl mxl:pr-8 mmxl:pr-10">
                Kami membayangkan sebuah dunia di mana orang Indonesia yang
                menderita diabetes dapat menjalani kehidupan yang penuh, bebas
                dari kekhawatiran, dan sesuai dengan kebutuhan individunya.
                Karena setiap orang ingin sehat.
              </p>
            </div>
          </div>
          <div className="lg:h-100 mt-7 lg:ml-10 lg:mr-6 lg:border-r-2 lg:border-orange-200 xl:h-[250px]"></div>
          <div className="xl:3/6 ml-0 w-full lg:ml-14 lg:w-3/6 xl:ml-20 xl:mb-14">
            <div className="">
              <h1 className="text-left text-[50px] font-bold text-orange-200 lg:text-[50px] mxl:text-[62px] mmxl:text-[72px]">
                MISI
              </h1>
              <p className="w-[100%] text-[1.2rem] font-light md:text-[1.2rem] lg:text-base mxl:text-base xl:w-[100%] xl:text-xl ">
                Loop memberdayakan orang-orang yang hidup dengan diabetes dengan
                cara yang mudah, personal, dan memberikan pengalaman yang
                positif, sehingga dapat membuat kehidupan sehari-hari menjadi
                lebih baik.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 pt-12 lg:px-10 xl:pl-24 3xl:pl-24 mb-[calc(100vw_+_8rem)] md:mb-[calc(150%_-_20em)] lg:mb-3">
        {/* Left Column */}
        <div className="mb-3  px-8 md:mb-12 md:px-12 lg:mb-0 lg:mt-28 lg:px-0 lg:text-left">
          <h2 className="my-5 text-4xl font-normal text-darkblue-100 md:text-5xl lg:text-3xl xl:text-4xl mmxl:-mt-[3rem] xl:-mt-[0rem]">
            Menuju{' '}
            <span className="font-bold text-darkblue-100">
              Perubahan Positif <br className="hidden mxl:block" />
              Bersama
            </span>{' '}
            Loop!
          </h2>
          <hr className="m-2 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100 mxl:my-3 mxl:mx-4" />
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
            Loop memahami, perjalanan menuju ke sana bukan tanpa rintangan.
            Namun bukan berarti mustahil. Melalui layanan digital Loop, pengguna
            akan merasakan pengalaman yang lebih menyenangkan dalam mengelola
            diabetes tipe-2 dengan pantauan para ahli.
          </p>
        </div>
        {/* Right Column */}
        <div className="pr-0 text-center">
          <img
            id="hero"
            className="
          hidden
          lg:block
          lg:absolute
          lg:right-0
          lg:bottom-[calc(100%_-_130rem)] lg:h-[50rem] mxl:absolute mxl:right-0 
          mxl:bottom-[calc(100%_-_135rem)] mxl:block mxl:h-[calc(100vw_-_10rem)] mmxl:absolute 
          mmxl:right-0 mmxl:bottom-[calc(100%_-_130rem)] mmxl:block mmxl:h-[calc(100vw_-_25rem)]
          mmmxl:right-0  mmmxl:bottom-[calc(100%_-_130rem)]  mmmxl:block mmmxl:h-[50rem] 
          xl:absolute xl:right-0 xl:bottom-[calc(100%_-_150rem)] xl:h-[calc(100vw_-_30rem)] 
          2xl:absolute 2xl:right-0 2xl:-bottom-[105rem] 2xl:h-[1550px] 
          xxl:absolute xxl:right-0 xxl:bottom-[calc(100%_-_150rem)] xxl:h-[60rem] 
          3xl:absolute 3xl:right-0 3xl:bottom-[calc(100%_-_155rem)] 3xl:h-[70rem] 
          3xxl:absolute 3xxl:right-0 3xxl:bottom-[calc(100%_-_160rem)] 3xxl:h-[70rem] 
          3xxxl:absolute 3xxxl:right-0 3xxxl:bottom-[calc(100%_-_100rem)] 3xxxl:h-[70rem] 
          4xl:absolute 4xl:right-0 4xl:bottom-[calc(100vw_-_215rem)]  4xl:h-[80rem] 
          5xl:right-0 5xl:bottom-[calc(100%_-_190rem)] 5xl:h-[70rem]
          "
            style={{ zIndex: -20}}
            src={`${router.basePath}/assets/images/mom-circle.webp`}
            alt=""
          />
          {/* <img
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
          src={`${router.basePath}/assets/images/journeyabout.webp`}
          alt=""
        /> */}

          <img
            id="hero"
            className="
          -mb-[9rem]
          absolute
          sm:h-[calc(100vw_+_10rem)]
          sm:w-[calc(100vw_-_0rem)]
          ssm:h-[100%] ssm:w-[100%]
          md:block
          md:w-[calc(100vw_-_0rem)]
          md:h-[calc(100vw_+_10rem)]
          lg:hidden
          mxl:hidden
          xl:hidden
          2xl:hidden
          3xl:hidden
          4xl:hidden
          5xl:hidden"
            style={{ zIndex: -20 }}
            src={`${router.basePath}/assets/images/journey-about2.webp`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyAbout;
