import React from 'react';
import CustomButton from './CustomButton';

const InfoSection = ({ subtitle, title, content, buttonText, imagePosition = 'right' }) => {
  return (
    <div className={`flex flex-col md:flex-row ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''} gap-8 md:gap-10 items-center my-8 px-4`}>
      {/* Text Section */}
      <div className="w-full md:w-2/5 text-center md:text-left">
        <p className="text-gray-500 uppercase tracking-wide text-sm">{subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">{title}</h2>
        <p className="text-gray-700 mt-4 mb-8">{content}</p>
        <CustomButton title={buttonText || 'Learn more'} />
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-3/5">
        <div className="bg-gray-200 h-[300px] md:h-[500px] rounded-lg flex justify-center items-center">
          {/* Placeholder image */}
          <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
