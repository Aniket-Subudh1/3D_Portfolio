
import React, { useState, useEffect } from 'react';
import { BtnList } from '../constants/data';
import IconsD from './IconsD';

const Icons = () => {
  const angleIncrement = 360 / BtnList.length;
  const [radius, setRadius] = useState(15); 

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width < 640) {
       
        setRadius(35); 
      } else if (width < 1024) {
       
        setRadius(25); 
      } else {
       
        setRadius(15); 
      }
    };

    updateRadius(); 

    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className='absolute h-screen flex items-center w-full justify-center'>
      <div className=' top-20 text-white w-max flex items-center justify-center relative hover:pause group-hover:text-yellow-300 animate-spin-slow group'>
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const x = `${radius * Math.cos(angleRad)}vw`;
          const y = `${radius * Math.sin(angleRad)}vw`;

          return <IconsD key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Icons;
