"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import DestinationCard from "@/components/root/Cards/DestinationCard";

const DestinationPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/all-places`
      );
      setPlaces(data.places);
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
      <SectionHeading title="All Destination" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-28 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="skeleton h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          ))
        ) : places?.length > 0 ? (
          places.map((place) => (
            <DestinationCard key={place._id} travelInfo={place} />
          ))
        ) : (
          <p>No places available.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;
