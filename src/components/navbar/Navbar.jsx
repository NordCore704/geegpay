"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbBrightnessDownFilled, TbMoonFilled } from "react-icons/tb";
import { RiArrowDownSLine, RiMenu4Fill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "@/exports";
import { useAnimation } from "framer-motion";
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
  avatarHeader,
  bell,
  calendar,
} from "@/exports/images";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

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



const Navbar = () => {
  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const animation = useAnimation()

  const handleModalDropDown = () => {
    setOpenModal((prev) => !prev);
  };

  const handleSideBar = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // Disable scroll when navbar is open
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    // Close navbar when screen width becomes larger than 640px (if navbar was left open initially)
    const handleResize = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return (
    <aside className="sm:h-[100dvh] w-full sm:w-[11%] md:w-[8%] lg:w-[5%] flex flex-row sm:flex-col  items-center px-5 justify-between sm:justify-normal py-2 sm:py-5 sm:px-2 gap-10 fixed left-0 top-0 sm:border-r sm:border-b-0 bg-grayscale-50 dark:bg-stone-950 dark:border-gray-700">
      {/* ==== desktop sidebar ===== */}

      <div className="hidden sm:flex items-center justify-between flex-col h-full">
        <div className="flex flex-col gap-5">
          <Link href={"/"}>
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
                >
                  <Image src={link.icon} alt="icon" />
                </Link>
              );
            })}
          </div>
          {/* === theme toggle === */}
          <div className="bg-neutral-white rounded-3xl flex flex-col items-center gap-2 p-1 dark:bg-stone-800 dark:text-white">
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
              >
                <Image src={link.icon} alt="icon" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* ==== mobile sidebar ===== */}
      <button
        className="flex sm:hidden text-xl self-center  duration-300 transition-colors dark:text-neutral-white hover:text-alerts-success dark:hover:text-alerts-success text-mainColors-secondary"
        onClick={handleSideBar}
      >
        <RiMenu4Fill />
      </button>

      {isOpen ? <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen}  animation={animation}/> : <></>}

      <div className="flex gap-5 items-center sm:hidden dark:text-neutral-white">
        <div className="flex gap-2">
          <button className="hover:text-alerts-success duration-300 transition-colors text-mainColors-secondary dark:text-white">
            <LuCalendarDays />
          </button>
          <p className="text-sm font-medium hidden sm:flex dark:text-white text-mainColors-secondary">
            November 15, 2023
          </p>
        </div>
        <button className="border rounded-full p-2 hover:text-alerts-success hover:border-alerts-success duration-300 transition-colors text-mainColors-secondary dark:text-white">
          <FaRegBell />
        </button>
        <button
          className="border p-1 lg:p-2 flex items-center gap-3 rounded-full bg-white relative dark:bg-stone-800 dark:border-0 group"
          onClick={handleModalDropDown}
        >
          <Image src={avatarHeader} className="w-8" alt="avatar-header" />
          <div className="hidden lg:flex flex-col gap-1 items-end">
            <p className="font-normal text-base text-right">Justin Bergson</p>
            <p className="font-normal text-sm text-gray-300">
              Justin@gmail.com
            </p>
          </div>
          <div className="text-2xl hover:text-alerts-success duration-300 transition-colors text-mainColors-secondary dark:text-white">
            <RiArrowDownSLine />
          </div>
          {openModal ? (
            <div className=" flex-col gap-2 p-2 border rounded-xl bg-white absolute right-0 -bottom-[165px] flex sm:hidden w-36 lg:right-1 dark:bg-stone-800 dark:border-gray-700">
              <p className="border-b dark:border-gray-700 dark:text-white text-mainColors-secondary">
                My Account
              </p>
              <button className="hover:bg-grayscale-300 p-1 rounded-md dark:text-white text-mainColors-secondary">
                Profile
              </button>
              <button className="hover:bg-grayscale-300 p-1 rounded-md dark:text-white text-mainColors-secondary">
                Team
              </button>
              <button className="hover:bg-grayscale-300 p-1 rounded-md dark:text-white text-mainColors-secondary">
                logout
              </button>
            </div>
          ) : (
            <></>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
