'use client';
import React, { useRef, useState } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

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
        className="absolute opacity-50 hover:opacity-100 cursor-pointer transition ease-in-out hidden z-10 mt-[32px]   lg:group-hover:block hover:scale-110"
        onClick={() => handleSlide('left')}
      />
      <div
        className="flex justify-start items-start mx-[20px] lg:mx-[50px] my-[10px] lg:my-[20px] gap-[10px] overflow-auto flex-nowrap scrollbar-hide "
        ref={categorieRef}
      >
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Environement</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Characters</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Animation</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Environement</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Characters</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Animation</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Environement</span>
        </div>
        <div className="flex rounded-md px-2  min-w-[125px] h-[50px] lg:w-[175px] lg:min-w-[175px] lg:h-[64px] justify-center items-center category ease-in-out transition-all cursor-pointer">
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/064/609/845/4k/leonardo-azevedo-miguel-moneyhsot-sem-back-ground.jpg?1688353680"
            height={50}
            width={50}
            alt="image"
            className="rounded-md px-1 hidden lg:flex"
          />
          <span>Characters</span>
        </div>
      </div>
      <ArrowRightCircleIcon
        width={40}
        className="absolute opacity-50 hover:opacity-100 cursor-pointer transition ease-in-out z-10 hidden lg:group-hover:block right-0 mr-2 hover:scale-110 mt-[32px]"
        onClick={() => handleSlide('right')}
      />
      <hr className="lg:w-[99%] lg:hidden" />
    </div>
  );
};

export default Categories;
