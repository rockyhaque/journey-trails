import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center py-12">
      <h1 className={`${montserrat.className} text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-900`}>--- {title} ---</h1>
      <p className="text-md w-1/2 mx-auto mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default SectionHeading;
