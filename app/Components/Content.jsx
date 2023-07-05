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
        <div className="absolute bottom-0  h-[50%] w-[100%] content-bg ">
          <div className="flex-col justify-center items-center text-center h-[100%] p-4">
            <div className="mt-2 text-lg">{artiste}</div>
            <div className="text-sm">{title}</div>
          </div>
        </div>
      )}
      <Image
        src={src}
        width={200}
        height={200}
        className=" w-[200px] h-[200px] "
        alt="image"
      />
    </div>
  );
};

export default Content;
