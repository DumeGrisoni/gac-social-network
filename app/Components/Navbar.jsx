'use client';
import { useState, useEffect } from 'react';
import FriendsBar from './FriendsBar';
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
    <div className="fixed inset-x-0 z-10 bottom-0 left-0 lg:top-0 lg:z-0 lg:w-[180px]">
      <nav className=" flex justify-between items-center p-[10px] h-[60px] w-[100vw]  shadow-md bg-2 lg:w-auto lg:h-[375px] lg:flex-col lg:justify-center lg:items-start lg:gap-[50px] lg:rounded-md lg:m-[10px] ">
        <Link href="/" className="nav-text ease-in-out transition-all ">
          <div className="flex gap-2 items-center justify-start">
            <HomeIcon width={24} />
            <span className="hidden sm:flex">Accueil</span>
          </div>
        </Link>

        <Link href="/" className="nav-text ease-in-out transition-all ">
          <div className="flex gap-2 items-center justify-start">
            <UserIcon width={24} />
            <span className="hidden sm:flex">Profil</span>
          </div>
        </Link>
        <Link href="/" className="nav-text ease-in-out transition-all ">
          <div className="flex gap-2 items-center justify-start">
            <DocumentArrowUpIcon width={24} />
            <span className="hidden sm:flex">Publier</span>
          </div>
        </Link>

        <Link href="/" className="nav-text ease-in-out transition-all ">
          <div className="flex gap-2 items-center justify-start">
            <BellAlertIcon width={24} />
            <span className="hidden sm:flex">Notifications</span>
          </div>
        </Link>

        <Link href="/" className="nav-text ease-in-out transition-all ">
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
      {/* <nav className="hidden lg:block">
        <FriendsBar />
      </nav> */}
    </div>
  );
};

export default Navbar;
