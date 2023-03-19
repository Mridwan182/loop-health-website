import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MainNavbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className="mx-auto flex items-center justify-between p-8 sm:px-8 md:px-16 lg:justify-start lg:px-10 mxl:px-12 mmxl:px-12 mmmxl:px-10 xl:px-24">
        <Link href="/">
          <img
            className="h-12"
            src={`${router.basePath}/assets/logo/logo.webp`}
            alt=""
          />
        </Link>
        <div
          className="mr-0 flex cursor-pointer lg:hidden"
          onClick={() => setShow(!show)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={
            show
              ? 'fixed top-0 left-0 z-30 block h-full w-full bg-black bg-opacity-60'
              : 'fixed top-0 left-0 z-30 hidden h-full w-full bg-black bg-opacity-60'
          }
          onClick={() => setShow(!show)}
        ></div>
        <nav
          className={
            show
              ? 'navigation fixed inset-x-3 top-8 z-50 flex flex-col items-start justify-center rounded-md bg-white p-8 text-base shadow-md lg:relative lg:top-0 lg:mr-auto lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none'
              : 'navigation fixed inset-x-3 top-8 z-50 hidden flex-col items-start justify-center rounded-md bg-white p-8 text-base shadow-md lg:relative lg:top-0 lg:mr-auto lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none'
          }
        >
          <Link href="#">
            <img
              className="m-0 mb-3 h-10 lg:hidden"
              src={`${router.basePath}/assets/logo/logo.webp`}
              alt=""
            />
          </Link>
          {/* <a
                  className="nav-text text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active text-black"
                  href="/about"
                >
                  Pengalaman Dari Loop
                </a> */}
          <Link
            className="nav-text active relative mx-0 my-4 text-lg font-semibold leading-6 text-black hover:text-lightgreen-200 lg:mx-5 lg:my-0"
            href="/about-us"
          >
            Tentang Loop
          </Link>

          <div className="mt-3 w-full lg:hidden">
            <div className="w-full">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0"
                target="_blank"
                className="inline-flex w-[100%] justify-center rounded-lg bg-green-100 px-6 py-2 text-center text-xl font-bold text-white focus:outline-none"
                rel="noreferrer"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <svg
            className="absolute top-4 right-4 h-6 w-6 cursor-pointer lg:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShow(!show)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </nav>
        <div className="hidden lg:inline-flex">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            className="inline-flex rounded-2xl bg-green-100 text-xl font-bold text-white focus:outline-none lg:px-12 lg:py-3 xl:px-16 xl:py-3 2xl:px-20 2xl:py-3  3xl:px-16 3xl:py-4"
            rel="noreferrer"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
