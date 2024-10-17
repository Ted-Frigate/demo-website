import React from "react";

const CustomTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 w-2/3 mx-auto">
      <p className="text-sm uppercase mb-3">{title}</p>
      <p className="text-4xl capitalize font-bold">{subtitle}</p>
    </div>
  );
};

export default CustomTitle;
