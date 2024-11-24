import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import logo from "../src/assets/LogoFutsal.png";
import devicesImg from "./assets/image-devices.png";
import futsal1Img from "./assets/Futsal1.jpeg";
import ModulBooking from "./components/ModulBooking";
import basket1Img from "./assets/BP5AE2S20180923_103743.jpg";
import ModalForm from "./components/ModalForm";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import lapang2 from "../src/assets/LapangFutsalVinil (1).jpg";
import lapang3 from "../src/assets/Lapang3FutsalSintetis.jpg";
import available from "../src/assets/Available.jpg";
import musholaSvg from "../src/assets/musholaSvg.svg";
import parkingSvg from "../src/assets/parkingSvg.svg";
import canteenSvg from "../src/assets/canteenSvg.svg";
import wcSvg from "../src/assets/wcSvg.svg";
import facebook from "../src/assets/icon-facebook.svg";
import instagram from "../src/assets/icon-instagram.svg";
import twitter from "../src/assets/icon-twitter.svg";

export const h3Style = "mb-8 text-3xl font-bold text-darkGrayishBlue md:text-5xl duration-300 transition";
export const sectionContainer = "max-w-3xl mx-auto leading-9 text-center text-grayishBlue ";
export const buttonContainer = "flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4";

function App() {
  const [dataField, setDataField] = useState();
  const [truthyModal, setTruthyModal] = useState(false);

  function pickedField(field) {
    setDataField(field);
  }

  function onCloseModal() {
    setTruthyModal((prevState) => !prevState);
  }
  console.log(dataField);

  const heroRef = useRef(null);
  const snippetRef = useRef(null);
  const featuresRef = useRef(null);
  const modulBooking1Ref = useRef(null);
  const modulBooking2Ref = useRef(null);
  const devicesRef = useRef(null);
  const superchargeHeaderRef = useRef(null);
  const superchargeItemsRef = useRef(null);

  const isHeroInView = useInView(heroRef);
  const isSnippetInView = useInView(snippetRef);
  const isFeaturesInView = useInView(featuresRef);
  const isModulBooking1InView = useInView(modulBooking1Ref, { once: true });
  const isModulBooking2InView = useInView(modulBooking2Ref, { once: true });
  const isdevicesInView = useInView(devicesRef);
  const isSuperchargeHeaderInView = useInView(superchargeHeaderRef, { once: true });
  const isSuperchargeItemsInView = useInView(superchargeItemsRef, { once: true });

  console.log(isModulBooking2InView);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section id="hero">
          <div className="absolute inset-0 md:backdrop-blur-sm md:bg-white/20 z-0  h-[60rem]"></div>
          <div className={`${sectionContainer} md:mb-[40rem] mb-72 pt-36 md:pt-16 px-10 md:px-0  relative z-10  `}>
            <div className={`transition-transform duration-1000 ${isHeroInView ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-full"}`} ref={heroRef}>
              <img src={logo} alt="" className="mx-auto my-16 max-w-44" />

              <h3 className="mb-8 text-3xl font-extrabold text-black md:text-5xl duration-300 transition font-sans">Taman Sari Futsal N Basket</h3>

              <p className="max-w-3xl mx-auto md:mb-10  mb-24 text-2xl md:text-black text-grayishBlue">
                Tempat sempurna untuk menikmati futsal dan basket dengan lapangan premium dan fasilitas terbaik. Untuk setiap momen olahraga yang berkelas.
              </p>

              {/* Button Container */}
              <div className={buttonContainer}>
                <a href="#booking" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                  Sewa Sekarang !
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Snippets Section */}
        <section id="snippet">
          <div className={`${sectionContainer} my-20 px-10 md:px-0 md:pt-20 `}>
            <div className={`${isSnippetInView ? "translate-x-0 opacity-100  duration-700" : "-translate-x-full opacity-0"}`}>
              <h3 className={h3Style}>Nikmati Pengalaman Terbaik Bermain Futsal dan Basket</h3>

              <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue" ref={snippetRef}>
                Kami membantu Anda menemukan dan memesan lapangan dengan fasilitas terbaik, waktu yang fleksibel, dan lokasi terdekat. Semua dirancang untuk memastikan Anda mendapatkan pengalaman bermain yang menyenangkan.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <div className={`${sectionContainer} px-10 md:px-0`}>
            <div className="   ">
              <div className="flex flex-col md:flex-row items-center mb-60 md:space-x-14">
                {/* Image */}
                <div>
                  <img
                    src={available}
                    alt=""
                    className={`" top-0 right-[50%] w-lg rounded-2xl scale-100 shadow-xl md:hover:shadow-2xl md:hover:scale-110 duration-200" ${isFeaturesInView ? "translate-x-0 opacity-100 duration-700" : "-translate-x-full opacity-0"}`}
                  />
                </div>

                {/* Items container */}
                <div className="flex flex-col md:space-y-12 mt-20 md:mt-0  justify-center md:pl-16  md:text-left space-y-16">
                  {/* Items 1 */}
                  <div className={`${isFeaturesInView ? "translate-x-0 opacity-100 duration-700" : "translate-x-full opacity-0"}`}>
                    <h5 className="md:text-2xl text-4xl mb-2 font-bold text-darkGrayishBlue">Pilih Lokasi Favorit</h5>
                    <p className="text-grayishBlue md:max-w-md text-xl">Temukan lapangan futsal dan basket terbaik di dekat Anda dengan fasilitas yang sesuai kebutuhan.</p>
                  </div>
                  {/* items 2 */}
                  <div ref={featuresRef} className={`${isFeaturesInView ? "translate-x-0 opacity-100 duration-700 delay-150" : "translate-x-full opacity-0"}`}>
                    <h5 className="md:text-2xl text-4xl mb-2 font-bold text-darkGrayishBlue">Jadwal Fleksibel</h5>
                    <p className="text-grayishBlue md:max-w-md text-xl">Pesan lapangan sesuai jadwal Anda, dengan slot waktu yang fleksibel, siang atau malam.</p>
                  </div>

                  {/* Items 3 */}
                  <div className={`${isFeaturesInView ? "translate-x-0 opacity-100 duration-700 delay-200" : "translate-x-full opacity-0"}`}>
                    <h5 className="md:text-2xl text-4xl mb-2 font-bold text-darkGrayishBlue">Fasilitas Lengkap</h5>
                    <p className="text-grayishBlue md:max-w-md text-xl">Nikmati pengalaman bermain di lapangan dengan fasilitas terbaik, mulai dari mushola, parkir luas, hingga tribun penonton.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modul Booking */}
        <section id="booking">
          <div ref={modulBooking1Ref} className={`${sectionContainer} my-48 space-y-10`}>
            <h3 className={`mb-8 text-3xl font-extrabold text-darkGrayishBlue md:text-5xl duration-300 transition font-sans ${isModulBooking1InView ? "translate-x-0 opacity-100 duration-1000 delay-200" : "translate-x-full opacity-0"}`}>
              Daftar Lapangan
            </h3>

            <div className={`flex flex-col md:flex-row md:px-0 px-10 md:space-x-7  justify-between space-y-10 md:space-y-0 ${isModulBooking1InView ? "translate-x-0 opacity-100 duration-1000 delay-200" : "translate-x-full opacity-0"}`}>
              {/* Items 1 */}
              <ModulBooking title="Lapang 1 Futsal Sintetis" image={futsal1Img} price="80000" fieldFn={pickedField} openFn={onCloseModal} secondPrice="100000" />
              {/* Items 2 */}
              <ModulBooking title="Lapang 2 Futsal Vinil" image={lapang2} price="100000" fieldFn={pickedField} openFn={onCloseModal} customImg="mb-14" secondPrice="120000" />
            </div>

            <div
              ref={modulBooking2Ref}
              className={`flex flex-col md:flex-row md:px-0 px-10  md:space-x-7   md:mt-16 justify-between space-y-10 md:space-y-0 ${
                isModulBooking2InView ? "translate-x-0 opacity-100 duration-1000 delay-200" : "-translate-x-full opacity-0"
              }`}
            >
              {/* Items 3 */}
              <ModulBooking title="Lapang 3 Futsal Sintetis" image={lapang3} price="80000" fieldFn={pickedField} openFn={onCloseModal} customImg="mb-16" secondPrice="100000" />
              {/* Items 4 */}
              <ModulBooking title="Lapang 4 Basket & Futsal" price="120000" image={basket1Img} fieldFn={pickedField} openFn={onCloseModal} secondPrice="150000" />
            </div>
          </div>
        </section>

        {/* Test modal */}
        <AnimatePresence>{truthyModal && <ModalForm img={dataField.image} title={dataField.title} price={dataField.price} secondPrice={dataField.secondPrice} openFn={onCloseModal} open={truthyModal} />}</AnimatePresence>

        {/* Access Anywhere Section */}
        <section id="access">
          <div className={`${sectionContainer} flex flex-col mb-20 px-10 md:px-0 md:pt-20`} ref={devicesRef}>
            <div className={`${isdevicesInView ? "translate-x-0 opacity-100 duration-700 " : "translate-x-full opacity-0"}`}>
              <h3 className={h3Style}>Booking Mudah, Kapan Saja dan Di Mana Saja</h3>
              <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                Nikmati kemudahan memesan lapangan futsal dan basket favorit Anda langsung dari smartphone atau komputer Anda. Dengan beberapa klik, jadwal Anda langsung tersimpan.
              </p>
            </div>

            <img src={devicesImg} alt="" className={`max-auto ${isdevicesInView ? "translate-x-0 opacity-100 duration-700 delay-500 scale-100" : "-translate-x-full opacity-0 scale-0"}`} />
          </div>
        </section>

        {/* Supercharge section */}
        <section id="supercharge">
          <div className={`${sectionContainer} mt-40 mb-64 md:mb-96 px-10 md:px-0 md:pt-20`}>
            {/* Judul dan Deskripsi dengan Ref */}
            <div
              ref={superchargeHeaderRef} // Ref untuk header
              className={`transition-all ${isSuperchargeHeaderInView ? "translate-y-0 opacity-100 duration-700" : "translate-y-10 opacity-0"}`}
            >
              <h3 className={h3Style}>Fasilitas Lengkap untuk Kenyamanan Anda</h3>
              <p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-center text-grayishBlue">
                Kami menyediakan berbagai fasilitas yang dirancang untuk memenuhi kebutuhan Anda selama bermain futsal atau basket. Nikmati pengalaman bermain tanpa khawatir dengan kenyamanan terbaik.
              </p>
            </div>

            {/* Items Container dengan Animasi Delay */}
            <div
              ref={superchargeItemsRef} // Ref untuk items container
              className="flex flex-col space-y-16 md:flex-col items-center"
            >
              {/* Wrapper Item 1-2 */}
              <div className="flex md:flex-row flex-col space-y-20 md:space-y-0 md:space-x-20">
                {/* Item 1 */}
                <div className={`flex flex-col space-y-5 items-center ${isSuperchargeItemsInView ? "translate-y-0 opacity-100 duration-700 delay-[100ms]" : "-translate-x-full opacity-0"}`}>
                  <img src={musholaSvg} alt="" className="mb-2 w-[30%]" />
                  <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">Mushola Nyaman</h5>
                  <p className="text-grayishBlue max-w-md">Dilengkapi dengan mushola bersih dan tenang, Anda dapat menunaikan ibadah dengan nyaman.</p>
                </div>

                {/* Item 2 */}
                <div className={`flex flex-col space-y-5 items-center ${isSuperchargeItemsInView ? "translate-y-0 opacity-100 duration-700 delay-[200ms]" : "-translate-x-full opacity-0"}`}>
                  <img src={parkingSvg} alt="" className="w-[30%]" />
                  <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">Area Parkir Luas</h5>
                  <p className="text-grayishBlue max-w-md">Parkir kendaraan Anda dengan mudah di area yang luas dan aman, cocok untuk motor maupun mobil.</p>
                </div>
              </div>

              {/* Wrapper Item 3-4 */}
              <div className="flex md:flex-row flex-col space-y-20 md:space-y-0 md:space-x-20">
                {/* Item 3 */}
                <div className={`flex flex-col space-y-5 items-center ${isSuperchargeItemsInView ? "translate-y-0 opacity-100 duration-700 delay-[300ms]" : "translate-x-full opacity-0"}`}>
                  <img src={canteenSvg} alt="" className="w-[25%]" />
                  <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">Canteen</h5>
                  <p className="text-grayishBlue max-w-md">Nikmati makanan dan minuman segar untuk mengisi energi Anda setelah bermain.</p>
                </div>

                {/* Item 4 */}
                <div className={`flex flex-col space-y-5 items-center ${isSuperchargeItemsInView ? "translate-y-0 opacity-100 duration-700 delay-[400ms]" : "translate-x-full opacity-0"}`}>
                  <img src={wcSvg} alt="" className="w-[25%]" />
                  <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">Toilet</h5>
                  <p className="text-grayishBlue max-w-md">Toilet bersih dengan perawatan teratur untuk kenyamanan Anda selama berada di area.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="bg-gray-50">
          <div className="flex items-center px-10 flex-col md:flex-row max-w-6xl py-10 mx-auto text-sm">
            {/* Logo */}
            <img src={logo} alt="Logo" className="max-w-[9%] md:mb-0 mb-10" />

            {/* Menus and Social Media */}
            <div className="flex flex-col items-center md:flex-row justify-between text-grayishBlue flex-1 mb-10 md:mb-0">
              {/* Menus */}
              <div className="flex flex-col md:flex-row md:ml-24 md:space-x-24 space-y-4 md:space-y-0">
                {/* Section 1 */}
                <div className="">
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#about" className="hover:text-strongCyan">
                        Tentang Kami
                      </a>
                    </div>
                    <div>
                      <a href="#faqs" className="hover:text-strongCyan">
                        FAQs
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="">
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#contact" className="hover:text-strongCyan">
                        Hubungi Kami
                      </a>
                    </div>
                    <div>
                      <a href="#privacy" className="hover:text-strongCyan">
                        Kebijakan Privasi
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="">
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#terms" className="hover:text-strongCyan">
                        Syarat & Ketentuan
                      </a>
                    </div>
                    <div>
                      <a href="#promo" className="hover:text-strongCyan">
                        Promo & Penawaran
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-between w-32 mt-6 md:mt-0">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" className="hover:duration-200 ficon" />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" className="hover:duration-200 ficon" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" className="hover:duration-200 ficon" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-strongCyan text-white text-center py-4">
            <a href="#booking" className="font-semibold hover:underline">
              Mulai Booking Sekarang
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
