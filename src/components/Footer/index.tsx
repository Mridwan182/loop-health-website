import router, { useRouter } from 'next/router';
import React from 'react';


const Footer = (props: any) =>  {
  const router = useRouter()

  return (
    <footer className="bg-white shadow dark:bg-blue-100 lg:mt-[5%] z-30 w-100">
      <div className="mx-auto lg:px-24 sm:px-10 px-4 py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/6">
            <div>
              <a href="/">
                  <img 
                    className="h-12"
                    src={`${router.basePath}/assets/logo/logo.webp`}
                    alt="" />
                </a>
                <div className="mt-3">
                    <a href="/about-us" className="hover:text-lightgreen-200">Tentang Kami</a>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-2/5">
            <div>
              <div className="text-2xl font-semibold mb-8 mt-5 lg:mt-0">Dukungan dan Bantuan</div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                  <div className="mb-5">
                      <a href="/terms-condition" className="font-light text-md  hover:text-lightgreen-200">
                        Syarat dan Ketentuan
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="/privacy-policy" className="font-light text-md hover:text-lightgreen-200">
                        Kebijakan Privasi
                      </a>
                   </div>
              </div>
              <div className="w-full lg:w-1/2 text-md">
                   <div className="mb-5">
                      <a href="/editorial-policy" className="font-light text-md hover:text-lightgreen-200">
                        Kebijakan Editorial
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="/disclaimer" className="font-light text-md hover:text-lightgreen-200">
                          Disclaimer
                      </a>
                   </div>
              </div>
            </div>
        </div>
        <div className="w-full lg:w-3/5">
            <div>
              <div className="text-2xl font-semibold mb-8">Hubungi Kami</div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-4/6">
                  <div className="mb-5 font-light text-md leading-relaxed text-md lg:pr-20">
                  GoWork - Pacific Place, Lantai 1, Room 125. <br/>
                  Jl. Jend. Sudirman Kav. 52-53, SCBD, <br/>
                  Jakarta Selatan 12190
                   </div>
              </div>
              <div className="w-full lg:w-2/6">
                   <div className="mb-5">
                      <a href="mailto:hello@loophealth.id" target="_blank" className="font-light text-md hover:text-lightgreen-200">
                          hello@loophealth.id
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="https://wa.me/+6281112588833" target="_blank" className="font-light text-md hover:text-lightgreen-200">
                            +62 81112588833
                      </a>
                   </div>
              </div>
            </div>
        </div>
        </div>
      </div>
      <div className="block text-sm sm:text-center dark:text-black bg-lightblue-100 py-3 font-normal xs:text-center text-center">
          © 2023 Loop Health Indonesia. All Right Reserved.
      </div>
      
    </footer>
)};

export default Footer
