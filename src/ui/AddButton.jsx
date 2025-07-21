import React, { useState } from "react";
import AddCard from "../components/AddCard";
import Tooltip from "./Tooltip";
import { div } from "motion/react-client";

function PlusToXIcon({ isAddButtonOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      className={`group transition-transform duration-300 ${
        isAddButtonOpen ? "rotate-45" : ""
      }`}
      style={{ display: "block" }}
    >
      <g filter="url(#filter0_d_1946_5144)">
        {/* Center circle */}
        <circle
          className={`${
            isAddButtonOpen ? `fill-[#FF2323]` : `fill-[#0075FF]`
          } transition-colors duration-200`}
          cx="50"
          cy="50"
          r="32"
        />
        {/* Centered + symbol */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="40"
          fill="white"
          fontFamily="Arial"
          dominantBaseline="middle"
        >
          +
        </text>
      </g>
      <defs>
        <filter
          id="filter0_d_1946_5144"
          x="0"
          y="0"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.896499 0 0 0 0 0.286302 0 0 0 0 0.995833 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1946_5144"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1946_5144"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const actions = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 3L19 9V21H5V3H13Z"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 3V8.5H19"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 17V14"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17V13"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 17V12"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "Add Live Meeting",
    cardSubTitle: "Add a live meeting and enable AI assistance",
    inputTitle: "Meeting Title (Optional)",
    inputLink: "Meeting Link (Capture meetings from GMeet, Zoom and more.)",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 24"
        fill="none"
      >
        <path
          d="M7.08983 19.8333L5.10183 21.8213C4.80706 22.1161 4.46639 22.1838 4.07983 22.0243C3.69328 21.8649 3.5 21.5752 3.5 21.1552V5.38533C3.5 4.84789 3.68006 4.3995 4.04017 4.04017C4.40028 3.68083 4.84867 3.50078 5.38533 3.5H22.6158C23.1525 3.5 23.6009 3.68006 23.961 4.04017C24.3211 4.40028 24.5008 4.84867 24.5 5.38533V17.9492C24.5 18.4858 24.3203 18.9342 23.961 19.2943C23.6017 19.6544 23.1533 19.8341 22.6158 19.8333H7.08983ZM6.59167 18.6667H22.6158C22.7947 18.6667 22.9592 18.592 23.1093 18.4427C23.2594 18.2933 23.3341 18.1288 23.3333 17.9492V5.38417C23.3333 5.20528 23.2587 5.04078 23.1093 4.89067C22.96 4.74056 22.7955 4.66589 22.6158 4.66667H5.38417C5.20528 4.66667 5.04078 4.74133 4.89067 4.89067C4.74056 5.04 4.66589 5.2045 4.66667 5.38417V20.5858L6.59167 18.6667ZM8.16667 15.75H15.1667C15.3331 15.75 15.4719 15.6944 15.5832 15.5832C15.6944 15.4719 15.75 15.3331 15.75 15.1667C15.75 15.0002 15.6944 14.8614 15.5832 14.7502C15.4719 14.6389 15.3331 14.5833 15.1667 14.5833H8.16667C8.001 14.5833 7.86217 14.6389 7.75017 14.7502C7.63817 14.8614 7.58256 15.0002 7.58333 15.1667C7.58411 15.3331 7.63972 15.4719 7.75017 15.5832C7.86061 15.6944 7.99944 15.75 8.16667 15.75ZM8.16667 12.25H19.8333C19.9998 12.25 20.1386 12.1944 20.2498 12.0832C20.3611 11.9719 20.4167 11.8331 20.4167 11.6667C20.4167 11.5002 20.3611 11.3614 20.2498 11.2502C20.1386 11.1389 19.9998 11.0833 19.8333 11.0833H8.16667C8.001 11.0833 7.86217 11.1389 7.75017 11.2502C7.63817 11.3614 7.58256 11.5002 7.58333 11.6667C7.58411 11.8331 7.63972 11.9719 7.75017 12.0832C7.86061 12.1944 7.99944 12.25 8.16667 12.25ZM8.16667 8.75H19.8333C19.9998 8.75 20.1386 8.69439 20.2498 8.58317C20.3611 8.47194 20.4167 8.33311 20.4167 8.16667C20.4167 8.00022 20.3611 7.86139 20.2498 7.75017C20.1386 7.63895 19.9998 7.58333 19.8333 7.58333H8.16667C8.001 7.58333 7.86217 7.63895 7.75017 7.75017C7.63817 7.86139 7.58256 8.00022 7.58333 8.16667C7.58411 8.33311 7.63972 8.47194 7.75017 8.58317C7.86061 8.69439 7.99944 8.75 8.16667 8.75Z"
          fill="white"
        />
      </svg>
    ),
    label: "Add Team Report",
    cardSubTitle: "Add a team report and enable AI assistance",
    inputTitle: "Report Title (Optional)",
    inputLink: "Report Link / Upload (Add a link (Google Docs, Notion, etc.))",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3C12.2449 3.00003 12.4813 3.08996 12.6644 3.25272C12.8474 3.41547 12.9643 3.63975 12.993 3.883L13 4V20C12.9997 20.2549 12.9021 20.5 12.7272 20.6854C12.5522 20.8707 12.313 20.9822 12.0586 20.9972C11.8042 21.0121 11.5536 20.9293 11.3582 20.7657C11.1627 20.6021 11.0371 20.3701 11.007 20.117L11 20V4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3ZM8 6C8.26522 6 8.51957 6.10536 8.70711 6.29289C8.89464 6.48043 9 6.73478 9 7V17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18C7.73478 18 7.48043 17.8946 7.29289 17.7071C7.10536 17.5196 7 17.2652 7 17V7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6ZM16 6C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6ZM4 9C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10V14C5 14.2652 4.89464 14.5196 4.70711 14.7071C4.51957 14.8946 4.26522 15 4 15C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9ZM20 9C20.2449 9.00003 20.4813 9.08996 20.6644 9.25272C20.8474 9.41547 20.9643 9.63975 20.993 9.883L21 10V14C20.9997 14.2549 20.9021 14.5 20.7272 14.6854C20.5522 14.8707 20.313 14.9822 20.0586 14.9972C19.8042 15.0121 19.5536 14.9293 19.3582 14.7657C19.1627 14.6021 19.0371 14.3701 19.007 14.117L19 14V10C19 9.73478 19.1054 9.48043 19.2929 9.29289C19.4804 9.10536 19.7348 9 20 9Z"
          fill="white"
        />
      </svg>
    ),
    label: "Add Voice Memo",
    cardSubTitle: "Add a voice memo and enable AI assistance",
    inputTitle: "Voice Memo Title (Optional)",
    inputLink: "Upload Audio File (.mp3, .m4a, .wav, etc.)",
  },
];

export default function AddButton() {
  const [isAddButtonOpen, setIsAddButtonOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActionIdx, setSelectedActionIdx] = useState(null);

  return (
    <>
      {isModalOpen && selectedActionIdx !== null && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/50">
          <div className="relative bg-white border border-[#E5E7EB] rounded-[7.5px] shadow-2xl">
            <button
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              onClick={() => { setIsModalOpen(false); setSelectedActionIdx(null); }}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" stroke="#333" strokeWidth="2" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="#333" strokeWidth="2" />
              </svg>
            </button>
            <AddCard
              cardTitle={actions[selectedActionIdx].label}
              cardSubTitle={actions[selectedActionIdx].cardSubTitle}
              inputTitle={actions[selectedActionIdx].inputTitle}
              inputLink={actions[selectedActionIdx].inputLink}
            />
          </div>
        </div>
      )}

      <div className="fixed right-2 bottom-8 flex flex-col items-center z-50">
        {/* Action Buttons */}
        <div
          className={`flex flex-col items-center gap-4 mb-2 transition-all duration-300 ${
            isAddButtonOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none translate-y-4"
          }`}
        >
          {actions.map((action, idx) => (
            <div key={action.label} className="relative group flex items-center">
              <button
                onClick={() => { setIsModalOpen(true); setSelectedActionIdx(idx); }}
                className="w-[48px] h-[48px] rounded-full shadow-lg bg-[#666666] flex items-center justify-center text-white text-2xl hover:bg-[#0075FF] transition"
                style={{ transitionDelay: `${isAddButtonOpen ? idx * 60 : 0}ms` }}
                aria-label={action.label}
              >
                {action.icon}
              </button>
              {/* Tooltip to the left */}
              <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <Tooltip content={action.label} />
              </div>
            </div>
          ))}
        </div>
        {/* Main FAB */}
        <button
          className="rounded-full flex items-center justify-center transition-all duration-300 group"
          onClick={() => setIsAddButtonOpen((v) => !v)}
          aria-label={isAddButtonOpen ? "Close" : "Add"}
          style={{ padding: 0, border: "none" }}
        >
          <PlusToXIcon isAddButtonOpen={isAddButtonOpen} />
        </button>
      </div>
    </>
  );
}
