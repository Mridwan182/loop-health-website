const HeroAbout = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col px-8 pt-12 pb-16 sm:px-8 md:px-16 lg:flex-row lg:px-24 lg:pb-20">
        {/* Left Column */}
        <div className="mb-3 flex flex-col items-center text-center md:mb-12 lg:mb-0 lg:w-1/2 lg:grow lg:items-start lg:text-left">
          <h2 className="my-5 text-4xl font-normal text-darkblue-100 lg:text-5xl">
            <span className="font-bold text-darkblue-100">Your</span> Everyday
            Diabetes <span className="font-bold text-darkblue-100">Coach</span>
          </h2>
          <hr className="my-3 mx-4 h-px w-1/6 border-2 border-darkblue-100 bg-darkblue-100 dark:bg-darkblue-100" />
          <p className="small-text xl:w-50 mb-8 mt-4 text-base font-light leading-6 text-black sm:text-xs md:mr-12 md:text-xs lg:mr-12 lg:text-xl lg:leading-9 xl:mr-28 xl:pr-6">
            Di Loop, kami percaya dalam memberikan kekuatan kepada orang untuk
            membuat perubahan positif yang berlangsung lama dalam kesehatan
            mereka melalui modifikasi perilaku dan gaya hidup. Kami bangga
            menjadi mitra dalam perjalanan ini dan berkomitmen untuk membantu
            klien kami mencapai peningkatan kesehatan nyata dan penghematan
            biaya melalui program virtual care kami.
          </p>
          <div className="mx-auto inline-block items-center justify-center space-x-0 sm:space-x-3 md:space-x-2 lg:mx-0 lg:flex lg:space-x-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9itbfQqhSbJarPRmDWwV2QVbopE1AnVdT9MkWPK-JhVXeWQ/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              className="btn-fill mb-4 inline-flex rounded-2xl bg-green-100 py-4 px-14 text-base font-semibold text-white hover:shadow-lg focus:outline-none md:mb-0 lg:mb-0"
              rel="noreferrer"
            >
              Request Demo
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex w-full justify-center pr-0 text-center lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default HeroAbout;
