import React from 'react';

export default function SummaryCard() {
  return (
    <div className="text-white grid grid-cols-12 mt-12 mx-7 mb-0 p-6 w-[full] h-[116px] bg-[#415C6B] shadow-xl border-[1px] border-[#E5E7EB] rounded-[7.287px]">
      <div className="col-span-1 flex justify-center items-center">
        <img
          src="https://gimgs2.nohat.cc/thumb/f/640/metal-gear-solid-alert-background-free-png-pngkid--comdlpng6950499.jpg"
          alt="bell icon"
          className="h-5 object-cover m-2.5"
        />
      </div>
      <div className="col-span-11 flex flex-wrap justify-between items-start">
        <div>
          <p className="text-[22px] pb-3">Todays Summary</p>
          <p className="text-[14.575px]">
            Risk Insights, eg. (5 recurring risks across April remain
            unresolved.)
          </p>
        </div>
        <button className="font-[500] text-[12px] text-white bg-[#2CADF0] px-[11.83px] py-[5.915px] rounded-sm block">
          View Trends
        </button>
      </div>
    </div>
  );
}
