import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import MainNavbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <MainNavbar />
      <HeaderPanel title="Kebijakan Privasi"/>
      <div className="mx-auto flex flex-col py-20 lg:px-24 md:px-16 sm:px-8 px-8 text-md">
          <p>PT Loop Health Indonesia (selanjutnya disebut &quot;Kami&quot;) mengelola platform perangkat seluler Loop (selanjutnya disebut &quot;Layanan&quot;).</p>

        <p><br />
        Kebijakan privasi ini (&ldquo;Kebijakan Privasi&rdquo;) memaparkan mekanisme PT Loop Health Indonesia dalam mengumpulkan, mengelola, mengolah, dan mengamankan informasi pribadi yang Anda berikan melalui Layanan kami.&nbsp;</p>

        <p><br />
        Dengan menggunakan Layanan kami, Anda telah menyetujui untuk terikat dengan ketentuan-ketentuan dalam Kebijakan Privasi ini. Kebijakan Privasi ini merupakan bagian dari Syarat &amp; Ketentuan kami. Istilah-istilah apapun yang didefinisikan dan digunakan dalam Syarat &amp; Ketentuan diadaptasikan ke dalam Kebijakan Privasi ini.</p>

              </div>
      <Footer />
  </Main>
);

export default About;
