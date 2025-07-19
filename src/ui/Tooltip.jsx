import React from "react";

export default function Tooltip({ content }) {
  return (
    <div className="relative flex items-center">
      <div className="text-[13px] text-white bg-[#1890FF] px-3 py-2 w-max rounded-[7px] shadow z-10">
        {content}
      </div>
      {/* Tail */}
      <div
        className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-0 h-0"
        style={{
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "7px solid #1890FF",
        }}
      />
    </div>
  );
}
