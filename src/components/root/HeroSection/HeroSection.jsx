"use client";
import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./HeroSection.css";

// --> Swiper - URL/Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Container from "@/components/ui/Container";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/slider.json");
      const data = await res.json();
      setSlides(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <Swiper
        className="relative group banner-slider"
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative bg-cover bg-center flex items-center justify-center h-[450px] sm:h-[550px] md:h-[700px] lg:h-screen"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay div with pointer-events-none */}
              <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
              {/* Text container with relative positioning and selectable text */}
              <div className="relative z-10 text-white -top-14 md:-top-20">
                <Container>
                  <div className="mb-2 sm:mb-4 md:mb-8 lg:mb-10">
                    <p className="flex items-center gap-1 font-medium text-sm md:text-base">
                      <MdOutlineLocationOn /> {slide.location}
                    </p>
                  </div>
                  <div className="md:flex gap-10">
                    <div className="md:w-3/5">
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">
                        {slide.title}
                      </h1>
                    </div>
                    <div className="md:w-2/5 mt-3 sm:mt-5 md:mt-0 text-sm md:text-base">
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <Container>
          <div className="flex items-center justify-between relative -top-28 sm:-top-36 md:-top-44">
            <div className="text-sm md:text-base z-10 text-white flex items-center gap-1.5 sm:gap-3 md:gap-5 font-medium">
              <p className="whitespace-nowrap">Follow Our Socials</p>
              <p className="bg-white/10 p-1 sm:p-1.5 md:p-2 rounded-full">
                <FaXTwitter className="sm:text-lg md:text-xl text-white" />
              </p>
              <p className="bg-white/10 p-1 sm:p-1.5 md:p-2 rounded-full">
                <FaInstagram className="sm:text-lg md:text-xl text-white" />
              </p>
              <p className="bg-white/10 p-1 sm:p-1.5 md:p-2 rounded-full">
                <FaYoutube className="sm:text-lg md:text-xl text-white" />
              </p>
            </div>
            <div className="border-b-[1px] border-white w-24 sm:w-60 md:w-72 lg:w-80 h-[1px] z-10 pt-10 mr-4">
              <div className="bottom-0 right-10 md:right-20 absolute z-10 button-next-slide duration-500 w-10 h-10 text-white grid place-items-center cursor-pointer">
                <IoIosArrowBack className="text-lg sm:text-xl md:text-2xl font-semibold" />
              </div>
              <div className="bottom-0 right-0 absolute z-10 button-prev-slide duration-500 w-10 h-10 text-white grid place-items-center cursor-pointer">
                <IoIosArrowForward className="text-lg sm:text-xl md:text-2xl font-semibold" />
              </div>
            </div>
          </div>
        </Container>
      </Swiper>
    </div>
  );
};

export default HeroSection;
