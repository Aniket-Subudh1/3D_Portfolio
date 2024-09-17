import React from 'react';
import RenderModel from '../components/RenderModel';
import Wizard from '../components/Wizard';

const Hero = ({ scrollContainer }) => {
  return (
   <main
  id="home"
  className=" py-0 w-screen h-screen opacity-60 min-h-screen flex flex-col relative bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
  style={{ backgroundImage: `url('/assets/bg.png')` }}>
    <div className='w-full h-screen' >
      
    <RenderModel>
          <Wizard />
         </RenderModel>
    </div>
    </main>
  );
};

export default Hero;
