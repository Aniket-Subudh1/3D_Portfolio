import React, { Suspense } from 'react';
import RenderModel from '../components/RenderModel';
import Wizard from '../components/Wizard';
import Icons from '../components/Icons';
import CanvasLoader from '../components/CanvasLoader';
import Position from '../components/Position';

const Hero = ({ scrollContainer }) => {
  return (
    <main
      id="home"
      className="relative w-screen h-screen min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Content Section */}
      <div className='absolute top-20 left-10 w-full mx-auto flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[60px] lg:text-[80px] leading-[110px]'>
            ANIKET SUBUDHI
          </h1>
          <Position />
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0  bg-full bg-center bg-no-repeat z-0 opacity-40 filter blur-xs"
      ></div>

      {/* Content Area */}
      <div className="absolute  w-full h-screen z-10">
        <Icons />
        <RenderModel>
          <Suspense fallback={<CanvasLoader />}>
            <Wizard />
          </Suspense>
        </RenderModel>
      </div>
    </main>
  );
};

export default Hero;
