import CustomTitle from '@/components/CustomTitle';
import React from 'react';
import { teamMembers } from '../../../constants';
import Image from 'next/image';
import Contact from '@/components/Contact';

const Team = () => {
  return (
    <div className='py-8 md:py-16'>
      {/* Hero Section */}
      <div className="text-center bg-slate-400 py-24 md:py-48 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Team</h1>
      </div>

      {/* Title Section */}
      <CustomTitle title='Our people' subtitle='Our world-class team' />

      {/* Team Members Grid */}
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-[200px] px-4 md:px-0'>
        {teamMembers.map((member) => (
          <li className='flex flex-col items-center gap-4' key={member.id}>
            <Image src={member.image} alt={member.name} className="bg-gray-100" width={350} height={450} />
            <h3 className="text-lg md:text-xl mb-1">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </li>
        ))}
      </ul>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Team;
