import { useRouter } from 'next/router';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import MainNavbar from '@/components/Navbar';
import Service from '@/components/Service';
import StartNow from '@/components/StartNow';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Loop Health - Home"
          description="
          Di Loop, kami percaya dalam memberikan kekuatan kepada orang untuk membuat perubahan positif yang berlangsung lama dalam kesehatan mereka melalui modifikasi perilaku dan gaya hidup. Kami bangga menjadi mitra dalam perjalanan ini dan berkomitmen untuk membantu klien kami mencapai peningkatan kesehatan nyata dan penghematan biaya melalui program virtual care kami.
          "
        />
      }
    >
      <img
        id="hero"
        className=" 
          hidden mxl:absolute mxl:left-0 mxl:top-[28rem] mxl:block 
          mxl:h-[50rem] mmxl:absolute mmxl:left-0 mmxl:top-[30rem] mmxl:block 
          mmxl:h-[50rem] xl:absolute xl:left-0 xl:top-[35rem] xl:block 
          xl:h-[65rem] 3xl:absolute 3xl:left-0 3xl:top-[40rem] 3xl:block 
          3xl:h-[1450px] 4xl:absolute 4xl:left-0 4xl:top-[30rem] 4xl:block 
          4xl:h-[1900px] 5xl:right-0 5xl:top-[25rem] 5xl:h-[1900px] "
        style={{ zIndex: -10 }}
        src={`${router.basePath}/assets/images/elips-green-top.webp`}
        alt=""
      />

      <img
        id="hero"
        className="absolute
          top-[50rem]
          h-[100rem]
          md:hidden"
        style={{ zIndex: -10 }}
        src={`${router.basePath}/assets/images/elipse-green-mobile.webp`}
        alt=""
      />
      <MainNavbar />
      <Hero />
      <Service />
      <Journey />
      <StartNow />
      <Footer />
    </Main>
  );
};

export default Index;
