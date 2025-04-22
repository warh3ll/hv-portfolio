
import React from 'react';
import { personalImages } from '@/data/personal-images';

const PersonalImageGallery = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-16">      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalImages.map((image, index) => (
          <div 
            key={index} 
            className="polaroid bg-white p-3 pb-12 shadow-md hover:shadow-xl transition-all duration-300 rotate-0 hover:rotate-1 relative"
            style={{ 
              maxWidth: '100%', 
              transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
            }}
          >
            <div className="relative bg-gray-100">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-sm font-medium font-handwriting">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalImageGallery;
