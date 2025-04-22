
import React from 'react';
import { personalImages } from '@/data/personal-images';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PersonalImageGallery = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-16">      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {personalImages.map((image, index) => {
          // Check if image is portrait (person) or landscape by filename content
          const isPortrait = image.src.includes("2a1ec993") || image.src.includes("197c9423");
          
          // Determine grid column span based on orientation
          const colSpan = isPortrait ? "md:col-span-4" : "md:col-span-8";
          
          // Different rotation for variety
          const rotation = ['-1deg', '1deg', '-0.5deg', '0.5deg'][index % 4];
          
          return (
            <div 
              key={index} 
              className={`polaroid bg-white p-3 pb-12 shadow-md hover:shadow-xl transition-all duration-300 relative ${colSpan}`}
              style={{ 
                maxWidth: '100%', 
                transform: `rotate(${rotation})`,
              }}
            >
              <AspectRatio ratio={isPortrait ? 3/4 : 16/9} className="bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-sm font-medium font-handwriting">{image.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalImageGallery;
