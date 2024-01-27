"use client";
import {
  Header,
  SalesTrends,
  ProgressGrid,
  OrderList,
  TopPlatform,
} from "@/exports";

export default function Home() {
  return (
    <main className=" flex flex-col gap-5 sm:pl-16 lg:pl-14 pt-10 sm:pt-0 w-full bg-grayscale-50 dark:bg-stone-950">
      <Header />
      <div className="p-5 grid gap-8 grid-cols-1 lg:grid-cols-2 w-full">
        <SalesTrends />
        <ProgressGrid />
        <OrderList />
        <TopPlatform />
      </div>
    </main>
  );
}
