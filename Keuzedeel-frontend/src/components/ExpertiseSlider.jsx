import imagee from '../assets/images/train.webp';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from '../assets/images/Expertise/slide1.webp';
import slide2 from '../assets/images/Expertise/slide2.webp';
import slide3 from '../assets/images/Expertise/slide3.webp';
import slide4 from '../assets/images/Expertise/slide4.webp';

const ExpertiseSlider = () => {
    return (
        <Carousel className="  rounded-xl">
        <img
          src={slide1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={slide2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={slide3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="relative h-full w-full">
        <img
          src={slide4}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="p"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Bouwmanagement
            </Typography>
            
          </div>
        </div>
      </div>
      </Carousel>
    );
  };
  
  export default ExpertiseSlider; 