import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const features = [
    {
      key: 'my feeds',
      name: 'My Feeds',
      to: '/',
    },
    {
      key: 'meeting',
      name: 'Meetings',
      to: '/meetings',
    },
    {
      key: 'report',
      name: 'Team Report',
      to: '/report',
    },
    {
      key: 'memo',
      name: 'Voice Memo',
      to: '/memo',
    },
  ];

  // const [isOpen, setIsOpen] = useState()

  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <header className="flex flex-col justify-end items-center gap-[15px] sticky bg-white top-0 left-0 pt-[11px] pr-[22.75px] pb-[0px] pl-[22.75px] border-b-[#E5E7EB] border-b-[0.948px]">
        <nav className="flex flex-wrap justify-between w-full mb-5 mt-3">
          <p className="text-[24px] font-[550] mt-3">Inflowva Business</p>

          <ul className="flex flex-row justify-between items-center rounded-sm">
            <li>
              <button className="flex flex-wrap items-center py-[5.915px] px-[11.83px] gap-[3.943px] bg-[#7B61FF] rounded-[0.25rem] hover:bg-[#6d51ff] mr-2">
                <div className="w-[20px] h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M10.8301 1.73157C10.9722 1.73157 11.1085 1.78801 11.2089 1.88847C11.3094 1.98894 11.3658 2.1252 11.3658 2.26728V2.803H14.5801C15.1011 2.803 15.6007 3.00995 15.9691 3.37832C16.3374 3.7467 16.5444 4.24632 16.5444 4.76728V8.69585C16.5444 9.21681 16.3374 9.71644 15.9691 10.0848C15.6007 10.4532 15.1011 10.6601 14.5801 10.6601H7.08011C6.82216 10.6601 6.56673 10.6093 6.32841 10.5106C6.0901 10.4119 5.87355 10.2672 5.69115 10.0848C5.32278 9.71644 5.11583 9.21681 5.11583 8.69585V4.76728C5.11583 4.24632 5.32278 3.7467 5.69115 3.37832C6.05953 3.00995 6.55915 2.803 7.08011 2.803H10.2944V2.26728C10.2944 2.1252 10.3508 1.98894 10.4513 1.88847C10.5518 1.78801 10.688 1.73157 10.8301 1.73157ZM5.65154 12.0887C5.13058 12.0887 4.63096 12.2957 4.26258 12.664C3.89421 13.0324 3.68726 13.532 3.68726 14.053V14.5887C3.68726 16.0009 4.37368 17.1901 5.62797 18.003C6.86154 18.8009 8.62797 19.2316 10.8301 19.2316C13.0323 19.2316 14.7987 18.8016 16.0323 18.003C17.2865 17.1894 17.973 16.0001 17.973 14.5887V14.053C17.973 13.532 17.766 13.0324 17.3976 12.664C17.0293 12.2957 16.5296 12.0887 16.0087 12.0887H5.65154ZM8.68726 7.803C8.97142 7.803 9.24394 7.69011 9.44487 7.48918C9.6458 7.28825 9.75869 7.01573 9.75869 6.73157C9.75869 6.44741 9.6458 6.17488 9.44487 5.97395C9.24394 5.77302 8.97142 5.66014 8.68726 5.66014C8.4031 5.66014 8.13057 5.77302 7.92964 5.97395C7.72871 6.17488 7.61583 6.44741 7.61583 6.73157C7.61583 7.01573 7.72871 7.28825 7.92964 7.48918C8.13057 7.69011 8.4031 7.803 8.68726 7.803ZM14.0444 6.73157C14.0444 6.44741 13.9315 6.17488 13.7306 5.97395C13.5297 5.77302 13.2571 5.66014 12.973 5.66014C12.6888 5.66014 12.4163 5.77302 12.2154 5.97395C12.0144 6.17488 11.9015 6.44741 11.9015 6.73157C11.9015 7.01573 12.0144 7.28825 12.2154 7.48918C12.4163 7.69011 12.6888 7.803 12.973 7.803C13.2571 7.803 13.5297 7.69011 13.7306 7.48918C13.9315 7.28825 14.0444 7.01573 14.0444 6.73157Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <a className="text-white font-[500] text-[12px] text-center">UPGRADE</a>
              </button>
            </li>

            {/* <li>
              <div className="relative w-full max-w-sm">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </li> */}

            <li>
              <button className="flex flex-col justify-center items-center border border-[#26262680] w-[2rem] h-[2rem] m-2 p-[0.3rem] border border-[0.5px] rounded-[0.375rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1808_310)">
                    <path
                      d="M8.0001 0.533325C7.4101 0.533325 6.93343 1.00999 6.93343 1.59999V2.19666C4.51677 2.57999 2.66677 4.67333 2.66677 7.19999V8.31333C2.66677 9.82666 2.1501 11.2967 1.20677 12.4767L0.710101 13.1C0.516768 13.34 0.480101 13.67 0.613434 13.9467C0.746768 14.2233 1.02677 14.4 1.33343 14.4H14.6668C14.9734 14.4 15.2534 14.2233 15.3868 13.9467C15.5201 13.67 15.4834 13.34 15.2901 13.1L14.7934 12.48C13.8501 11.2967 13.3334 9.82666 13.3334 8.31333V7.19999C13.3334 4.67333 11.4834 2.57999 9.06677 2.19666V1.59999C9.06677 1.00999 8.5901 0.533325 8.0001 0.533325ZM8.0001 3.73333H8.26677C10.1801 3.73333 11.7334 5.28666 11.7334 7.19999V8.31333C11.7334 9.90999 12.1968 11.4667 13.0568 12.8H2.94343C3.80343 11.4667 4.26677 9.90999 4.26677 8.31333V7.19999C4.26677 5.28666 5.8201 3.73333 7.73343 3.73333H8.0001ZM10.1334 15.4667H8.0001H5.86677C5.86677 16.0333 6.0901 16.5767 6.4901 16.9767C6.8901 17.3767 7.43343 17.6 8.0001 17.6C8.56677 17.6 9.1101 17.3767 9.5101 16.9767C9.9101 16.5767 10.1334 16.0333 10.1334 15.4667Z"
                      fill="#525252"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1808_310">
                      <path
                        d="M0.533447 0.533325H15.4668V17.6H0.533447V0.533325Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>

            <li>
              <button className="flex flex-col justify-center items-center w-[2rem] h-[2rem] m-2 p-[0.3rem] border border-[#26262680]  border-[0.5px] rounded-[0.375rem]">
                <img
                  src="./public/images/profile.webp"
                  alt="profile"
                  className="h-5 object-cover"
                />
              </button>
            </li>
          </ul>
        </nav>

        {/* List fo features */}

        <ul className="flex justify-start gap-[30.333px] pr-[669.957px] place-items-end w-[1167.833px] h-[38.865px] bg-white">
          {/* list looping for the features */}
          {features.map((feature) => (
            <li key={feature.key} className="">
              <NavLink
                to={feature.to}
                className={({ isActive }) =>
                  `text-center border-b-2 hover:border-b-2 hover:border-black ${
                    isActive
                      ? `font-[400] text-black border-black border-b-2`
                      : `font-[300] text-[#737373] border-white border-b-2`
                  } pr-4 pl-4 pb-2 inline-block`
                }
              >
                <span className="text-[13px]">{feature.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </motion.div>
  );
}
