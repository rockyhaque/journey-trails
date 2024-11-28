"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React, { useEffect, useState } from "react";
import FeaturedPlaceCards from "../Cards/FeaturedPlaceCards";
import axios from "axios";

const FeaturedPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/all-places`);
    setPlaces(data.places);
    setLoading(false);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places?.length > 0 ? (
          places.map((place) => (
            <FeaturedPlaceCards key={place._id} travelInfo={place} />
          ))
        ) : (
          <p>No places available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedPlace;
