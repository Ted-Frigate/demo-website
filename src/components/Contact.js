import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex items-baseline justify-between py-8">
      <ContactForm />
      <div className="w-1/4">
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="uppercase text-base">Our Offices</h3>
          <p className="text-[15px] text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="uppercase text-base">Our office</h3>
          <address className="not-italic text-gray-400">
            908 Broadway,
            <br /> San Francisco,
            <br /> CA 94133
          </address>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="uppercase text-base">Working hours</h3>
          <p className="text-[15px] text-gray-400">9AM - 3PM, Mon to Fri</p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="uppercase text-base">Contact</h3>
          <a className="text-gray-400 underline" href="contact@business.com">
            contact@business.com
          </a>
          <a className="text-gray-400" href="tel:01 (650) 658 6822">01 (650) 658 6822</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
