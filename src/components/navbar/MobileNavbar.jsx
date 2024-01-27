'use client'
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import {
  logo,
  categories,
  trendUp,
  profile,
  box,
  discountShape,
  infoCircle,
  arrowRight,
  setting,
  logout,
} from "@/exports/images";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TbBrightnessDownFilled, TbMoonFilled } from "react-icons/tb";
import { useTheme } from "next-themes";

const links = [
  { id: 1, path: "/", icon: categories },
  { id: 2, path: "/", icon: trendUp },
  { id: 3, path: "/", icon: profile },
  { id: 4, path: "/", icon: box },
  { id: 5, path: "/", icon: discountShape },
  { id: 6, path: "/", icon: infoCircle },
];
const secondLinks = [
  { id: 1, path: "/", icon: arrowRight },
  { id: 2, path: "/", icon: setting },
  { id: 3, path: "/", icon: logout },
];

const MobileNavbar = ({ setIsOpen }) => {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  const handleSideBar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="w-full h-[100vh] top-0 left-0 fixed z-10 background sm:hidden flex dark:text-neutral-white">
      <aside className="z-20 w-[20%] h-full flex  pt-5 pb-2 px-5 bg-grayscale-50 items-center justify-center gap-10 flex-col border-r border-grayscale-300  dark:bg-stone-950 dark:border-0 text-mainColors-secondary dark:text-white">
        <button
          className="flex sm:hidden text-2xl  hover:text-alerts-success duration-300 transition-colors self-start"
          onClick={handleSideBar}
        >
          <RiCloseFill />
        </button>
        <div className="flex items-center justify-between flex-col h-full">
          <div className="flex flex-col gap-5">
            <Link href={"/"} onClick={handleSideBar}>
              <Image src={logo} alt="logo" className="sm:w-8 md:w-10" />
            </Link>
            <div className="flex flex-col gap-5">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    className={`flex flex-col p-1 items-center text-black  duration-300 transition-colors ${
                      isActive(link.path) ? "" : "hover:text-scheme-yellow"
                    }`}
                    href={link.path}
                    onClick={handleSideBar}
                  >
                    <Image src={link.icon} alt="icon" />
                  </Link>
                );
              })}
            </div>
            {/* === theme toggle === */}
            <div className="bg-neutral-white rounded-full flex flex-col items-center gap-2 p-1 dark:text-white dark:bg-stone-800">
              <button className="" onClick={() => setTheme("light")}>
                <TbBrightnessDownFilled
                  className={`text-grayscale-300 text-xl hover:bg-alerts-success rounded-full hover:text-white transition-colors duration-300 ${
                    theme === "light" ? "bg-alerts-success text-white" : ""
                  }`}
                />
              </button>
              <button className="" onClick={() => setTheme("dark")}>
                <TbMoonFilled
                  className={`text-grayscale-300 text-xl hover:bg-alerts-success rounded-full hover:text-white transition-colors duration-300 p-1 ${
                    theme === "dark" ? "bg-alerts-success text-white" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {secondLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  className={`flex flex-col p-1 items-center text-black  duration-300 transition-colors ${
                    isActive(link.path) ? "" : "hover:text-scheme-yellow"
                  }`}
                  href={link.path}
                  onClick={handleSideBar}
                >
                  <Image src={link.icon} alt="icon" />
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileNavbar;
