import {
  Github,
  Linkedin,
  NotebookText,
  X,
} from "lucide-react";
import { SiJavascript, SiKotlin, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
const getIcon = (icon) => {
    switch (icon) {
        case "home": 
          return <SiJavascript className='w-full h-auto' strokeWidth={1.5} />
          break; 
          case "about": 
          return <FaJava className='w-full h-auto' strokeWidth={4} />
          break;
          case "projects": 
          return <SiTypescript className='w-full h-auto' strokeWidth={1.5} />
          break;
          case "contact": 
          return <SiKotlin className='w-full h-auto' strokeWidth={1.5} />
          break;
          case "github": 
          return <Github className='w-full h-auto' strokeWidth={1.5} />
          break;
          case "linkedin": 
          return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
          break;
          case "twitter": 
          return <X className='w-full h-auto' strokeWidth={1.5} />
          break;  
          case "resume": 
          return <NotebookText className='w-full h-auto' strokeWidth={1.5} />
          break;
      default:
        return <SiJavascript className='w-full h-auto' strokeWidth={1.5} />
}
}
const IconsD = ({ x, y, label, link, newTab, icon }) => {
  return (
    <div
      className='absolute cursor-pointer z-50'
      style={{
        left: `calc(${x})`,
        top: `calc(${y})`,
        transform: 'translate(-50%, -50%)',
      }}      
    >
      <Link
        to={link}
        target={newTab ? "_blank" : "_self"}
        className='text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
        shadow-glass-inset hover:shadow-glass-sm'
        aria-label={label}
      >
        <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse 
        group-hover:pause hover:text-yellow-300 '>
            {getIcon(icon)}</span>
      </Link>
    </div>
  );
};

export default IconsD;
