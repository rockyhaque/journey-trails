//! single api missing

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Image from "next/image";

const DestinationDetailsSinglePage = () => {
  const { id } = useParams(); // Extract the dynamic id
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadPlaceDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/all-places/01`
      );
      setPlace(data.place);
    } catch (error) {
      console.error("Error fetching place details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) loadPlaceDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Place not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <SectionHeading title={place.name || "Destination Details"} />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96">
          <Image
            src={place.imageUrl}
            alt={place.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold">{place.name}</h2>
          <p className="text-gray-600">{place.description}</p>
          <p>
            <span className="font-semibold">Location:</span> {place.location}
          </p>
          <p>
            <span className="font-semibold">Best Time to Visit:</span>{" "}
            {place.bestTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsSinglePage;
