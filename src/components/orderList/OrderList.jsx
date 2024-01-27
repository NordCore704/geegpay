"use client";
import React, { useEffect, useState } from "react";
import {
  marcusAvatar,
  jaydonAvatar,
  coreyAvatar,
  cooperAvatar,
  phillipAvatar,
  documentDownload,
} from "@/exports/images";
import Image from "next/image";
import { InvoiceModal } from "@/exports";
import { TbFileDownload } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const orders = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
    image: marcusAvatar,
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    invoice: "View",
    image: jaydonAvatar,
  },
  {
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    invoice: "View",
    image: coreyAvatar,
  },
  {
    name: "Cooper Person",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    invoice: "View",
    image: cooperAvatar,
  },
  {
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    amount: "$78,000",
    status: "Paid",
    invoice: "View",
    image: phillipAvatar,
  },
];

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
    delay: 1,
  },
};

const OrderList = () => {
  const [modalState, setModalState] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const handleModal = (order) => {
    setSelectedRow(order);
    setModalState(true);
  };

  const scrollVariant = {
    visible: {
      y: 0,
      zIndex: 0,
      opacity: 1,
    },
    hidden: {
      y: -100,
      zIndex: -10,
      opacity: 0,
    },
  };

  useEffect(() => {
    // Disable scroll when invoice modal is open
    modalState
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalState]);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <motion.section
      className="border rounded-[14px] bg-neutral-white py-[18px] px-[20px] flex flex-col gap-[14px] sm:items-stretch items-stretch dark:bg-stone-800 dark:text-white dark:border-0"
      variants={animationsVariants}
      initial={"initial"}
      animate={"animate"}
      transition={animationsVariants.transition}
      ref={ref}
    >
      <div className="flex w-full items-center justify-between ">
        <p className="text-lg font-semibold text-[#26282C] dark:text-white">
          Last Orders
        </p>
        <button className="text-lg font-medium text-alerts-success hover:text-alerts-warning">
          See All
        </button>
      </div>
      {/* ====  tablets to desktop screens(table) ==== */}
      <div className="w-full hidden sm:flex">
        <table className="w-full flex flex-col gap-4">
          <thead className=" w-full">
            <tr className="flex justify-between items-start">
              <th className="text-[#9CA4AB] font-medium text-base w-[40%] text-left">
                Name
              </th>
              <th className="text-[#9CA4AB] text-left font-medium w-[20%] text-base">
                Date
              </th>
              <th className="text-[#9CA4AB] font-medium text-base w-[22%]">
                Amount
              </th>
              <th className="text-[#9CA4AB] font-medium text-base w-[20%]">
                Status
              </th>
              <th className="text-[#9CA4AB] font-medium text-base w-[10%]">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-4 items-center">
            {orders.map((order, index) => (
              <motion.tr
                className="flex items-center justify-between self-stretch pt-2 border-t dark:border-gray-700"
                key={index}
                variants={scrollVariant}
                animate={animation}
                initial="hidden"
                transition={{
                  delay: 0.4 * index,
                  ease: "easeInOut",
                  duration: 0.6,
                  type: "tween",
                }}
              >
                <td className="flex items-center gap-2 text-base text-left font-medium justify-start text-[#3A3F51] dark:text-white">
                  <Image src={order.image} alt="" />
                  {order.name}
                </td>
                <td className="text-base font-medium text-left text-[#9ca4ab]">
                  {order.date}
                </td>
                <td className="text-base font-medium text-left text-[#3a3f51] dark:text-white">
                  {order.amount}
                </td>
                <td
                  className={` text-base font-normal text-center ${
                    order.status === "Paid"
                      ? "text-alerts-success"
                      : "text-alerts-error"
                  }`}
                >
                  {order.status}
                </td>
                <td className="">
                  <button
                    className="w-full flex items-center gap-1  text-base text-left font-medium justify-start text-[#3A3F51] hover:text-alerts-success  duration-300 transition-colors dark:hover:text-alerts-success dark:text-white"
                    onClick={() => handleModal(order)}
                  >
                    <TbFileDownload />
                    {order.invoice}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === full invoice modal render === */}
      {modalState ? (
        <InvoiceModal
          order={selectedRow}
          setModalState={setModalState}
          modalState={modalState}
        />
      ) : (
        <></>
      )}

      {/* ==== mobile screen(table) ==== */}
      <div className="flex flex-col gap-4 sm:hidden">
        {orders.map((order, index) => (
          <motion.div
            className="py-2 flex flex-col gap-3 border-t w-full"
            key={index}
            variants={scrollVariant}
            animate={animation}
            initial="hidden"
            transition={{
              delay: 0.4 * index,
              ease: "easeInOut",
              duration: 0.6,
              type: "tween",
            }}
          >
            <div className="flex flex-wrap justify-between items-center gap-2 w-full">
              <p className="flex items-center gap-2 text-base text-left font-medium justify-start text-[#3A3F51] dark:text-neutral-white">
                <Image src={order.image} alt="" />
                {order.name}
              </p>
              <p className="sm:text-base text-sm font-medium text-left text-[#9ca4ab]">
                {order.date}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <p className="text-base font-medium text-left text-[#3a3f51] dark:text-white">
                {order.amount}
              </p>
              <p
                className={` text-base font-normal text-center ${
                  order.status === "Paid"
                    ? "text-alerts-success"
                    : "text-alerts-error"
                }`}
              >
                {order.status}
              </p>
              <p className="">
                <button
                  className="w-full flex items-center gap-1  text-base text-left font-medium justify-start text-[#3A3F51] hover:text-alerts-success dark:hover:text-alerts-success duration-300 transition-colors dark:text-white"
                  onClick={() => handleModal(order)}
                >
                  <TbFileDownload />
                  {order.invoice}
                </button>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OrderList;
