import React from "react";
import MRVCard from "./MRVCard.jsx";

export default function MRVListView( {firstTitle, secondTitle} ) {
  return (
    <div className="flex flex-col gap-6 items-start mx-8">

      {/* Upcoming Meetings goes here... */}
      <p className="text-[16px] mt-8">{firstTitle}</p>

      {/* List of Upcoming Meetings goes here... */}
      <MRVCard />
      <MRVCard />
      <MRVCard />



      {/* Past Meetings goes here... */}
      <p className="text-[16px] mt-8">{secondTitle}</p>

      {/* List of Past Meetings goes here... */}
      <MRVCard />
      <MRVCard />
      <MRVCard />
      
    </div>
  );
}
