// "use client"

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400","900"],
  subsets: ["latin"],
});

const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center py-12">
      <h1 className={`${montserrat.className} text-2xl`}>{title}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default SectionHeading;

