"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React, { useEffect, useState } from "react";
import FeaturedPlaceCards from "../Cards/FeaturedPlaceCards";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";

const FeaturedPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/all-places`
      );
      const featuredPlaces = data.places.filter((place) => place.isFeatured);
      setPlaces(featuredPlaces);
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <SectionHeading
        title="Featured Place"
        description="Discover breathtaking destinations with unique attractions, vibrant culture, and unforgettable experiences. Perfect for travelers seeking adventure, relaxation, or inspiration. Explore now!"
      />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-28 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : places?.length > 0 ? (
        <div className="relative bg-gray-50 p-2 rounded-md">
          {/* Custom navigation buttons */}
          <button
            className="max-sm:mt-52 md:top-1/2 md:-left-[2px]  xl:top-1/2 xl:-left-5"
            id="prev-button"
            style={{
              position: "absolute",

              // Adjusted to keep the button inside the container
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "#b7e2fc",
              color: "#00008B",
              border: "none",
              borderRadius: "12px",
              width: "40px", // Adjusted to match the previous button size
              height: "40px", // Adjusted height for the box
              cursor: "pointer",
              display: "flex",
              alignItems: "center", // Center content vertically
              justifyContent: "center", // Center content horizontally
              fontSize: "16px", // Text/icon size adjustment
            }}
          >
            &lt;
          </button>
          <button
            className="max-sm:mt-52 max-sm:right-[10px] xl:top-1/2 xl:-right-5 md:top-1/2 md:-right-[2px] "
            id="prev-button"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "#b7e2fc",
              color: "#00008B",
              border: "none",
              borderRadius: "12px",
              width: "40px", // Adjusted to match the previous button size
              height: "40px", // Adjusted height for the box
              cursor: "pointer",
              display: "flex",
              alignItems: "center", // Center content vertically
              justifyContent: "center", // Center content horizontally
              fontSize: "16px", // Text/icon size adjustment
            }}
          >
            &gt;
          </button>
          <Swiper
            modules={[Navigation]} // Use correct module import
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: "#prev-button", // Custom previous button
              nextEl: "#prev-button ", // Custom next button
            }}
            loop={places.length > 1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-8"
          >
            {places.map((place) => (
              <SwiperSlide key={place._id}>
                <FeaturedPlaceCards travelInfo={place} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p>No places available.</p>
      )}
    </div>
  );
};

export default FeaturedPlace;
