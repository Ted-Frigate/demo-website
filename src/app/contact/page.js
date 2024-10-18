import Contact from '@/components/Contact';
import CustomTitle from '@/components/CustomTitle';
import React from 'react';
import { contactInfo } from '../../../constants';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-slate-400 py-24 md:py-48 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <Contact />

      {/* Services Title Section */}
      <CustomTitle title='What we are best at' subtitle='Our Services' />

      {/* Contact Info Grid */}
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-0 mb-16 md:mb-[100px]'>
        {contactInfo.map((info) => (
          <li className='flex flex-col items-center gap-4' key={info.id}>
            <Image className='bg-gray-100' src={info.image} alt={info.name} width={350} height={150} />
            <h3 className="text-lg font-bold mb-1">{info.name}</h3>
            <p className="text-gray-400">{info.role}</p>
            <a className="text-gray-400 underline" href={`mailto:${info.email}`}>{info.email}</a>
            <a className="text-gray-400" href={`tel:${info.phoneNumber}`}>{info.phoneNumber}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactUs;
