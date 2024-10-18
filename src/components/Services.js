import React from "react";
import { services } from "../../constants";
import CustomTitle from "./CustomTitle";

const Services = () => {
  return (
    <div className="border-t py-8 md:py-16">
      <CustomTitle title='What we are best at' subtitle='Services' />

      <ul className="w-full md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {services.map((service) => (
          <li className="mb-10" key={service.title}>
            <h3 className="text-lg font-bold mb-1">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
