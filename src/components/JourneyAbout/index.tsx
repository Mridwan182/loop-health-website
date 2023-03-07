import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import Slider from 'react-slick';
import StartNow from '../StartNow';


const JourneyAbout = (props: any) =>  {
  const router = useRouter()
  const [index, setIndex] =  useState(0)

  const settings : any = {
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
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true }
      }
    ],
    beforeChange: (prev: any, next: any) => {   // here to detect slide change
      setIndex(next);
    },
    customPaging: (pagi:any, i : any) => {
    
      return (
        <div className={index == pagi ? "bg-green-100 h-4 w-4 md:w-6 md:h-6 rounded-full mr-92" : "bg-gray-500 h-4 w-4 md:w-6 md:h-6 rounded-full border mr-92"}>

        </div>
      );
    }
  }

  return (
    <div id="journey-about">
       <div className="mx-auto flex px-0 pt-12 lg:px-24 md:px-16 sm:px-8 md:px-8 mxl:px-12 mmxl:px-24 mxl:pb-[1.5rem] lg:flex-row flex-col mb-[0.5em] bg-[#F2F9FF] lg:absolute top-0" style={{zIndex: -10}}>
      {/* Left Column */}

      <div className="w-full lg:w-[55%] w-100 xl:w-[60%] text-center justify-center pr-0 block mxl:hidden">
        <img
        id="hero"
        className="w-100 xl:absolute xl:h-[600px] xl:bottom-0 xl:right-0 h-[18rem] md:w-[100%] md:h-[400px]"
        src={`${router.basePath}/assets/images/group-coach.webp`}
        alt=""
        />
          <button className="
                  absolute 
                  md:top-[30rem]
                  top-[23.5rem]
                  focus:outline-none bg-white text-[#27275D] font-bold rounded-xl 
                  text-center
                  right-[25%]
                  left-[25%]
                  py-4
                  w-100
                  ">
             Health Coach
      </button>
      </div>

      <div className="lg:flex-grow lg:w-1/6 mxl:w-2/6 flex flex-col lg:text-left mb-3 md:mb-12 lg:mb-0 lg:py-[6%] px-8 mxl:px-0 mmxl:w-[20%] xl:w-[50%]">
        <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal">
        Tentang <span className="font-bold text-darkblue-100">Loop</span>
        </h2>
        <hr className="h-px my-2 mx-2 md:my-3 md:mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6 mxl:my-2"/>
        <p className="small-text mb-8 mt-4 leading-8 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 
        xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem] mxl:text-[1rem] mxl:leading-6 mxl:mr-[2rem] mmxl:mr-[1rem] xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        text-base
        text-left
        ssm:text-[1.5rem]
        md:text-[1.4rem]    
        ">
          Loop adalah aplikasi manajemen diabetes yang dirancang oleh sekelompok individu yang terinspirasi untuk mengatasi kurangnya akses ke tutorial harian sederhana bagi orang yang hidup dengan diabetes. Platform kami yang mudah digunakan memberikan akses ke sumber daya, pelatihan personal, dan real-time feedback dari para ahli kesehatan untuk memudahkan pengelolaan diabetes
        </p>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-[55%] w-100 xl:w-[60%] text-center justify-center pr-0 hidden md:block mxl:w-[60%]">
        <img
        id="hero"
        className="w-100 
        hidden
        xl:absolute 
        mxl:absolute
        mxl:-right-[0rem] 
        xl:h-[600px] 
        xl:bottom-0 
        xl:right-0 
        h-[100%] 
        mxl:block
        mxl:h-[32rem] 
        mxl:w-[calc(100%_-_25rem)] 
        mmxl:w-[calc(98%_-_35rem)]
        xl:w-[calc(100%_-_40rem)]
        bottom-[0px]
        " 
        src={`${router.basePath}/assets/images/group-coach.webp`}
        alt=""
        />

      <img
        id="hero"
        className="w-100 hidden 
        lg:block 
        lg:absolute 
       
        mxl:h-[calc(100%_-_15rem)] 
        mxl:w-[calc(70%_-_5rem)] lg:h-[550px] lg:top-0 lg:right-0 mxl:absolute mxl:h-[26rem]"
        style={{zIndex: -10}}
        src={`${router.basePath}/assets/images/elipse-orange.webp`}
        alt=""
        />

      <button className="inline-flex 
          text-3xl 
          focus:outline-none bg-white text-[#27275D] font-bold rounded-xl 
          3xl:px-20
          3xl:py-4 
          2xl:px-20 
          2xl:py-3 
          xl:px-20 
          xl:py-3  
          lg:px-28 
          lg:py-3
          lg:absolute
          lg:bottom-[10%]
          lg:right-[22%]
          mxl:block
          mxl:px-[2rem]
          mxl:text-[1.5rem]
          mxl:mr-[calc(12%_-_6em)]
          mmxl:mr-[calc(12%_-_7em)]
          xl:mr-[calc(12%_-_10em)]
          hidden
          xl:block
          ">
             Health Coach
      </button>
                 
      </div> 
    </div>
    <div className="mx-auto flex pt-12 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col mxl:mt-[calc(60%_-_5rem)] mmxl:mt-[calc(50%_-_14rem)] xl:mt-[calc(50%_-_2rem)] lg:mt-[750px] mb-[4em] ">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-1/6 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0">
        <h2 className="my-5 mmxl:my-0 xl:my-5 lg:text-5xl text-4xl md:text-5xl text-darkblue-100 font-normal mxl:text-[calc(5vh_-_0.5rem)] mmxl:text-5xl">
        Kami Memfasilitasi <br/> Konsultasi Bersama <br/>
          <span className="font-bold text-darkblue-100">Coach Bersertifikat</span>
        </h2>
        <hr className="h-px my-3 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-8 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 
        xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem] mxl:text-[1rem] mxl:leading-6 mxl:mr-[6rem] mmxl:mr-[1rem] xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        text-base
        text-left
        ssm:text-[1.5rem]
        md:text-[1.4rem]
        ">
        Loop menawarkan akses mudah ke Lifestyle Coach dan informasi praktis untuk membantu mengelola diabetes tipe 2, tanpa batasan ruang dan waktu. Struktur pelatihan kami yang kuat dan penggunaan data perilaku perawatan diri diabetes memungkinkan pelatihan yang konsisten dan standar dengan kontinuitas bagi pengguna kami.
        </p>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-[55%] w-100  xl:w-[60%] text-center justify-center pr-0">
      <Slider {...settings}>
          <div className="px-8">
              <div className="bg-lightgreen-100 px-2 pt-10 rounded-3xl shadow-md pb-2">      
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
              <div className="bg-[#E5F3FF] px-2 pt-10 rounded-3xl shadow-md pb-2">      
                  <div>
                        <img
                        id="hero"
                        className="w-100 -mb-2 mx-auto"
                        src={`${router.basePath}/assets/images/vivi.webp`}
                        alt=""
                        />
                 
                  </div>
              </div>
          </div>
          <div className="px-8">
              <div className="bg-[#FEF5EF] px-2 pt-10 rounded-3xl shadow-md pb-2">      
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
              <div className="bg-[#E5F3FF] px-2 pt-10 rounded-3xl shadow-md pb-2">      
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
              <div className="bg-[#E4F4F4] px-2 pt-10 rounded-3xl shadow-md pb-2">      
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
              <div className="bg-[#FEF5EF] px-2 pt-10 rounded-3xl shadow-md pb-2">      
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
      <div className="mx-auto pt-12 lg:px-24 md:px-16 sm:px-8 px-8 mmxl:-mt-10 xl:mt-0">
        <div className="bg-orange-100 flex w-100 lg:flex-row flex-col rounded-3xl lg:px-20 lg:pt-18 lg:pb-18 px-8 py-10">
            {/* Left Column */}
            <div className="w-full lg:w-3/6 xl:w-3/6 flex pr-0">
              <div className="">
                  <span className="text-left text-[50px] lg:text-[72px] font-bold text-[#97C7F0]">
                    VISI
                  </span>
                  <p className="text-base md:text-[1.2rem] lg:pr-18 xl:pr-28 lg:text-xl xl:text-xl font-light">
                  Kami membayangkan sebuah dunia di mana orang Indonesia yang menderita diabetes dapat menjalani kehidupan yang penuh, bebas dari kekhawatiran, dan sesuai dengan kebutuhan individunya. Karena setiap orang ingin sehat.
                  </p>
              </div>
            </div>
           <div className="lg:border-r-2 lg:border-orange-200 lg:h-100 xl:h-[200px] mt-7 lg:ml-10 lg:mr-6">

           </div>
            <div className="w-full lg:w-3/6 xl:3/6 ml-0 lg:ml-14 xl:ml-28 xl:mb-14">
                <div className="">
                  <h1 className="text-left text-[50px] lg:text-[72px] font-bold text-orange-200">
                    MISI
                  </h1>
                  <p className="text-base md:text-[1.2rem] w-[100%] xl:w-[100%] text-[1.2rem] lg:text-xl xl:text-xl font-light">
                  Loop memberdayakan orang-orang yang hidup dengan diabetes dengan cara yang mudah, personal, dan memberikan pengalaman yang positif, sehingga dapat membuat kehidupan sehari-hari menjadi lebih baik.
                  </p>
                </div>
            </div>
        </div>
    </div>
    <div className="mx-auto flex px-0 pt-12 lg:px-24 lg:flex-row mxl:flex-row mmxl:flex-row flex-col mmxl:mt-[5rem] lg:mt-[200px] mb-3 mxl:mt-[calc(10%_-_5rem)] mmxl:mt-[calc(10%_-_6rem)]">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-2/4 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 lg:mt-28 px-8 md:px-12 lg:px-0">
        <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal mmxl:-mt-[3rem] xl:-mt-[0rem]">
            Menuju <span className="font-bold text-darkblue-100">Perubahan Positif <br className="hidden mxl:block" />Bersama</span> Loop!
        </h2>
        <hr className="h-px mx-2 my-2 mxl:my-3 mxl:mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-8 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-22 
        xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem] mxl:text-[1rem] mxl:leading-6 mxl:mr-[6rem] mmxl:mr-[1rem] xl:mr-[0rem]
        xl:text-[1.4rem]
        xl:leading-8
        text-base
        text-left
        ssm:text-[1.5rem]
        md:text-[1.4rem]
        ">
        Loop memahami, perjalanan menuju ke sana bukan tanpa rintangan. Namun bukan berarti mustahil. Melalui layanan digital Loop, pengguna akan merasakan pengalaman yang lebih menyenangkan dalam mengelola diabetes tipe-2 dengan pantauan para ahli.
        </p>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-2/4 text-center justify-center flex pr-0">
        
      <img
          id="hero"
          className="
          hidden
          mxl:block
          mmxl:block
          lg:absolute lg:right-0 lg:h-[60rem] lg:-bottom-[123rem] 
          xl:absolute xl:right-0 xl:h-[calc(100%_+_8rem)] xl:bottom-[calc(100%_-_178rem)] 
          mxl:absolute mxl:right-0 mxl:h-[calc(100%_-_10rem)] mxl:bottom-[calc(100%_-_172rem)] 
          mmxl:absolute mmxl:right-0 mmxl:h-[65rem] mmxl:bottom-[calc(100%_-_150rem)] 
          xxl:absolute xxl:right-0 xxl:h-[65rem] xxl:bottom-[calc(100%_-_185rem)] 
          2xl:absolute 2xl:right-0 2xl:h-[1550px] 2xl:-bottom-[105rem] 
          3xl:absolute 3xl:right-0 3xl:h-[1550px] 3xl:-bottom-[115rem] 
          4xl:absolute 4xl:right-0 4xl:h-[1550px] 4xl:-bottom-[130rem] 
          5xl:right-0 5xl:h-[1600px] 5xl:-bottom-[140rem] 
          "
          style={{zIndex: -10}}
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
          block
          -mb-[9rem]
          sm:h-[50%] sm:w-[50%]
          ssm:h-[100%] ssm:w-[100%]
          md:w-[100%]
          md:block
          mxl:hidden
          lg:hidden
          xl:hidden
          2xl:hidden
          3xl:hidden
          4xl:hidden
          5xl:hidden"
          style={{zIndex: -20}}
          src={`${router.basePath}/assets/images/journey-about2.webp`}
          alt=""
        />
      </div>
  
    </div>
  
  </div>
)};

export default JourneyAbout
