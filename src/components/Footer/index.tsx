import router, { useRouter } from 'next/router';


const Footer = (props: any) =>  {
  const router = useRouter()

  return (
    <footer className="bg-white shadow dark:bg-blue-100">
      <div className="mx-auto lg:px-24 sm:px-10 px-4 py-20">
      <div className="grid-container grid grid-cols-6 ">
        <div className="item1 col-span-1">
            <div>
              <a href="/">
                  <img 
                    className="h-12"
                    src={`${router.basePath}/assets/logo/logo.webp`}
                    alt="" />
                </a>
                <div className="mt-3">
                  Tentang Kami
                </div>
            </div>
        </div>
        <div className="item2 col-span-2">
            <div>
              <div className="text-2xl font-semibold mb-8">Dukungan dan Bantuan</div>
            </div>
            <div className="grid-container grid grid-cols-5">
              <div className="item2 col-span-2 text-md">
                  <div className="mb-5">
                      <a href="" className="font-light text-md ">
                        Syarat dan Ketentuan
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="" className="font-light text-md ">
                        Kebijakan Privasi
                      </a>
                   </div>
              </div>
              <div className="item2 col-span-2 ">
                   <div className="mb-5">
                      <a href="" className="font-light text-md ">
                        Kebijakan Editorial
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="" className="font-light text-md">
                          Disclaimer
                      </a>
                   </div>
              </div>
            </div>
        </div>
        <div className="item2 col-span-3">
            <div>
              <div className="text-2xl font-semibold mb-8">Hubungi Kami</div>
            </div>
            <div className="grid-container grid grid-cols-5">
              <div className="item2 col-span-4">
                  <div className="mb-5 font-light text-md leading-relaxed">
                  Satrio Tower , 26th Floor, Unit C&D Kav. C4,
                    Jl. Prof. Dr. Satrio, Kel. Kuningan Timur,
                    Kec. Setiabudi, Jakarta Selatan, 12950
                   </div>
              </div>
              <div className="item2 col-span-1">
                   <div className="mb-5">
                      <a href="" className="font-light text-md ">
                          hello@loophealth.id
                      </a>
                   </div>
                   <div className="mb-5">
                      <a href="" className="font-light text-md">
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
