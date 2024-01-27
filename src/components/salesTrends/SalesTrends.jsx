"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const monthData = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];
const dataSetData = [
  7.0, 21.0, 4.0, 25.0, 9.0, 45.0, 9.0, 17.0, 32.0, 6.0, 30.0, 21.0,
];

const dataColor = "rgba(52, 202, 165, 0.30)";
const hoverColor = 'rgba(52, 202, 165, 0.6)';
// 'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)';

export const options = {
  scales: {
    x: {
      border: {dash: [7,4]},
      grid: {
        color: 'rgba(0, 0, 0, 0)',
      }
    },
    y: {
      border: {dash: [7,4]},
      grid: {
        color: '#a3a3a3',
        drawTicks: true,
        drawOnChartArea: true,
      }
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "none",
    },
    title: {
      display: false,
      text: "",
    },
  },
};
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
    delay: 0,
  },
};

const SalesTrends = () => {
  return (
    <motion.section className="p-5 bg-white border rounded-[14px] shrink-0 flex flex-col gap-5 dark:bg-stone-800 dark:border-0" variants={animationsVariants} animate={'animate'} initial={'initial'} transition={animationsVariants.transition}>
      <div className="flex sm:justify-between flex-col sm:flex-row items-center">
        <h2 className="text-lg font-semibold text-[#26282C] dark:text-white">Sales Trends</h2>
        <span className="flex gap-3 px-2 py-3 items-center">
          <p className="text-sm font-medium text-[#3A3F51] dark:text-white"> Sort By:</p>
          <select
            name="sort"
            id="sort"
            className="border bg-white rounded-full p-2 cursor-pointer text-mainColors-secondary dark:bg-stone-800 dark:text-white"
          >
            <option value="Weekly" className="">
              Weekly
            </option>
            <option value="Monthly" className="">
              Monthly
            </option>
            <option value="Daily" className="">
              Daily
            </option>
          </select>
        </span>
      </div>
      {/* ==== bar chart section ===== */}
      <div className="w-full">
        <Bar
          data={{
            labels: monthData,
            datasets: [
              {
                data: dataSetData,
                backgroundColor: dataColor,
                hoverBackgroundColor: hoverColor,
                borderWidth: 0.5,
                borderRadius: 50,
              },
            ],
          }}
          height={200}
          options={options}
        />
      </div>
    </motion.section>
  );
};

export default SalesTrends;
