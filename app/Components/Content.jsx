'use client';
import Image from 'next/image';
import { useState } from 'react';

const Content = ({ src, artiste, title }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      {display && (
        <div className="absolute bottom-0 lg:h-[80%] xl:h-[50%]  h-[50%] w-[100%] content-bg ">
          <div className="flex-col justify-center items-center text-center h-[100%] lg:p-10 xl:p-4 p-4">
            <div className="mt-2 lg:text-sm xl:text-lg text-lg">{artiste}</div>
            <div className="text-sm ">{title}</div>
          </div>
        </div>
      )}
      <Image
        src={src}
        width={150}
        height={150}
        className=" w-[200px] h-[200px] md:min-w-[166px] md:min-h-[166px] lg:min-w-full lg:h-[166px] xl:max-w-full xl:min-h-[200px]"
        alt="image"
      />
    </div>
  );
};

export default Content;
