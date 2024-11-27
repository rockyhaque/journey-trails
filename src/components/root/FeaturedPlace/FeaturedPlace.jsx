"use client"

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React, { useEffect, useState } from "react";
import FeaturedPlaceCards from "../Cards/FeaturedPlaceCards";
import axios, { get } from "axios";

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



const FeaturedPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const loadData = async() => {
    const {data} = await axios.get(`http://localhost:3000/api/all-places`)
    setPlaces(data.places)
    setLoading(false)
  }


  useEffect(()=> {
    loadData();
  },[])


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
