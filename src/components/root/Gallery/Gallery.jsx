"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import g1 from "../../../../public/assets/images/g1.jpg";
import g2 from "../../../../public/assets/images/g2.jpg";
import g3 from "../../../../public/assets/images/g3.jpg";
import g4 from "../../../../public/assets/images/g4.jpg";
import g5 from "../../../../public/assets/images/g5.jpg";
import g6 from "../../../../public/assets/images/g6.jpg";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section Heading */}
      <SectionHeading
        title="Gallery"
        description="Explore our beautiful moment"
      />

      {/* Responsive Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="relative overflow-hidden group">
            <Image
              src={g1}
              alt="Gallery Item 1"
              width={800}
              height={300}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src={g2}
              alt="Gallery Item 2"
              width={800}
              height={300}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 ">
          <div className="relative overflow-hidden group h-full">
            <Image
              src={g3}
              alt="Gallery Item 3"
              width={800}
              height={600}  
              className="object-cover w-full  h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 h-full">
          <div className="relative overflow-hidden group">
            <Image
              src={g4}
              alt="Gallery Item 4"
              width={800}
              height={600}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-1/2">
            <div className="relative overflow-hidden group">
              <Image
                src={g5}
                alt="Gallery Item 5"
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={g6}
                alt="Gallery Item 6"
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
