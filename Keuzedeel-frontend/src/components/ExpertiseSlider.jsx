import imagee from '../assets/images/train.webp';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from '../assets/images/Expertise/slide1.webp';
import slide2 from '../assets/images/Expertise/slide2.webp';
import slide3 from '../assets/images/Expertise/slide3.webp';
import slide4 from '../assets/images/Expertise/slide4.webp';

const ExpertiseSlider = () => {
    return (
      <Carousel className="  rounded-xl">
      <div className="relative h-full w-full">
        <img
          src={slide1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center sm:place-items-center md:place-items-center  bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="p"
              color="white"
              className="mb-4 xs:text-xl sm:text-2xl text-3xl md:text-4xl lg:text-5xl"
            >
              Planning en Structurering
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slide2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center sm:place-items-center md:place-items-center  bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="p"
              color="white"
              className="mb-4 xs:text-xl sm:text-2xl text-3xl md:text-4xl lg:text-5xl"
            >
              Project management
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slide3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center sm:place-items-center md:place-items-center  bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="p"
              color="white"
              className="mb-4 xs:text-xl sm:text-2xl text-3xl md:text-4xl lg:text-5xl"
            >
              Project management
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slide4}
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center sm:place-items-center md:place-items-center  bg-black/75">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="p"
              color="white"
              className="mb-4 xs:text-xl sm:text-2xl text-3xl md:text-4xl lg:text-5xl"
            >
              Bouw management
            </Typography>
            
          </div>
        </div>
      </div>
      </Carousel>
    );
  };
  
  export default ExpertiseSlider; 