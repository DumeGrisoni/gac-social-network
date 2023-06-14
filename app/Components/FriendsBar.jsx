'use client';
import React from 'react';
import {
  UsersIcon,
  CheckCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/solid';

const FriendsBar = () => {
  return (
    <div className="hidden lg:flex lg:p-[10px] shadow-md bg-2 rounded-md lg:w-auto lg:h-[375px] lg:flex-col lg:justify-start lg:items-start lg:gap-[20px] lg:rounded-md lg:m-[10px]">
      <div className="flex flex-col w-full gap-4 ">
        <div className="flex mx-auto items-center justify-center gap-2">
          <UsersIcon width={24} />
          <h1>Amis</h1>
        </div>
        <hr className="w-full" />
      </div>
      <div className="flex flex-col gap-[20px] flex-nowrap w-full">
        <div className="hover:text-[#4B9AD4] transition ease-in-out cursor-pointer">
          <div className="flex gap-2">
            <CheckCircleIcon width={24} className="text-green-500" />
            <p className="truncate">Friend 1</p>
          </div>
        </div>
        <div className="hover:text-[#4B9AD4] transition ease-in-out cursor-pointer">
          <div className="flex gap-2">
            <MinusCircleIcon width={24} className="text-red-500" />
            <p className="truncate">Jean Rochemoutarde</p>
          </div>
        </div>
        <div className="hover:text-[#4B9AD4] transition ease-in-out cursor-pointer">
          <div className="flex gap-2">
            <MinusCircleIcon width={24} className="text-red-500" />
            <p className="text-ellipsis">Friend 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendsBar;
