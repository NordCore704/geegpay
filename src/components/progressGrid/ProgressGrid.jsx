'use client'
import {
  boxGreen,
  cartGreen,
  chartGreen,
  chartRed,
  coinGreen,
  rotateGreen,
  trendGreen,
  trendRed,
} from "@/exports/images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const animationsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.2,
    type: "tween",
    delay: .5,
  },
};

const ProgressGrid = () => {
  return (
    <motion.section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-grayscale-50 dark:bg-stone-950 dark:text-white" initial={'initial'} animate={'animate'} variants={animationsVariants} transition={animationsVariants.transition}>
      {/* ==== 1 ===== */}
      <div className="bg-white border rounded-[14px] p-4 flex flex-col justify-center items-center gap-[10px] dark:bg-stone-800 dark:border-0 dark:text-white">
        <div className="flex justify-between w-full p-1">
          <span className="border p-2 rounded-full">
            <Image alt="boxgreen" src={boxGreen} />
          </span>
          <Image alt="" src={chartGreen} />
        </div>
        <div className="flex flex-col gap-[5px] self-start">
          <p className="text-[#898989] text-lg font-medium">Total Order</p>
          <p className="text-2xl font-semibold text-mainColors-secondary dark:text-white">350</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full green">
            <Image alt="" src={trendGreen} />
            <p className="text-xs font-medium text-alerts-success">23,5%</p>
          </div>
          <p className="text-sm font-normal text-mainColors-secondary dark:text-white">vs. previous month</p>
        </div>
      </div>

      {/* ==== 2 ===== */}
      <div className="bg-white border rounded-[14px] p-4 flex flex-col justify-center items-center gap-[10px] dark:bg-stone-800 dark:border-0 dark:text-white">
        <div className="flex justify-between w-full p-1">
          <span className="border p-2 rounded-full">
            <Image alt="boxgreen" src={rotateGreen} />
          </span>
          <Image alt="" src={chartRed} />
        </div>
        <div className="flex flex-col gap-[5px] self-start">
          <p className="text-[#898989] text-lg font-medium">Total Refund</p>
          <p className="text-2xl font-semibold text-mainColors-secondary dark:text-white">270</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full red">
            <Image alt="" src={trendRed} />
            <p className="text-xs font-medium text-alerts-error">23,5%</p>
          </div>
          <p className="text-sm font-normal text-mainColors-secondary dark:text-white">vs. previous month</p>
        </div>
      </div>
      {/* ==== 3 ===== */}
      <div className="bg-white border rounded-[14px] p-4 flex flex-col justify-center items-center gap-[10px] dark:bg-stone-800 dark:border-0 dark:text-white">
        <div className="flex justify-between w-full p-1">
          <span className="border p-2 rounded-full">
            <Image alt="boxgreen" src={cartGreen} />
          </span>
          <Image alt="" src={chartRed} />
        </div>
        <div className="flex flex-col gap-[5px] self-start">
          <p className="text-[#898989] text-lg font-medium">Average Sales</p>
          <p className="text-2xl font-semibold text-mainColors-secondary dark:text-white">1567</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full red">
            <Image alt="" src={trendRed} />
            <p className="text-xs font-medium text-alerts-error">23,5%</p>
          </div>
          <p className="text-sm font-normal text-mainColors-secondary dark:text-white">vs. previous month</p>
        </div>
      </div>

      {/* ==== 4 ===== */}
      <div className="bg-white border rounded-[14px] p-4 flex flex-col justify-center items-center gap-[10px] dark:bg-stone-800 dark:border-0 dark:text-white">
        <div className="flex justify-between w-full p-1">
          <span className="border p-2 rounded-full">
            <Image alt="boxgreen" src={coinGreen} />
          </span>
          <Image alt="" src={chartGreen} />
        </div>
        <div className="flex flex-col gap-[5px] self-start">
          <p className="text-[#898989] text-lg font-medium">Total Income</p>
          <p className="text-2xl font-semibold text-mainColors-secondary dark:text-white">$350.000</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full green">
            <Image alt="" src={trendGreen} />
            <p className="text-xs font-medium text-alerts-success">23,5%</p>
          </div>
          <p className="text-sm font-normal text-mainColors-secondary dark:text-white">vs. previous month</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressGrid;
