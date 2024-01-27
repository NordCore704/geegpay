import React from 'react'

const TopPlatform = () => {
  return (
    <section className='bg-neutral-white pt-4 pr-4 pl-5 pb-8 rounded-[14px] flex flex-col gap-5 w-full dark:bg-stone-800 dark:text-white'>
        <div className="flex w-full items-center justify-between">
        <p className="text-lg font-semibold text-[#26282C] dark:text-white">Top Platform</p>
        <button className="text-lg font-medium text-alerts-success hover:text-alerts-warning">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-5 items-start w-full">
        {/* ==== 1 ===== */}
        <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#26282C] text-lg font-semibold dark:text-white">Book Bazaar</p>
            <div className="w-full">
            <progress className='w-full rounded-lg progress-purple' max={'25'} value={'15'}></progress>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-normal text-mainColors-secondary dark:text-white"> $2,500,000</p>

                <p className="text-lg font-normal self-end text-mainColors-secondary dark:text-white"> +15%</p>
            </div>
        </div>
        {/* ==== 2 ===== */}
        <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#26282C] text-lg font-semibold dark:text-white">Artisan Aisle</p>
            <div className="w-full">
            <progress className='w-full rounded-lg progress-blue' max={'25'} value={'10'}></progress>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-normal text-mainColors-secondary dark:text-white"> $1,800,000</p>

                <p className="text-lg font-normal self-end text-mainColors-secondary dark:text-white"> +10%</p>
            </div>
        </div>
        {/* ==== 3 ===== */}
        <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#26282C] text-lg font-semibold dark:text-white">Toy Troop</p>
            <div className="w-full">
              <progress className='w-full rounded-lg progress-yellow' max={'25'} value={'8'}></progress>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-normal text-mainColors-secondary dark:text-white"> $1,200,000</p>

                <p className="text-lg font-normal self-end text-mainColors-secondary dark:text-white"> +8%</p>
            </div>
        </div>
        {/* ==== 4 ===== */}
        <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#26282C] text-lg font-semibold dark:text-white">XStore</p>
            <div className="w-full">
              <progress className='w-full rounded-lg progress-red' max={'25'} value={'8'}></progress>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-normal text-mainColors-secondary dark:text-white"> $500,000</p>

                <p className="text-lg font-normal self-red text-mainColors-secondary dark:text-white"> +5%</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TopPlatform