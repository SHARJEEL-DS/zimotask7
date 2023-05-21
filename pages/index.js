import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { AiOutlineGift } from 'react-icons/Ai'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "./styles.css";
// import required modules
import { Pagination } from "swiper";

export default function Home() {
  return (
    <section className="container px-4 py-10 mx-auto">
      {/* <Hea title="What i do" /> */}
      <div className="text-[35px]  ml-10"> <span className="text-[35px] font-bold">Features</span> <span className=" ml-96">view all house  </span></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SwiperSlide>
            <div>
              <Image
                src="/b.png"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-32  rounded ml-12  ">
                25.gp buy now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/b.png"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-32  rounded ml-12  ">
                25.gp buy now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/b.png"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-32  rounded ml-12  ">
                25.gp buy now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/b.png"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-32  rounded ml-12  ">
                25.gp buy now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/b.png"
                alt=""
                width="500"
                layout="fixed"
                height="500"
                className="flex flex-col gap-4 px-8 py-10 text-white showdow-lg"
              />
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-32  rounded ml-12  ">
                25.gp buy now
              </button>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}
