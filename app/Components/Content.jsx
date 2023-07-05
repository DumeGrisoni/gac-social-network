'use client';
import Image from 'next/image';
import { useState } from 'react';

const Content = ({ src }) => {
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
            <div className="mt-2 text-lg">Artiste</div>
            <div className="text-sm">Titre</div>
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
