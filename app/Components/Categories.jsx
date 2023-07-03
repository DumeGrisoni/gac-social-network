'use client';
import React, { useRef, useState } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

const Categories = () => {
  const categorieRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleSlide = (direction) => {
    setIsMoved(true);
    if (categorieRef.current) {
      const { scrollLeft, clientWidth } = categorieRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      categorieRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col group">
      <ArrowLeftCircleIcon
        width={40}
        className="absolute opacity-50 hover:opacity-100 cursor-pointer transition ease-in-out hidden z-10 mt-[22px]   lg:group-hover:block hover:scale-110"
        onClick={() => handleSlide('left')}
      />
      <div
        className="flex justify-start items-start lg:mx-[40px] my-[10px] gap-[10px] overflow-auto flex-nowrap scrollbar-hide "
        ref={categorieRef}
      >
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
        <div className=" flex rounded-md p-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center  hover:bg-[#4B9AD450] ease-in-out transition-all cursor-pointer">
          Environement
        </div>
      </div>
      <ArrowRightCircleIcon
        width={40}
        className="absolute opacity-50 hover:opacity-100 cursor-pointer transition ease-in-out z-10 hidden lg:group-hover:block right-0 mr-2 hover:scale-110 mt-[22px]"
        onClick={() => handleSlide('right')}
      />
      <hr className="lg:w-[99%] lg:hidden" />
    </div>
  );
};

export default Categories;
