
import React from 'react';
import { personalImages } from '@/data/content';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const PersonalImageCarousel = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4 text-center">Personal Moments</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {personalImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </AspectRatio>
                    <div className="p-4 text-center">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4">
          <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
          <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default PersonalImageCarousel;
