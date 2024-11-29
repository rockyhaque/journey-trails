"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React, { useEffect, useState } from "react";
import FeaturedPlaceCards from "../Cards/FeaturedPlaceCards";
import axios from "axios";

const FeaturedPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/all-places`);
      // Filter only the featured places
      const featuredPlaces = data.places.filter((place) => place.isFeatured)
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Render skeleton placeholders while loading
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-28 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          ))
        ) : places?.length > 0 ? (
          // Render actual data once loaded
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
