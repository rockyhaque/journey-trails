"use client"

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React from "react";
import FeaturedPlaceCards from "../Cards/FeaturedPlaceCards";

export const getStaticProps = async () => {
  try {
    const res = await fetch(`./data/places.json`);
    const places = await res.json();

    console.log(places)

    return {
      props: {
        places,
      },
    };
  } catch (error) {
    console.error("Failed to fetch places:", error);
    return {
      props: {
        places: [],
      },
    };
  }
};

const FeaturedPlace = ({ places = [] }) => {
  

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <SectionHeading
        title="Featured Place"
        description="Discover breathtaking destinations with unique attractions, vibrant culture, and unforgettable experiences. Perfect for travelers seeking adventure, relaxation, or inspiration. Explore now!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places?.length > 0 ? (
          places.map((place) => (
            <FeaturedPlaceCards key={place.id} travelInfo={place} />
          ))
        ) : (
          <p>No places available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedPlace;
