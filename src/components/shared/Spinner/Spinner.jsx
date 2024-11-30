"use client";

import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
      <HashLoader size={70} color="#4dd0e1" />
    </div>
  );
};

export default Spinner;
