"use client";
import React, { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiDownload, TiPrinter } from "react-icons/ti";
import { motion } from "framer-motion";


const modalAnimationsVariants = {
  initial: {
    y: "100",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.7,
    type: "spring",
    // stiffness: 500,
    // damping: 50,
  },
};

const InvoiceModal = ({ order, setModalState, modalState }) => {
  const handleModal = (event) => {
    setModalState(false);
    event.stopPropagation()
  };


  const handleExternalClicks = (event) => {
    if(modalState && !event.target.closest('.modal-open')) {
      setModalState(false)
    }
  }

  useEffect(() => {
   document.addEventListener('click', handleExternalClicks)
   return () => document.removeEventListener('click', handleExternalClicks)
  }, [modalState])
  
  return (
    <div className="fixed top-0 left-0 background w-full h-full flex justify-center items-center  dark:text-white" onClick={handleExternalClicks}>
      <motion.div className="border rounded-xl gap-5 flex-col bg-white p-4 flex w-[70%] dark:bg-stone-950 dark:border-0 modal-open" variants={modalAnimationsVariants}
        initial={'initial'}
        animate={'animate'}
        transition={modalAnimationsVariants.transition}>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-alerts-success">Invoice</h2>

          <button
            className=" font-medium hover:text-alerts-warning duration-300 transition-colors text-xl dark:text-white text-mainColors-secondary"
            onClick={handleModal}
          >
            <RiCloseFill />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium dark:text-white text-black">Recepient</p>
          <p className="text-base font-normal dark:text-white text-mainColors-secondary">{order.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium dark:text-white text-black">Date</p>
          <p className="text-base font-normal dark:text-white text-mainColors-secondary">{order.date}</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-lg font-medium dark:text-white text-black">Status</p>
          <p
            className={`text-base font-normal ${
              order.status === "Paid" ? "text-alerts-success" : "text-alerts-error"
            }`}
          >
            {order.status}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium dark:text-white text-black">Amount</p>
            <p className="text-base font-normal dark:text-white text-mainColors-secondary">{order.amount}</p>
          </div>
          <div className="flex gap-2">
            <button className="hover:bg-gray-500 rounded-full p-2 hover:text-white duration-300 transition-colors dark:text-white text-black">
                <TiDownload />
            </button>
            <button className="hover:bg-gray-500 rounded-full p-2 hover:text-white duration-300 transition-colors dark:text-white text-black">
                <TiPrinter />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceModal;
