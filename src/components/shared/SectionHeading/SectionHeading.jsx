import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center py-12">
      <h1 className={`${montserrat.className} text-2xl font-semibold bg-gradient-to-r from-cyan-900 to-blue-900 bg-clip-text text-transparent`}>{title}</h1>
      <p className="text-md w-1/2 mx-auto mt-2">{description}</p>
    </div>
  );
};

export default SectionHeading;
