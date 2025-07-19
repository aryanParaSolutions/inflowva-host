import { useState } from "react";
import React from "react";

export default function AddCard() {
  const [enabled, setEnabled] = useState(false);

  return (
    <ul className="flex flex-col gap-5 items-start p-5 border border-[#E5E7EB] rounded-[7.5px] h-[88vh] w-[728px]">
      <li className="flex flex-col items-start gap-2 w-full">
        <p className="text-[24px]">Add Live Meeting</p>
        <p className="text-[12px] text-[#525252]">
          Add a live meeting and enable AI assistance
        </p>
        <hr className="border-t w-full border-[#E5E7EB] my-4" />
      </li>

      <li className=" text-[14px] flex flex-col gap-2">
        Meeting Title (Optional)
        <input
          className="p-2 border border-[#E5E7EB] rounded-[7.5px]"
          type="text"
          value=""
          placeholder="Enter Meeting Title"
        />
      </li>

      <li className=" text-[14px] flex flex-col gap-2">
        Meeting Link (Capture meetings from GMeet, Zoom and more.)
        <input
          className="p-2 border border-[#E5E7EB] rounded-[7.5px]"
          type="text"
          value=""
          placeholder="Paste Meeting Link"
        />
      </li>

      <li className=" text-[14px] flex flex-col gap-2">
        Invitees (Optional)
        <input
          className="p-2 border border-[#E5E7EB] rounded-[7.5px]"
          type="text"
          value=""
          placeholder="Enter E-mail IDs of Invitees"
        />
      </li>

      <li className="text-[14px] flex justify-between items-center w-full">
        Enable AI Bot
        <label className="relative inline-flex items-center cursor-pointer">
          <div className="relative">
            {/* Hidden checkbox */}
            <input
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="sr-only peer"
            />
            {/* Track */}
            <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-colors"></div>
            {/* Knob */}
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-5"></div>
          </div>
        </label>
      </li>

      <hr className="border-t w-full border-[#E5E7EB] my-4" />
      <li className="flex justify-start items-end gap-2 w-full">
        <button className="bg-[#171717] hover:bg-black px-3 py-2 text-[15px] text-white rounded-[7.5px]">
          Start Capturing
        </button>
        <button className="bg-[#F5F5F5] hover:bg-gray-200 px-3 py-2 text-[15px] rounded-[7.5px]">
          Cancel
        </button>
      </li>
    </ul>
  );
}
