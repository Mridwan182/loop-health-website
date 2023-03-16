import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Slider from 'react-slick';

const Journey = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const settings: any = {
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    dots: true,
    beforeChange: (next: any) => {
      // here to detect slide change
      setIndex(next);
    },

    customPaging: (pagi: any) => {
      return (
        <div
          className={
            index === pagi
              ? 'border-lighblue-300 mr-92 h-6 w-6 rounded-full border-2 bg-green-100'
              : 'mr-92 h-6 w-6 rounded-full border bg-gray-500'
          }
        ></div>
      );
    },
  };

  return (
    <div id="journey">
      <div
        className="mx-auto flex flex-col px-8 pt-12 pb-16 sm:px-8 md:px-16 lg:mt-[2%] lg:mb-[8%] lg:flex-row lg:px-24 lg:pb-20 mxl:flex-row
     mxl:px-12
     mmxl:mb-[5%]
     mmxl:-mt-[1%]
     mmxl:flex-row
    mmxl:px-24
    xl:mt-[2%]
    "
      >
        {/* Left Column */}
        <div className="mb-3 flex flex-col text-center md:mb-12 lg:mb-0 lg:w-1/2 lg:grow lg:items-start lg:text-left mxl:w-[40%]">
          <h2 className="my-5 text-left text-4xl font-normal text-darkblue-100 ssm:text-5xl  lg:text-5xl mxl:text-3xl mmxl:text-4xl">
            <span className="font-bold text-darkblue-100">Journey</span> Mereka{' '}
            <br /> Bersama Kami!
          </h2>
          <hr className="m-2 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100 md:my-10 md:mx-4 mxl:my-4 mxl:mx-2" />
          <p
            className="small-text xl:w-50 mb-8 mt-4 text-left text-base font-light leading-8 
        text-black sm:text-sm ssm:text-[1.5rem] md:mr-12 md:text-[1.4rem] lg:mr-12 lg:text-xl mxl:mr-[2rem] mxl:text-[1rem] mxl:leading-6
        xl:mr-[100%_-_10rem] xl:pr-24 xl:text-[1.4rem] xl:leading-8
        3xl:pr-[10rem]
        3xl:text-2xl
        3xl:leading-10
        "
          >
            Pengguna kami melihat hasil luar biasa dalam pengelolaan diabetes &
            kesehatan. Loop menyediakan alat & sumber daya untuk membantu capai
            tujuan kesehatan. Bergabung dengan komunitas kami untuk hidup lebih
            berdaya & sehat dengan Loop!
          </p>
        </div>
        {/* Right Column */}
        <div className="w-full justify-center pr-0 text-center lg:w-3/6 mxl:w-[60%] mmxl:mt-8 xl:mt-0">
          <Slider {...settings}>
            <div className="px-4">
              <div className="flex h-[46rem] rounded-[50px] border-2 border-[#B7CBDA] bg-white p-10 shadow-lg ssm:h-[48rem] md:h-[800px] lg:h-[430px] mxl:h-[18rem] mxl:p-4  xl:h-[26rem] xl:p-10  4xl:h-[550px]">
                <div className="flex flex-col lg:flex-row mxl:flex-row xl:flex-row">
                  <div className="mxl-[100%] mxl:align-center w-[100%] lg:w-[50%] mxl:content-center mxl:self-center mmxl:flex mmxl:justify-center xl:block xl:w-[50%]">
                    <img
                      src={`${router.basePath}/assets/images/journey-1.webp`}
                      alt=""
                      className="w-100 ssm:h-[15rem] mxl:h-[13rem] mmxl:h-[15rem] xl:h-[100%]"
                    />
                  </div>
                  <div className="w-100 mxl:align-center my-4 px-4 lg:w-[80%]  mxl:content-center mxl:self-center xl:w-[100%]">
                    <div className="ssm-px-0 flex flex-col text-left lg:px-12 mxl:px-0 xl:px-4 xl:pr-0">
                      <p className="tracking mt-6 text-base font-normal ssm:text-[1.4rem] md:mt-0 lg:text-[20px] mxl:text-[0.8rem] mmxl:text-[1rem] xl:text-[20px]">
                        Saya mengalami penurunan gula darah yang sangat berarti
                        setelah mengikuti program dasar diabetes dari aplikasi
                        Loop. Loop tidak hanya membantu memonitoring kondisi
                        diabetes saya tetapi juga mengubah pola hidup saya.
                      </p>
                      <div className="mt-[16%] lg:mt-[16%] mxl:mt-[14%] xl:mt-[16%]">
                        <h5 className="font-semibold ssm:text-3xl lg:text-2xl mxl:text-lg xl:text-2xl">
                          Devi Puspitasari
                        </h5>
                        <hr className="my-3 w-2/6 border border-orange-200 mxl:my-1 xl:my-3" />
                        <h5 className="text-md lg:text-md xl:text-md font-light mxl:text-sm">
                          Kurikulum Analis
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex h-[46rem] rounded-[50px] border-2 border-[#B7CBDA] bg-white p-10 shadow-lg ssm:h-[48rem] md:h-[800px] lg:h-[430px] mxl:h-[18rem] mxl:p-4  xl:h-[26rem] xl:p-10  4xl:h-[550px]">
                <div className="flex flex-col lg:flex-row  mxl:flex-row xl:flex-row">
                  <div className="mxl-[100%] mxl:align-center w-[100%] lg:w-[50%] mxl:content-center mxl:self-center mmxl:flex mmxl:justify-center xl:block  xl:w-[50%]">
                    <img
                      src={`${router.basePath}/assets/images/journey-2.webp`}
                      alt=""
                      className="w-100 ssm:h-[15rem] mxl:h-[13rem] mmxl:h-[15rem] xl:h-[100%]"
                    />
                  </div>
                  <div className="w-100 mxl:w-100 mxl:align-center my-4 px-4 lg:w-[80%] mxl:my-0  mxl:content-center mxl:self-center mxl:px-2 xl:w-[100%]">
                    <div className="flex flex-col text-left lg:px-12 mxl:p-2 xl:px-4 xl:pr-0">
                      <p className="tracking mt-6 text-base font-normal ssm:text-[1.4rem] md:mt-0  lg:text-[20px]  mxl:text-[0.8rem] xl:text-[20px] ">
                        Karena Loop, saya jadi tau bagaimana mengatur asupan
                        makanan dan minuman, dari jenis nutrisi dan porsinya
                        yang baik untuk menjaga pola hidup saya sebagai seorang
                        diabtesi.
                      </p>
                      <div className="mt-[16%] lg:mt-[16%] mxl:mt-[12%] xl:mt-[16%]">
                        <h5 className="font-semibold ssm:text-3xl lg:text-2xl mxl:text-lg xl:text-2xl">
                          Ghina Nuha Mufida
                        </h5>
                        <hr className="my-3 w-2/6 border border-orange-200 mxl:my-1 xl:my-3" />
                        <h5 className="text-md lg:text-md xl:text-md font-light mxl:text-sm">
                          Pengajar
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex h-[46rem] rounded-[50px] border-2 border-[#B7CBDA] bg-white p-10 shadow-lg ssm:h-[48rem] md:h-[800px] lg:h-[430px] mxl:h-[18rem] mxl:p-4 xl:h-[26rem]   xl:p-10   4xl:h-[550px]">
                <div className="flex flex-col lg:flex-row mxl:flex-row xl:flex-row">
                  <div className="mxl-[100%] mxl:align-center w-[100%] lg:w-[50%] mxl:content-center mxl:self-center mmxl:flex mmxl:justify-center xl:block  xl:w-[50%]">
                    <img
                      src={`${router.basePath}/assets/images/journey-3.webp`}
                      alt=""
                      className="w-100 ssm:h-[15rem] mxl:h-[13rem] mmxl:h-[15rem] xl:h-[100%]"
                    />
                  </div>
                  <div className="w-100  mxl:w-100 mxl:align-center my-4 px-4 lg:w-[80%] mxl:content-center mxl:self-center xl:w-[100%]">
                    <div className="flex flex-col text-left lg:px-4 mxl:p-2 xl:px-4 xl:pr-0">
                      <p className="tracking mt-6 text-base font-normal ssm:text-[1.4rem] md:mt-0 lg:text-[20px] mxl:text-[0.8rem] mmxl:text-[1rem] xl:text-[20px]">
                        Saat melakukan konsultasi kondisi diabetes saya bersama
                        Coach Loop saya selalu mendapatkan panduan detail
                        tentang pengecekan gula darah, pola makan, dan aktivitas
                        fisik yang membantu kondisi diabetes saya menjadi lebih
                        baik.
                      </p>
                      <div className="mt-[16%] lg:mt-[16%] mxl:mt-[14%] xl:mt-[16%]">
                        <h5 className="font-semibold ssm:text-3xl lg:text-2xl mxl:text-lg xl:text-2xl">
                          Heru Styawan
                        </h5>
                        <hr className="my-3 w-2/6 border border-orange-200  mxl:my-1 xl:my-3" />
                        <h5 className="text-md lg:text-md xl:text-md font-light mxl:text-sm">
                          Pegawai Swasta
                        </h5>
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
  );
};

export default Journey;
