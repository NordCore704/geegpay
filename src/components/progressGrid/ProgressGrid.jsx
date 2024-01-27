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

const ProgressGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-grayscale-50 dark:bg-stone-950 dark:text-white">
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
          <p className="text-2xl font-semibold">350</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full green">
            <Image alt="" src={trendGreen} />
            <p className="text-xs font-medium text-alerts-success">23,5%</p>
          </div>
          <p className="text-sm font-normal">vs. previous month</p>
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
          <p className="text-2xl font-semibold">270</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full red">
            <Image alt="" src={trendRed} />
            <p className="text-xs font-medium text-alerts-error">23,5%</p>
          </div>
          <p className="text-sm font-normal">vs. previous month</p>
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
          <p className="text-2xl font-semibold">1567</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full red">
            <Image alt="" src={trendRed} />
            <p className="text-xs font-medium text-alerts-error">23,5%</p>
          </div>
          <p className="text-sm font-normal">vs. previous month</p>
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
          <p className="text-2xl font-semibold">$350.000</p>
        </div>
        <div className="flex gap-[10px] w-full items-center">
          <div className="flex items-center gap-1 p-2 rounded-full green">
            <Image alt="" src={trendGreen} />
            <p className="text-xs font-medium text-alerts-success">23,5%</p>
          </div>
          <p className="text-sm font-normal">vs. previous month</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressGrid;
