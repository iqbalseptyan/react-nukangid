import React from "react";
import { Link } from "react-router-dom";

// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import { FaStar } from "react-icons/fa";

import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project2.png";

import interior1 from "../../../images/interior/conwood.png";
import interior2 from "../../../images/interior/hplduco.png";
import interior3 from "../../../images/interior/verticalgarden.png";
import interior4 from "../../../images/interior/grass.png";
import interior5 from "../../../images/interior/vynil.png";

import construction1 from "../../../images/construction/borongan.png";
import construction2 from "../../../images/construction/atap.png";
import construction3 from "../../../images/construction/rumah.png";
import construction4 from "../../../images/construction/kanopi.png";
import construction5 from "../../../images/construction/baja.png";
import construction6 from "../../../images/construction/kolam.png";

import otomation1 from "../../../images/otomation/smarthome.png";
const datas = {
  project: [
    {
      id: 1,
      title: "Percantik Ruanganmu Dengan Material Conwood",
      img: project1,
    },
    { id: 2, title: "Ciptakan Suasana Natrual Di Hunian Anda", img: project2 },
    { id: 3, title: "Project3", img: project3 },
  ],
  interior: [
    {
      id: 1,
      title: "Material Conwood",
      subtitle: "Design & pengerjaan material conwood",
      img: interior1,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      title: "Multiplek HPL/Duco",
      subtitle: "Design & pengerjaan material + HPL/Duco",
      img: interior2,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 3,
      title: "Vertical Garden",
      subtitle: "Design & pengerjaan Vertical Garden",
      img: interior3,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 4,
      title: "Rumput Sintetis",
      subtitle: "Design & pengerjaan Rumput Sintetis",
      img: interior4,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 5,
      title: "Lantai Vynil",
      subtitle: "Design & pengerjaan Lantai Vynil",
      img: interior5,
      star: [1, 2, 3, 4, 5],
    },
  ],
  construction: [
    {
      id: 1,
      title: "Tukang Harian/Borongan",
      subtitle: "Jasa Tukang Harian atau Borongan",
      img: construction1,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      title: "Pengerjaan Dak Atap",
      subtitle: "Jasa Pengerjaan Dak Atap",
      img: construction2,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 3,
      title: "Pembangunan Rumah",
      subtitle: "Jasa pengerjaan Pembangunan Rumah",
      img: construction3,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 4,
      title: "Kanopi & Pagar Rumah",
      subtitle: "Design & jasa pengerjaan Kanopi dan Pagar Rumah",
      img: construction4,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 5,
      title: "Kontruksi Baja",
      subtitle: "Design & jasa pengerjaan Kontruksi Baja",
      img: construction5,
      star: [1, 2, 3, 4, 5],
    },
    {
      id: 6,
      title: "Kolam Renang",
      subtitle: "Design & jasa pengerjaan Kolam Renang",
      img: construction6,
      star: [1, 2, 3, 4, 5],
    },
  ],
  otomation: [
    {
      id: 1,
      title: "Smart Home",
      subtitle: "Design & pengerjaan Smart Home",
      img: otomation1,
      star: [1, 2, 3, 4, 5],
    },
  ],
};

const Services = () => {
  return (
    <>
      <section className="mx-auto px-8 mt-20 mb-7">
        <div className="w-80">
          <ul className="h-8 border-b-2 flex list-none flex-wrap flex-row justify-between">
            <li className="h-8 border-b-2 border-yellow-300 ">
              <Link to="/services">Layanan Kami</Link>
            </li>
            <li className="border-b-2 hover:border-yellow-300">
              <Link to="/tukang">Cari Tukang</Link>
            </li>
            <li className="border-b-2 hover:border-yellow-300">
              <Link to="/ecommerce">E-Commerce</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto px-8 pb-8">
        <p className="text-xl font-bold mb-5 text-gray-600">Popular Project</p>
        <Swiper
          className="mySwiper"
          slidesPerView={"auto"}
          spaceBetween={80}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {datas.project.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="bg-light-blue-300 ">
                  <img
                    className="object-fill h-96 w-full"
                    src={data.img}
                    alt="project"
                  />
                  <div className="absolute bottom-0 px-10 py-20 md:w-96">
                    <p className="font-bold text-white text-3xl break-words">
                      {data.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="mx-auto px-8 pb-8">
        <p className="text-xl font-bold mb-5 text-gray-600">
          Interior & Exterior
        </p>
        <Swiper
          className=""
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {datas.interior.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="p-2 flex flex-wrap transform transition duration-500 hover:scale-105">
                  <div className="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-yellow-300 hover:text-white cursor-pointer  ">
                    <img
                      className="w-full object-cover object-center lg:h-44"
                      src={data.img}
                      alt="interior and exterior"
                    />
                    <div className="p-2">
                      <h4 className="font-bold text-xl">{data.title}</h4>
                      <p className="text-gray-500 text-sm">{data.subtitle}</p>
                      <div className="flex py-2">
                        {data.star.map(() => {
                          return <FaStar className="text-yellow-200" />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="mx-auto px-8 pb-8">
        <p className="text-xl font-bold mb-5 text-gray-600">
          Construction Service
        </p>
        <Swiper
          className=""
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {datas.construction.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="p-2 flex flex-wrap transform transition duration-500 hover:scale-105">
                  <div className="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-yellow-300 hover:text-white cursor-pointer  ">
                    <img
                      className="w-full object-cover object-center lg:h-44"
                      src={data.img}
                      alt="interior and exterior"
                    />
                    <div className="p-2">
                      <h4 className="font-bold text-xl">{data.title}</h4>
                      <p className="text-gray-500 text-sm">{data.subtitle}</p>
                      <div className="flex py-2">
                        {data.star.map(() => {
                          return <FaStar className="text-yellow-200" />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="mx-auto px-8 pb-8">
        <p className="text-xl font-bold mb-5 text-gray-600">
          Building Otomations
        </p>
        <Swiper
          className=""
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {datas.otomation.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="p-2 flex flex-wrap transform transition duration-500 hover:scale-105">
                  <div className="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-yellow-300 hover:text-white cursor-pointer  ">
                    <img
                      className="w-full object-cover object-center lg:h-44"
                      src={data.img}
                      alt="interior and exterior"
                    />
                    <div className="p-2">
                      <h4 className="font-bold text-xl">{data.title}</h4>
                      <p className="text-gray-500 text-sm">{data.subtitle}</p>
                      <div className="flex py-2">
                        {data.star.map(() => {
                          return <FaStar className="text-yellow-200" />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Services;
