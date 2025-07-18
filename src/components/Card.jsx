import React from 'react';
import { useInsight } from '../context/InsightContext.jsx';

export default function Card({ cartTitle, num, insightInfo }) {
  return (
    <div className="flex felx-wrap justify-between bg-[#F6F6F6] hover:bg-[#F1F1F1] border border-[#E5E7EB] shadow-xl sm:w-[21vw] w-[300px] h-[106px] rounded-lg p-3 pr-0">

      
      <ul className="flex flex-col justify-center items-start ">
        <li className="text-[14px]">{cartTitle}</li>
        <li className="text-[21.897px]">{num}</li>
        <li className="text-[12.773px] text-[#737373]">{insightInfo}</li>
      </ul>

      <div className="flex items-center l-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="59"
          viewBox="0 0 71 59"
          fill="none"
        >
          {/* Blob */}
          <path
            d="M29.7002 0C39.4476 0 48.0896 4.72839 53.4609 12.0156C56.9817 15.912 61.9957 20.0897 71 17.3311V45.7246C66.1645 45.362 56.6052 45.9755 48.7627 52.0117C43.6211 56.3699 36.9683 59 29.7002 59C13.4078 59 0.200195 45.7924 0.200195 29.5C0.200195 13.2076 13.4078 0 29.7002 0Z"
            fill="white"
          />
          {/* Circle */}
          <circle cx="30" cy="29.5" r="21.3875" fill="#404142" />

          {/* Icon */}
          <g transform="translate(20.5, 19.5) scale(1)">
            <path
              d="M4.66667 16.6L5.93667 15.5842L5.945 15.5775C6.21 15.365 6.34417 15.2584 6.49333 15.1825C6.62722 15.1142 6.76833 15.0648 6.91667 15.0342C7.0825 15 7.255 15 7.60167 15H14.8358C15.7675 15 16.2342 15 16.59 14.8184C16.9036 14.6586 17.1585 14.4036 17.3183 14.09C17.5 13.7334 17.5 13.2667 17.5 12.3367V5.99754C17.5 5.06587 17.5 4.59921 17.3183 4.24337C17.1583 3.92966 16.9031 3.67469 16.5892 3.51504C16.2333 3.33337 15.7667 3.33337 14.8333 3.33337H5.16667C4.23333 3.33337 3.76667 3.33337 3.41 3.51504C3.09641 3.67483 2.84145 3.92978 2.68167 4.24337C2.5 4.60004 2.5 5.06671 2.5 6.00004V15.5592C2.5 16.4475 2.5 16.8917 2.68167 17.1192C2.75978 17.2173 2.85903 17.2965 2.97201 17.3509C3.08498 17.4053 3.20878 17.4335 3.33417 17.4334C3.62583 17.4334 3.9725 17.155 4.66667 16.6Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
