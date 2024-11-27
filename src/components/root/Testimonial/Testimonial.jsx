"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import backgroundImage from "../../../../public/assets/images/testimonialBG.png";
import React from "react";

const testimonials = [
  {
    id: 1,
    image: "https://i.ibb.co/9gdS9vP/usman-yousaf-y-IOVi-GQmj-J4-unsplash.jpg",
    text: "This platform helped me plan my dream vacation effortlessly. Highly recommend!",
    name: "Emily Johnson",
    profession: "Travel Enthusiast",
  },
  {
    id: 2,
    image: "https://i.ibb.co/QcjbGs5/tofan-teodor-Kjht-Jp7-Rh3-E-unsplash.jpg",
    text: "I found the best tour packages here. Everything was perfectly organized!",
    name: "Michael Brown",
    profession: "Adventure Seeker",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/tMK85PF/rodney-gainous-jr-p-VF71muh-Rs-unsplash.jpg",
    text: "Thanks to this website, I had an unforgettable experience on my last trip!",
    name: "Sophia Lee",
    profession: "Frequent Traveler",
  },
];

const Testimonial = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto relative py-10">
        <h2 className="text-base text-cyan-500 italic text-center mb-2">
          Client Testimonial
        </h2>
        <p className="text-3xl text-center font-semibold mb-10 md:mb-20">
          Savoring your Taste Buds
        </p>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="w-full mx-auto relative"
        >
          {testimonials.map(({ id, image, text, name, profession }) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col items-center text-center mb-16">
                <Image
                  src={image}
                  alt={name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mb-4"
                  unoptimized
                />
                <p className="text-base font-thin italic mb-4 w-[30%]">{`"${text}"`}</p>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-xs text-gray-600">{profession}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
