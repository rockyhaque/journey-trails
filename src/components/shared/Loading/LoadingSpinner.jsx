"use client";

import { HashLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex
      flex-col
      justify-center
      items-center `}
    >
      <HashLoader size={70} color="#4dd0e1" />
    </div>
  );
};

export default LoadingSpinner;
