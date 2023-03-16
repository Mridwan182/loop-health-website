import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-100 z-30 bg-blue-100 shadow dark:bg-blue-100 lg:mt-[5%]">
      <div className="mx-auto px-4 py-20 sm:px-10 lg:px-10 mxl:px-24">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/6">
            <div>
              <Link href="/">
                <img
                  className="h-16 md:h-12"
                  src={`${router.basePath}/assets/logo/logo.webp`}
                  alt=""
                />
              </Link>
              <div className="mt-3">
                <Link
                  href="/about-us"
                  className="lg:text-md mt-2 text-[1.1rem] hover:text-lightgreen-200"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div>
              <div className="mb-8 mt-5 text-2xl font-semibold lg:mt-0">
                Dukungan dan Bantuan
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="mb-5">
                  <Link
                    href="/terms-condition"
                    className="lg:text-md text-[1.1rem] font-light  hover:text-lightgreen-200"
                  >
                    Syarat dan Ketentuan
                  </Link>
                </div>
                <div className="mb-5">
                  <Link
                    href="/privacy-policy"
                    className="lg:text-md text-[1.1rem] font-light hover:text-lightgreen-200"
                  >
                    Kebijakan Privasi
                  </Link>
                </div>
              </div>
              <div className="text-md w-full lg:w-1/2">
                <div className="mb-5">
                  <Link
                    href="/editorial-policy"
                    className="lg:text-md text-[1.1rem] font-light hover:text-lightgreen-200"
                  >
                    Kebijakan Editorial
                  </Link>
                </div>
                <div className="mb-5">
                  <Link
                    href="/disclaimer"
                    className="lg:text-md text-[1.1rem] font-light hover:text-lightgreen-200"
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div>
              <div className="mb-8 text-2xl font-semibold">Hubungi Kami</div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-4/6">
                <div className="lg:text-md text-md mb-5 text-[1.1rem] font-light leading-relaxed lg:pr-20">
                  GoWork - Pacific Place, Lantai 1, Room 125. <br />
                  Jl. Jend. Sudirman Kav. 52-53, SCBD, <br />
                  Jakarta Selatan 12190
                </div>
              </div>
              <div className="w-full lg:w-2/6">
                <div className="mb-5">
                  <Link
                    href="mailto:hello@loophealth.id"
                    target="_blank"
                    className="lg:text-md text-[1.1rem] font-light hover:text-lightgreen-200"
                    rel="noreferrer"
                  >
                    hello@loophealth.id
                  </Link>
                </div>
                <div className="mb-5">
                  <Link
                    href="https://wa.me/+6281112588833"
                    target="_blank"
                    className="lg:text-md text-[1.1rem] font-light hover:text-lightgreen-200"
                    rel="noreferrer"
                  >
                    +62 81112588833
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-lightblue-100 py-3 text-center text-sm font-normal dark:text-black xs:text-center sm:text-center">
        © 2023 Loop Health Indonesia. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
