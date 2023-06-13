'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  HomeIcon,
  UserIcon,
  DocumentArrowUpIcon,
  MoonIcon,
  SunIcon,
  BellAlertIcon,
} from '@heroicons/react/24/solid';

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   // useEffect only runs on the client, so now we can safely show the UI
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div className="mt-10 ml-2">
//       <button
//         className="border border-black rounded-md px-2 py-1 mr-4 hover:bg-slate-400 transition-all ease-in-out"
//         onClick={() => setTheme('dark')}
//       >
//         dark
//       </button>
//       <button
//         className="border border-black rounded-md px-2 py-1 hover:bg-slate-400 transition-all ease-in-out"
//         onClick={() => setTheme('light')}
//       >
//         light
//       </button>
//     </div>
//   );
// };

// export default ThemeSwitcher;

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center p-[10px] h-[60px] w-full fixed left-0 top-0 shadow-md bg-2 lg:w-auto lg:h-[375px] lg:flex-col lg:justify-center lg:items-start lg:gap-[50px] lg:rounded-md lg:mx-[10px] lg:my-[calc(50vh-187.5px)] ">
      <Link
        href="/"
        className="hover:text-[#4B9AD4] ease-in-out transition-all "
      >
        <div className="flex gap-2 items-center justify-start">
          <HomeIcon width={24} />
          <span className="hidden sm:flex">Acceuil</span>
        </div>
      </Link>

      <Link
        href="/"
        className="hover:text-[#4B9AD4] ease-in-out transition-all "
      >
        <div className="flex gap-2 items-center justify-start">
          <UserIcon width={24} />
          <span className="hidden sm:flex">Profil</span>
        </div>
      </Link>
      <Link
        href="/"
        className="hover:text-[#4B9AD4] ease-in-out transition-all "
      >
        <div className="flex gap-2 items-center justify-start">
          <DocumentArrowUpIcon width={24} />
          <span className="hidden sm:flex">Publier</span>
        </div>
      </Link>

      <Link
        href="/"
        className="hover:text-[#4B9AD4] ease-in-out transition-all "
      >
        <div className="flex gap-2 items-center justify-start">
          <BellAlertIcon width={24} />
          <span className="hidden sm:flex">Notifications</span>
        </div>
      </Link>

      <Link
        href="/"
        className="hover:text-[#4B9AD4] ease-in-out transition-all "
      >
        {theme === 'dark' ? (
          <button
            className="flex gap-2 items-center justify-start"
            onClick={() => setTheme('light')}
          >
            <SunIcon width={24} />
            <span className="hidden sm:flex">Light Mode</span>
          </button>
        ) : (
          <button
            className="flex gap-2 items-center justify-start"
            onClick={() => setTheme('dark')}
          >
            <MoonIcon width={24} />
            <span className="hidden sm:flex">Dark Mode</span>
          </button>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
