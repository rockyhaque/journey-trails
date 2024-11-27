import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className={`w-full max-w-[1250px] px-1.5 sm:px-3 md:px-5 lg:px-2 xl:px-0 mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
