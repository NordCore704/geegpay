"use client";
import Image from "next/image";
import React, { useState } from "react";
import { search, calendar, bell, avatarHeader } from "@/exports/images";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModalDropDown = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <header className="w-full flex justify-evenly gap-10 items-center py-[18px] px-4 sm:px-4 lg:px-0 border-b dark:border-gray-700 bg-grayscale-50 dark:bg-stone-950 dark:text-white">
      <h2 className="text-xl font-semibold text-gray-950 dark:bg-stone-950 dark:text-white">Dashboard</h2>

      <div className="border p-2 hidden sm:flex gap-3 rounded-full bg-white dark:bg-stone-800 dark:border-0 dark:text-white">
        <Image src={search} alt={"search"} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="sm:flex gap-5 items-center hidden">
        <div className="flex gap-2">
          <button className="hover:text-alerts-success transition-colors duration-300">
            <LuCalendarDays />
          </button>
          <p className="text-sm font-medium hidden lg:flex dark:bg-stone-950 dark:text-white">
            November 15, 2023
          </p>
        </div>
        <button className="border rounded-full p-2 hover:text-alerts-success hover:border-alerts-success transition-colors duration-300">
          <FaRegBell/>
        </button>
        <button
          className="border p-1 lg:p-2 flex items-center lg:gap-3 gap-2 sm:gap-1 md:gap-2 rounded-full bg-white cursor-pointer relative dark:bg-stone-800 dark:border-0 dark:text-white"
          onClick={handleModalDropDown}
        >
          <Image
            src={avatarHeader}
            className="w-8 sm:w-6 lg:w-10"
            alt="avatar-header"
          />
          <div className="hidden lg:flex flex-col gap-1 items-end">
            <p className="font-normal text-base text-right">Justin Bergson</p>
            <p className="font-normal text-sm text-gray-300">
              Justin@gmail.com
            </p>
          </div>
          <div className="text-2xl hover:text-alerts-success duration-300 transition-colors">
            <RiArrowDownSLine />
          </div>
          {openModal ? (
            <div className=" flex-col gap-2 p-2 border rounded-xl bg-white absolute right-2 -bottom-[165px] hidden sm:flex w-36 lg:right-1 dark:bg-stone-800 dark:border-gray-600">
              <p className="border-b dark:border-gray-600">My Account</p>
              <button className="hover:bg-grayscale-300 p-1 rounded-md">
                Profile
              </button>
              <button className="hover:bg-grayscale-300 p-1 rounded-md">
                Team
              </button>
              <button className="hover:bg-grayscale-300 p-1 rounded-md">
                logout
              </button>
            </div>
          ) : (
            <></>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
