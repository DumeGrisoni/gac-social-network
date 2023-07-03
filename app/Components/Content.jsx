'use client';
import Image from 'next/image';

const Content = ({ src }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2>Content 1</h2>
      <Image
        src={src}
        width={200}
        height={200}
        className="lg:h-[200px] lg:w-[200px] h-auto w-auto"
        alt="image"
      />
    </div>
  );
};

export default Content;
