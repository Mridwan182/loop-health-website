import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import MainNavbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from 'react';

const TermsCondition = () => (
  <Main meta={
      <Meta title="Loop Health - Terms & Condition" 
      description="Loop Health - Terms & Condition" />}>
      <MainNavbar />
      <HeaderPanel title="Syarat & Ketentuan"/>
      <div className="mx-auto flex flex-col py-20 lg:px-24 md:px-16 sm:px-8 px-8 mb-40 font-light text-sm md:text-md xl:text-xl lg:text-lg">
        
          <p className="font-light">
          MOHON UNTUK MEMBACA SELURUH SYARAT DAN KETENTUAN PENGGUNAAN SERTA KEBIJAKAN PRIVASI LOOP HEALTH DENGAN CERMAT DAN SAKSAMA SEBELUM MENGGUNAKAN SETIAP FITUR DAN/ATAU LAYANAN YANG TERSEDIA DALAM PLATFORM LOOP HEALTH.
          </p>

          <br/>
          <br/>

          <p className="font-light">
          Syarat dan Ketentuan Penggunaan Loop Health (“Ketentuan Penggunaan”) ini merupakan suatu perjanjian sah terkait tata cara dan persyaratan penggunaan fitur dan/atau layanan (“Layanan”) Platform Loop Health (“Platform”) antara Pengguna (“Anda”) dengan pengelola Platform, yaitu PT Aplikasi Loop Indonesia (“Kami”). Dengan mengunduh dan/atau memasang dan/atau menggunakan Platform dan/atau menikmati Layanan Kami, Anda setuju bahwa Anda telah membaca, memahami, mengetahui, menerima, dan menyetujui seluruh informasi, syarat-syarat, dan ketentuan-ketentuan penggunaan Platform yang terdapat dalam Ketentuan Penggunaan ini. 
          </p>

          <br/>
          <p className="font-light">
          Kami dapat mengubah ketentuan dalam Ketentuan Penggunaan ini kapan saja. Perubahan tersebut akan berlaku setelah ditampilkan di Platform. Adalah tanggung jawab Anda untuk meninjau Ketentuan Penggunaan secara teratur. Keberlanjutan Anda atas penggunaan Platform setelah adanya setiap perubahan tersebut, baik telah Anda tinjau atau tidak, akan merupakan perjanjian Anda untuk terikat oleh setiap perubahan tersebut.
          </p>
          <br/>

          <p className="font-light">
          Apabila Anda tidak setuju terhadap salah satu, sebagian, atau seluruh isi yang tertuang dalam Ketentuan Penggunaan ini, silakan untuk menghapus Platform dalam perangkat elektronik Anda dan/atau tidak mengakses Platform dan/atau tidak menggunakan Layanan Kami. Mohon untuk dapat diperhatikan pula bahwa Ketentuan Penggunaan ini dapat diperbarui dari waktu ke waktu.
          </p>

          <br/>


          <ol type="1" className="list-decimal list-inside space-y-4">
            <li className="font-light">KETENTUAN UMUM
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. Platform adalah aplikasi (versi Android atau iOS) yang dikelola oleh Kami sebagaimana diperbarui dari waktu ke waktu.</li>
                    <li>b. Koneksi Internet diperlukan untuk dapat menggunakan Layanan dan biaya terkait penggunaan koneksi Internet tersebut ditanggung sepenuhnya oleh Anda. </li>
                    <li>c. Platform berfungsi sebagai sarana untuk menghubungkan Anda dengan ahli gizi, mengirim data gula darah dan menganalisisnya, serta merekomendasikan gaya hidup sehat. </li>
                    <li>d. Jenis-jenis layanan yang dapat diakses dan digunakan melalui Platform adalah:
                        <ol className="list-outside list-none space-y-1 pl-5 font-light">
                          <li>i. Konsultasi dengan ahli gizi;</li>
                          <li>ii. Catatan gula darah dan analisisnya;</li>
                          <li>iii. Rekomendasi gaya hidup sehat berdasarkan catatan gula darah;</li>
                          <li>iv. Layanan lain yang dapat Kami tambahkan dari waktu ke waktu;</li>
                        </ol>
                    </li>
                    <li>e. (“Layanan”)
                        <ol className="list-outside list-none space-y-1 pl-5 font-light">
                          <li>i. Platform memungkinkan Anda untuk mengirimkan permintaan atas suatu Layanan kepada Penyedia Layanan. Penyedia Layanan memiliki kebijakan sendiri dan kewenangan penuh untuk menerima atau menolak setiap permintaan Anda atas Layanan. Jika Penyedia Layanan menerima permintaan Anda, Platform akan memberitahu Anda dan memberikan informasi mengenai Penyedia Layanan. Platform ini menyediakan konten serta membantu menghubungkan Anda dengan ahli gizi tersertifikasi untuk berkonsultasi mengenai pengelolaan diabetes tipe-2, dan mendampingi dalam menggunakan layanan Loop Health.</li>
                          <li>ii. Setiap fitur atau fasilitas dalam Platform dapat diperbarui atau diubah sesuai dengan kebutuhan dan perkembangan Platform.</li>
                          <li>iii. Pengumpulan, penyimpanan, pengolahan, penggunaan dan pembagian setiap informasi pribadi Anda, seperti nama, alamat surat elektronik, dan nomor telepon genggam Anda yang Anda berikan ketika Anda membuka akun di Platform, maupun setiap informasi terkait riwayat kesehatan Anda tunduk pada Kebijakan Privasi, yang merupakan bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini. Anda memahami dan setuju bahwa penggunaan Anda atas Platform juga harus mematuhi Kebijakan Privasi Kami, sebagaimana dapat diperbaharui dari waktu ke waktu.</li>
                          <li>iv. Kami dapat menghentikan atau membatasi proses registrasi atau penggunaan Platform oleh Anda jika ditemukan pelanggaran dari Ketentuan Penggunaan ini atau peraturan perundang-undangan yang berlaku.</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>KETENTUAN PENGGUNAAN PLATFORM
              <ol className="list-inside list-none space-y-1 pl-5 font-light">
                <li>a. Anda menyatakan dan menjamin bahwa Anda adalah individu yang memiliki hak untuk mengadakan perjanjian yang mengikat berdasarkan hukum Negara Republik Indonesia dan bahwa Anda telah berusia minimal 21 (dua puluh satu) tahun atau sudah menikah dan tidak berada di bawah perwalian atau pengampuan. Jika Anda berusia di bawah 21 (dua puluh satu) tahun dan belum menikah, Anda menyatakan dan menjamin bahwa Anda telah memperoleh izin dari orang tua atau wali hukum Anda, kecuali Anda menyatakan sebaliknya. Dengan memberikan persetujuan, orang tua atau wali hukum Anda setuju untuk bertanggung jawab atas
                  <ol className="list-outside list-none space-y-1 pl-5 font-light">
                      <li>
                          i. semua tindakan Anda terkait akses ke dan penggunaan Platform dan/atau Layanan;
                      </li>
                      <li>
                         ii. biaya apa pun terkait penggunaan Anda atas Layanan apa pun; dan
                      </li>
                      <li>
                        iii. kepatuhan Anda terhadap Ketentuan Penggunaan ini. Kami berhak untuk menutup atau membatalkan pendaftaran atas akun Anda apabila hal tersebut tidak benar. Anda selanjutnya menyatakan dan menjamin bahwa Anda memiliki hak, wewenang dan kapasitas untuk menggunakan Layanan dan akan senantiasa mematuhi Ketentuan Penggunaan ini. Jika Anda mendaftarkan atas nama suatu badan usaha, Anda juga menyatakan bahwa Anda berwenang untuk bertindak untuk dan atas nama badan hukum tersebut dan untuk mengadakan dan mengikatkan badan hukum/entitas tersebut pada Ketentuan Penggunaan.
                      </li>
                    </ol>
                </li>
                <li>
                  b. Anda dapat menggunakan Platform dengan terlebih dahulu melakukan pendaftaran yang disertai pemberian informasi data pribadi Anda yang dapat dipertanggung jawabkan secara hukum sebagaimana diminta dalam Platform (“Data Pribadi”). Informasi terkait Data Pribadi yang diberikan hanya akan digunakan oleh Kami dan/atau Penyedia Layanan untuk pemberian layanan-layanan dalam Platform dan untuk tujuan lain yang telah Anda setujui sesuai dengan ketentuan perundang-undangan yang berlaku. Kebijakan Privasi (sebagaimana diperbarui dari waktu ke waktu) menjadi bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini. 
                </li>
                <li>
                  c. Setelah mendaftarkan diri pada Platform, Anda akan mendapatkan suatu akun pribadi yang dapat diakses dengan One Time Password (OTP) yang akan dikirimkan ke alamat email Anda. Kami harap Anda tidak menyerahkan, mengalihkan maupun memberikan wewenang kepada orang lain untuk menggunakan identitas atau menggunakan akun Anda. Anda wajib menjaga kerahasiaan kata sandi akun Anda dan setiap identifikasi yang kami berikan kepada Anda atas akun atau Data Pribadi Anda. 
                </li>
                <li>
                  d. Pihak Ketiga adalah pihak yang bekerja sama dengan Loop Health untuk meningkatkan kualitas layanan platform bagi pengguna. Anda sepakat bahwa Pihak Ketiga dapat ikut serta dalam layanan bagi pelanggan. Jika terjadi perselisihan dengan Pihak Ketiga, Loop Health menjamin layanan pada platform tidak akan terganggu.
                </li>
                <li>
                  e. Anda memiliki tanggung jawab atas setiap penggunaan akun Anda dalam Platform. Apabila Anda tidak memiliki kontrol atas akun Anda oleh sebab apapun, maka Anda diharuskan untuk melaporkannya kepada Kami. Apabila terjadi penyalahgunaan akun Anda oleh pihak ketiga manapun sebelum pelaporan terjadi, maka penggunaan akun pada periode tersebut akan menjadi tanggung jawab Anda sepenuhnya.
                </li>
                <li>
                  f. Anda menyetujui untuk tidak mendistribusikan demi tujuan komersial, baik dalam bentuk aslinya maupun mereproduksinya, tanpa kesepakatan dengan Loop Health.
                </li>
                <li>
                  g. Anda tidak diperkenankan untuk membahayakan, menyalahgunakan, mengubah atau memodifikasi Platform dengan cara apapun. Kami dapat menutup, membatalkan akun Anda dan/atau melarang Anda untuk menggunakan Platform lebih lanjut jika Anda tidak mematuhi Ketentuan Penggunaan ini. 
                </li>
                <li>
                  h. Dengan menggunakan Platform, maka Anda memahami, setuju, dan tunduk sesuai yang dipersyaratkan pada Kebijakan Privasi Kami sebagaimana dapat diperbaharui dari waktu ke waktu.
                </li>
                <li>
                  i. Anda akan menggunakan Platform hanya untuk tujuan mendapatkan Layanan, dan tidak akan menyalahgunakan atau menggunakan Platform untuk aktivitas yang bertentangan dengan hukum, termasuk namun tidak terbatas kepada tindak pidana pencucian uang, pencurian, penggelapan, terorisme maupun penipuan. Anda juga sepakat bahwa Anda tidak akan melakukan pemesanan palsu melalui Platform dan tidak akan melakukan perbuatan melawan hukum melalui Platform.
                </li>
                <li>
                  j. Anda mengetahui dan setuju bahwa setiap informasi dalam bentuk apapun, termasuk namun tidak terbatas pada video, audio, gambar atau tulisan yang ada dalam Platform memiliki hak atas kekayaan intelektual (termasuk namun tidak terbatas kepada hak atas merek dan hak cipta) masing-masing. Anda tidak diperbolehkan untuk menggunakan, mengubah, memfasilitasi, menyebarluaskan dan/atau memutilasi hak atas kekayaan intelektual tersebut tanpa izin dari pemilik hak atas kekayaan intelektual tersebut sebagaimana diatur dalam peraturan perundang-undangan yang berlaku.
                </li>
                <li>
                  k. Anda menyetujui penyimpanan seluruh percakapan dengan ahli gizi Loop Health secara otomatis, yang akan digunakan untuk kepentingan legal dan peningkatan layanan. Loop Health menjamin kerahasiaan percakapan Anda dan ahli gizi, serta tidak akan mendistribusikannya kepada publik.
                </li>
                <li>
                  l. Pada saat mengakses dan menggunakan Platform termasuk setiap fitur dan layanannya, Anda tidak diperkenankan untuk:
                  <ol className="list-outside list-none space-y-1 pl-5 font-light">
                    <li>
                      i. mengalihkan akun Anda di Platform kepada pihak lain tanpa persetujuan terlebih dahulu dari Kami.
                    </li>
                    <li>
                      ii. menyebarkan virus, spam atau teknologi sejenis lainnya yang dapat merusak dan/atau merugikan Platform dan pengguna Platform lainnya.
                    </li>
                    <li>
                      iii. memasukkan atau memindahkan fitur pada Platform tanpa persetujuan dari Kami.
                    </li>
                    <li>
                      iv. menempatkan informasi atau aplikasi lain yang melanggar hak kekayaan intelektual pihak lain di dalam Platform.
                    </li>
                    <li>
                      v. mengambil atau mengumpulkan data pribadi dari pengguna Platform lain, termasuk tetapi tidak terbatas pada alamat surel, tanpa persetujuan dari pengguna tersebut.
                    </li>
                    <li>
                      vi. menggunakan Platform untuk hal-hal yang dilarang berdasarkan hukum dan undang-undang yang berlaku.
                    </li>
                    <li>
                      vii. menggunakan Platform untuk mendistribusikan iklan atau materi lainnya.
                    </li>
                    <li>
                      viii. Seluruh artikel kesehatan yang Kami tampilkan di Platform Kami digunakan untuk mengedukasi pengguna dan bukan merupakan pengganti dari saran, diagnosis atau perawatan medis dari tenaga kesehatan. 
                    </li>
                  </ol>
                </li>
                <li>
                  m. Seluruh informasi obat yang Kami tampilkan di Platform Kami adalah bersifat informasi umum sesuai yang tercantum pada kemasan obat.
                </li>
                <li>
                  n. Platform memiliki tautan dengan situs-situs yang dioperasikan oleh pihak ketiga. Tautan tersebut tersedia untuk kenyamanan anda dan hanya akan digunakan untuk menyediakan akses ke pihak ketiga dan bukan untuk tujuan lainnya. Kualitas, isi maupun informasi dari Produk atau layanan tersebut akan disediakan oleh situs yang dioperasikan oleh pihak ketiga.
                </li>
                <li>
                  o. Anda menyetujui bahwa setiap perjanjian, pemberitahuan, maupun bentuk komunikasi lain dari Loop Health untuk Anda sebagai pengguna, telah memenuhi ketentuan hukum, dengan kekuatan hukum yang sama.
                </li>
                <li>
                  p. Akun Loop Health Anda
                  <ol className="list-outside list-none space-y-1 pl-5 font-light">
                    <li>
                       i. Anda dapat memperoleh one-time password (OTP) dari Loop Health untuk pembuatan akun, setelah perusahaan tempat Anda bekerja dan perusahaan asuransi rekanan mendaftarkan Anda.
                    </li>
                    <li>
                       ii. Akun Loop Health Anda hanya dapat digunakan oleh Anda dan tidak bisa dialihkan kepada orang lain dengan alasan apapun. Kami berhak menolak untuk memfasilitasi jika Kami mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Anda telah mengalihkan atau membiarkan Akun Anda digunakan oleh orang lain.
                    </li>
                    <li>
                      iii. Keamanan dan kerahasiaan Akun Loop Health Anda, termasuk nama terdaftar, nomor telepon genggam terdaftar, serta kode verifikasi yang dihasilkan dan dikirim oleh sistem Kami sepenuhnya merupakan tanggung jawab pribadi Anda. Semua kerugian dan risiko yang ada akibat kelalaian Anda menjaga keamanan dan kerahasiaan sebagaimana disebutkan ditanggung oleh Anda sendiri. Dalam hal demikian, Kami akan menganggap setiap penggunaan atau pesanan yang dilakukan melalui Akun Anda sebagai permintaan yang sah dari Anda
                    </li>
                    <li>
                      iv. Segera beritahukan Kami jika Anda mengetahui atau menduga bahwa Akun Anda telah digunakan tanpa sepengetahuan dan persetujuan Anda. Kami akan melakukan tindakan yang Kami anggap perlu dan dapat Kami lakukan terhadap penggunaan tanpa persetujuan tersebut.
                    </li>
                  </ol>
                </li>
              </ol>
            </li> 
            <li className="font-light">LAYANAN
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. Fitur Konsultasi dengan Ahli Gizi
                        <ol className="list-outside list-none space-y-1 pl-5 font-light">
                          <li>i. Fitur ini memfasilitasi para ahli gizi untuk berinteraksi dengan Anda melalui chat yang dapat diakses melalui Platform;</li>
                          <li>ii. Anda dapat menghubungi para ahli gizi melalui fitur konsultasi ketika mereka berstatus online;</li>
                          <li>iii. Anda dapat membatalkan konsultasi dengan ahli gizi maksimal 60 (enam puluh) menit sebelum jadwal untuk berkonsultasi dimulai.</li>
                          <li>iv. Ahli gizi Kami dapat membatalkan booking konsultasi maksimal 60 (enam puluh) menit sebelum jadwal untuk berkonsultasi dimulai. </li>
                          <li>v. Jika Anda tidak bergabung pada sesi konsultasi yang telah Anda pilih maka sesi Anda dianggap hangus, dan Anda harus membuat booking baru untuk dapat berkonsultasi dengan ahli gizi.</li>
                          <li>
                            vi. Kami akan mengirimkan pemberitahuan terkait janji konsultasi dengan ahli gizi melalui push notification pada perangkat elektronik Anda. Untuk dapat menerima push notification yang Kami kirimkan maka Anda harus mengaktifkan push notification tersebut 
                          </li>
                          <li>
                            vii.Anda mengetahui dan menyetujui bahwa fitur ini tidak menggantikan pemeriksaan dan pengobatan dengan dokter pada umumnya atau tatap muka secara langsung
                          </li>
                          <li>
                            viii. Kami akan berupaya semaksimal mungkin agar dokter rekanan yang terdaftar pada Platform dapat memberikan tanggapan atas pertanyaan Anda sesegera mungkin. Namun demikian, Kami tidak menyarankan Anda menggunakan Platform untuk kondisi medis darurat
                          </li>
                          <li>
                            ix. Layanan Kami tidak bersifat memaksa atau pun mengikat. Keputusan untuk menggunakan Layanan di Platform sepenuhnya berada di tangan Anda
                          </li>
                          <li>
                             x. Anda memahami bahwa Anda perlu memberikan informasi secara lengkap, jelas dan akurat ketika melakukan percakapan ahli gizi kami
                          </li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li className="font-light">KETENTUAN KONSULTASI
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. Fitur Konsultasi dengan Ahli Gizi
                        <ol className="list-outside list-none space-y-1 pl-5 font-light">
                          <li>i. Saat menghubungi ahli gizi melalui fitur konsultasi, Anda dapat mengirimkan gambar yang berkaitan dengan kondisi medis Anda dengan format png dan jpeg.</li>
                          <li>ii. Setelah sesi Konsultasi dengan Ahli Gizi selesai, dokter dapat memberikan catatan dan saran-saran terkait dengan kondisi medis Anda.</li>
                          <li>iii. Ahli gizi dapat melakukan Follow Up kepada Anda untuk mengecek kondisi kesehatan Anda setelah dilakukannya sesi konsultasi.</li>
                          <li>iv. Kami dapat memblokir atau membatalkan akun Anda apabila terdapat penyalahgunaan fitur Konsultasi dengan ahli gizi pada akun Anda. </li>
                          <li>v. Ketepatan serta keakuratan ahli gizi dalam memberikan rekomendasi akan bergantung pada informasi yang diberikan oleh Anda.</li>
                        </ol>
                    </li>
                </ol>
            </li> 
            <li className="font-light">KETENTUAN PERMINTAAN PENGAJUAN STRIP DAN LANCET
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. Fitur Pengajuan Strip dan Lancet
                        <ol className="list-outside list-none space-y-1 pl-5 font-light">
                          <li>i. Saat Anda mengajukan permintaan suplai strip dan lancet melalui aplikasi Loop untuk kebutuhan tes gula darah Anda secara rutin.</li>
                          <li>ii. Pihak Loop akan melakukan pengecekan terlebih dahulu dengan melihat data penggunaan strip dan lancet dari aktivitas penginputan data input gula darah yang Anda lakukan.</li>
                          <li>iii. Pihak Loop akan memberikan konfirmasi pengajuan suplai strip dan lancet disetujui ataupun ditolak.</li>
                          <li>iv. Permintaan pengajuan strip akan disetujui dan dikonfirmasi dilakukan jika: 
                              <ol className="list-outside list-decimal space-y-1 pl-5 font-light">
                                 <li>
                                  Data input gula darah Anda telah mencapai 90 kali input data dalam kurun waktu kurang lebih 90 hari.
                                 </li>
                                 <li>
                                 Konfirmasi persetujuan dan penolakan permintaan pengajuan strip dan lancet akan diinformasikan melalui akun Whatsapp Business aplikasi Loop ke nomor Whatsapp pengguna aplikasi Loop.
                                 </li>
                                 <li>
                                  Informasi konfirmasi disetujui ataupun ditolaknya permintaan pengajuan strip oleh pihak Loop kepada pengguna aplikasi selambat-lambatnya adalah 2x24 jam ke pengguna aplikasi Loop.
                                 </li>
                              </ol>
                          </li>
                          <li>v. Pengiriman suplai strip dan lancet akan diproses setelah permintaan pengajuan strip dan lancet disetujui, proses pengiriman selambat-lambatnya 3 hari kerja.</li>
                        </ol>
                    </li>
                </ol>
            </li> 
            <li className="font-light">LARANGAN DALAM PENGGUNAAN DAN AKSES TERHADAP PLATFORM
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. Anda dilarang melakukan rekayasa apapun terhadap platform Loop Health.
                    </li>
                    <li>b. Anda dilarang mengambil sebagian atau keseluruhan isi dan layanan platform Loop Health dan menyebarluaskannya seakan-akan memang diproduksi oleh Loop Health.
                    </li>
                    <li>c. Anda dilarang memanfaatkan informasi serta layanan konsultasi yang tersedia di platform Loop Health selain untuk tujuan pengelolaan kesehatan, terutama dalam hal diabetes tipe-2.
                    </li>
                    <li>d. Anda dilarang mengalihkan maupun meminjamkan akun Anda kepada pihak ketiga.
                    </li>
                    <li>
                      e. Anda dilarang menggandakan informasi yang berkaitan dengan layanan Hak Kekayaan Intelektual Loop Health untuk tujuan tertentu, tanpa seizin Loop Health.
                    </li>
                    <li>
                      f. Anda dilarang menggunakan layanan konsultasi Loop Health untuk perbuatan melawan hukum, termasuk dan tidak terbatas untuk mengintimidasi, mengancam, maupun melontarkan perkataan kasar.
                    </li>
                    <li>
                      g. Anda dilarang menyebarluaskan informasi dari Pihak Ketiga yang tidak berhubungan dengan layanan Loop Health, kepada Ahli Gizi Loop Health.
                    </li>
                    <li>
                      h. Anda dilarang memasukkan virus maupun gangguan lainnya ke dalam platform Loop Health, yang mampu mengakibatkan hambatan layanan bagi para pengguna.
                    </li>
                    <li>
                      i. Loop Health akan mengambil salah satu, beberapa, atau seluruh langkah di bawah ini terhadap Anda, apabila Anda kedapatan melakukan pelanggaran-pelanggaran pada poin (A) sampai dengan (H) di atas:
                      <ol className="list-inside list-none space-y-1 pl-5 font-light">
                         <li>
                            i. Menunda pemberian layanan konsultasi kepada Anda;
                         </li>
                         <li>
                           ii. Menghentikan pemberian layanan konsultasi kepada Anda;
                         </li>
                         <li>
                           iii. Menutup akun Anda, dengan atau tanpa notifikasi terlebih dahulu;
                         </li>
                         <li>
                           iv. Menempuh jalur hukum sesuai peraturan perundang-undangan yang berlaku di Republik Indonesia
                         </li>
                      </ol>
                    </li>

                </ol>
            </li> 
            <li className="font-light">HAK DAN KEKAYAAN INTELEKTUAL
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>a. ami adalah pemegang hak lisensi atas nama, ikon, dan logo “Loop” serta fitur konsultasi dengan ahli gizi dalam Platform, yang mana merupakan hak cipta dan merek dagang yang dilindungi undang-undang Republik Indonesia. Anda dilarang untuk menggunakan, memodifikasi, dan/atau memasang nama, ikon, logo, atau merek tersebut tanpa persetujuan tertulis dari Kami.</li>
                    <li>b. Seluruh hak atas kekayaan intelektual yang terdapat dalam Platform berdasarkan hukum negara Republik Indonesia, termasuk dalam hal ini adalah kepemilikan hak kekayaan intelektual atas seluruh source code Platform dan hak kekayaan intelektual terkait Platform. Untuk itu, Anda dilarang untuk melakukan pelanggaran atas hak kekayaan intelektual yang terdapat pada Platform ini, termasuk melakukan modifikasi, karya turunan, mengadaptasi, menduplikasi, menyalin, menjual, membuat ulang, meretas, menjual, dan/atau mengeksploitasi Platform termasuk penggunaan Platform atas akses yang tidak sah, meluncurkan program otomatis atau script, atau segala program apapun yang mungkin menghambat operasi dan/atau kinerja Platform, atau dengan cara apapun memperbanyak atau menghindari struktur navigasi atau presentasi dari Platform atau isinya.
                    </li>
                    <li>
                      c. Anda hanya diperbolehkan untuk menggunakan Platform semata-mata untuk kebutuhan pribadi dan tidak dapat dialihkan.
                    </li>
                    <li>
                      d. Kami dapat mengambil tindakan hukum terhadap setiap pelanggaran yang dilakukan oleh Anda terkait dengan hak kekayaan intelektual terkait Platform.
                    </li>
                </ol>
            </li> 

            <li className="font-light">PEMBERITAHUAN
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>
                        a. Semua pemberitahuan atau permintaan informasi kepada atau tentang Kami akan diproses jika dibuat secara tertulis dan dikirimkan ke alamat kami di:Satrio Tower, 26th Floor, Unit C&D Kav. C4, Jl. Prof. Dr. Satrio, Desa/Kelurahan Kuningan Timur, Kec. Setiabudi, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12950atau alamat surat elektronik Kami di: hello@loophealth.id. 
                    </li>
                    <li>
                       b. Kami telah memasang pemberitahuan tersebut di Platform yang dapat diakses oleh umum tanpa dikenakan biaya.
                    </li>
                </ol>
            </li>

            <li className="font-light">FUNGSI PLATFORM
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                   <li>
                   Kami senantiasa melakukan upaya untuk menjaga Platform ini berfungsi dan berjalan lancar. Perlu diketahui bahwa Platform dan/atau fitur Layanan Kami dapat sewaktu-waktu tidak tersedia yang disebabkan oleh berbagai alasan, termasuk namun tidak terbatas pada keperluan pemeliharaan atau masalah teknis, dan situasi ini berada di luar kuasa kami.
                   </li>
                </ol>
            </li> 

            <li className="font-light">FUNGSI AKUN
                <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>
                    Anda tidak akan menggunakan Platform pada perangkat atau sistem operasi yang telah dimodifikasi diluar perangkat atau konfigurasi sistem operasi dan konfigurasi Kami. Hal ini mencakup perangkat yang telah melalui proses “rooted” atau “jail-broken”. Perangkat rooted atau jail-broken adalah perangkat yang telah dibebaskan dari pembatasan yang dikenakan oleh penyedia layanan perangkat dan yang dimanufaktur tanpa persetujuan penyedia layanan perangkat. Penggunaan Platform pada perangkat rooted atau jail-broken dapat mengkompromisasi keamanan dan berujung pada transaksi penipuan.
                    </li>
                </ol>
            </li> 

          </ol>

          <br />
          <p>
          Kami tidak bertanggung jawab atas pengunduhan dan penggunaan Platform pada perangkat rooted atau jail-broken dan resiko penggunaan anda terhadap perangkat rooted atau jail-broken sepenuhnya adalah resiko Anda. Anda mengerti dan setuju bahwa Kami tidak bertanggung jawab atas segala kehilangan atau setiap konsekuensi lain yang diderita atau disebabkan oleh anda sebagai akibat dari penggunaan Platform pada perangkat rooted atau jail-broken dan Kami mempunyai diskresi untuk menghentikan penggunaan Anda terhadap Platform pada perangkat rooted atau jail-broken dan memblokir perangkat rooted atau jail-broken untuk menggunakan Platform.
          </p>
          <br/>

          <ol type="1" className="list-decimal list-inside space-y-4">
            <li>
            Layanan Pengaduan Konsumen Direktorat Jenderal Perlindungan Konsumen dan Tata Tertib Niaga Kementerian Perdagangan RINomor Whatsapp Ditjen PTKN: +62 853 1111 1010
            </li>
            <li>
              PENUTUP
              <ol className="list-inside list-none space-y-1 pl-5 font-light">
                    <li>
                    a. Ketentuan Penggunaan ini diatur dan ditafsirkan serta dilaksanakan berdasarkan hukum yang berlaku di Negara Republik Indonesia dan Anda dengan tegas menyetujui bahwa bahwa ketentuan Pasal 1266 Kitab Undang-Undang Hukum Perdata dan ketentuan lainnya yang mewajibkan adanya pengesahan atau persetujuan pengadilan untuk dapat mengakhiri Ketentuan Penggunaan tidak berlaku terhadap Ketentuan Penggunaan ini.
                    </li>
                    <li>
                    b. Segala sengketa yang berkaitan dengan Ketentuan Penggunaan ini, diselesaikan secara musyawarah untuk mufakat atau melalui Badan Arbitrase Nasional Indonesia (BANI), sesuai dengan prosedur yang berlaku di BANI. Apabila kedua belah pihak tidak sepakat untuk menyelesaikannya sengketa di BANI, maka sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta Selatan.
                    </li>
                </ol>
            </li>
          </ol>


            

      </div>
      <Footer />
  </Main>
);

export default TermsCondition;
