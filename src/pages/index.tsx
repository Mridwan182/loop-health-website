import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import MainNavbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Journey from '@/components/Journey';
import StartNow from '@/components/StartNow';
import Footer from '@/components/Footer';

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
        className="w-100 
          hidden 
          xl:block xl:absolute xl:left-0 xl:h-[65rem] xl:top-[35rem] 
          mxl:block mxl:absolute mxl:left-0 mxl:h-[50rem] mxl:top-[28rem] 
          mmxl:block mmxl:absolute mmxl:left-0 mmxl:h-[50rem] mmxl:top-[30rem] 
          3xl:block 3xl:absolute 3xl:left-0 3xl:h-[1450px] 3xl:top-[40rem] 
          4xl:block 4xl:absolute 4xl:left-0 4xl:h-[1900px] 4xl:top-[30rem] 
          5xl:bloxk 5xl:right-0 5xl:h-[1900px] 5xl:top-[25rem] "
        style={{zIndex: -10}}
        src={`${router.basePath}/assets/images/elips-green-top.webp`}
        alt=""
        />

        <img
        id="hero"
        className="w-100 
          absolute
          h-[100rem]
          top-[50rem]
          md:hidden"
        style={{zIndex: -10}}
        src={`${router.basePath}/assets/images/elipse-green-mobile.webp`}
        alt=""
        />

     
      <MainNavbar />
      <Hero />  
      <Service /> 
      <Journey /> 
      <StartNow />
      <Footer/>
     
     
    </Main>
  );
};

export default Index;
