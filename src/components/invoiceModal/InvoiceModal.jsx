"use client";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiDownload, TiPrinter } from "react-icons/ti";

const InvoiceModal = ({ order, setModalState }) => {
  const handleModal = () => {
    setModalState(false);
  };

  return (
    <div className="fixed top-0 left-0 background w-full h-full flex justify-center items-center  dark:text-white">
      <div className="border rounded-xl gap-5 flex-col bg-white p-4 flex w-[70%] dark:bg-stone-950 dark:border-0">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-alerts-success">Invoice</h2>

          <button
            className="text-lg font-medium hover:text-alerts-warning duration-300 transition-colors"
            onClick={handleModal}
          >
            <RiCloseFill />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Recepient</p>
          <p className="text-base font-normal">{order.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Date</p>
          <p className="text-base font-normal">{order.date}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Status</p>
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
            <p className="text-lg font-medium">Amount</p>
            <p className="text-base font-normal">{order.amount}</p>
          </div>
          <div className="flex gap-2">
            <button className="hover:bg-gray-500 rounded-full p-2 hover:text-white duration-300 transition-colors">
                <TiDownload />
            </button>
            <button className="hover:bg-gray-500 rounded-full p-2 hover:text-white duration-300 transition-colors">
                <TiPrinter />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
