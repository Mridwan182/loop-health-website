import router, { useRouter } from 'next/router';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import MonitoringIcon from '../icon';
import React, { useState } from 'react';
import carousel from 'next-seo/lib/jsonld/carousel';
import Slider from "react-slick";


;

const Journey = (props: any) =>  {
  const router = useRouter()
  const [index, setIndex] = useState(0)

  const settings : any = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    dots: true,
    beforeChange: (prev: any, next: any) => {   // here to detect slide change
      setIndex(next);
    },

    customPaging: (pagi:any, i : any) => {
    
      return (
        <div className={index == pagi ? "bg-green-100 h-6 w-6 rounded-full border-2 border-lighblue-300 mr-92" : "bg-gray-500 h-6 w-6 rounded-full border mr-92"}>

        </div>
      );
    }
  }

  return (
    <div id="journey">
   
    <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col lg:mt-[2%] lg:mb-[8%]">
      {/* Left Column */}
      <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
        <h2 className="my-5 lg:text-5xl text-4xl text-darkblue-100 font-normal">
            <span className="font-bold text-darkblue-100">Journey</span> Mereka <br/> Bersama Kami!
        </h2>
        <hr className="h-px my-3 mx-4 bg-darkblue-100 border-darkblue-100 dark:bg-darkblue-100 border-2 w-1/6"/>
        <p className="small-text mb-8 mt-4 leading-9 font-light lg:text-xl md:mr-12 lg:mr-12 xl:mr-28 xl:pr-24 xl:w-50 sm:text-sm text-black 3xl:leading-10 3xl:text-2xl 3xl:pr-[10rem]">
        Pengguna kami melihat hasil luar biasa dalam pengelolaan diabetes 
        & kesehatan. Loop menyediakan alat & sumber daya untuk membantu capai tujuan kesehatan. 
        Bergabung dengan komunitas kami untuk hidup lebih berdaya & sehat dengan Loop!
        </p>
       
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-3/6 text-center justify-center pr-0 ">      
        <Slider {...settings}>
          <div className="px-4">
              <div className="border-[#B7CBDA] border-2 shadow-lg rounded-[50px] px-10 py-10 flex h-[600px] lg:h-[430px] 4xl:h-[550px] md:h-[800px] bg-white">
              <div className="flex lg:flex-row flex-col mxl:flex-col xl:flex-row">
              <div className="w-[80%] mxl-[100%] lg:w-[50%] xl:w-[50%]">
                        <img
                        src={`${router.basePath}/assets/images/journey-1.webp`}
                        alt=""
                      />  
                    </div>
                    <div className="w-100 lg:w-[80%] my-4 mxl:w-100 xl:w-[80%]">
                    <div className="text-left flex flex-col lg:px-12 mxl:px-2 xl:px-12">
                          <p className="text-sm lg:text-[20px] tracking font-normal mxl:text-[12px] xl:text-[20px]">
                            Saya mengalami penurunan gula darah yang sangat berarti setelah mengikuti program dasar diabetes dari aplikasi Loop. Loop tidak hanya membantu memonitoring kondisi diabetes saya tetapi juga mengubah pola hidup saya.
                          </p>
                          <div className="mt-[8%]">
                            <h5 className="font-semibold lg:text-2xl mxl:text-lg xl:text-2xl">Devi Puspitasari</h5>
                            <hr className="border w-2/6 border-orange-200 my-3 mxl:my-1 xl:my-3"/>
                            <h5 className="font-light text-md mxl:text-sm lg:text-md xl:text-md">Kurikulum Analis</h5>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="px-4">
          <div className="border-[#B7CBDA] border-2 shadow-lg rounded-[50px] px-10 py-10 flex h-[600px] lg:h-[430px] 4xl:h-[550px] md:h-[800px] bg-white">
          <div className="flex lg:flex-row flex-col mxl:flex-col xl:flex-row">
                    <div className="w-[80%] mxl-[100%] lg:w-[50%] xl:w-[50%]">
                        <img
                        src={`${router.basePath}/assets/images/journey-2.webp`}
                        alt=""
                      />  
                    </div>
                    <div className="w-100 lg:w-[80%] my-4 mxl:w-100 xl:w-[80%]">
                        <div className="text-left flex flex-col lg:px-12 mxl:p-2 xl:px-12">
                        <p className="text-sm lg:text-[20px] tracking font-normal  mxl:text-[12px] xl:text-[20px]">
                          Karena Loop, saya jadi tau bagaimana mengatur asupan makanan dan minuman, dari jenis nutrisi dan  porsinya yang baik untuk menjaga pola hidup saya sebagai seorang diabtesi.
                          </p>
                          <div className="mt-[16%] mxl:mt-[14%] lg:mt-[16%] xl:mt-[16%]">
                            <h5 className="font-semibold lg:text-2xl mxl:text-lg xl:text-2xl">Ghina Nuha Mufida</h5>
                            <hr className="border w-2/6 border-orange-200 my-3 mxl:my-1 xl:my-3"/>
                            <h5 className="font-light text-md mxl:text-sm lg:text-md xl:text-md">Pengajar</h5>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="px-4">
            <div className="border-[#B7CBDA] border-2 shadow-lg rounded-[50px] px-10 py-10 flex h-[600px] lg:h-[430px] 4xl:h-[550px] md:h-[800px] bg-white">
            <div className="flex lg:flex-row flex-col mxl:flex-col xl:flex-row">
                    <div className="w-[80%] mxl-[100%] lg:w-[50%] xl:w-[50%]">
                        <img
                        src={`${router.basePath}/assets/images/journey-3.webp`}
                        alt=""
                      />  
                    </div>
                    <div className="w-100 lg:w-[80%] my-4 mxl:w-100 xl:w-[80%]">
                    <div className="text-left flex flex-col lg:px-12 mxl:p-2 xl:px-12">
                        <p className="text-sm lg:text-[20px] tracking font-normal mxl:text-[12px] xl:text-[20px]">
                          Saat melakukan konsultasi kondisi diabetes saya bersama Coach Loop saya  selalu mendapatkan panduan detail tentang pengecekan gula darah, pola makan, dan aktivitas fisik yang membantu kondisi diabetes saya menjadi lebih baik.
                          </p>
                          <div className="mt-[12%] mxl:mt-[8%] lg:mt-[12%] xl:mt-[12%]">
                            <h5 className="font-semibold lg:text-2xl mxl:text-lg xl:text-2xl">Heru Styawan</h5>
                            <hr className="border w-2/6 border-orange-200 my-3  mxl:my-1 xl:my-3"/>
                            <h5 className="font-light text-md mxl:text-sm lg:text-md xl:text-md">Pegawai Swasta</h5>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>
  
)};

export default Journey
