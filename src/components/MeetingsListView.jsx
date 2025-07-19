import React from "react";
import MeetingCard from "./MVRCard.jsx";

export default function MeetingListView() {
  return (
    <div className="flex flex-col gap-6 items-start mx-8">

      {/* Upcoming Meetings goes here... */}
      <p className="text-[16px] mt-8">Upcoming Meetings</p>

      {/* List of Upcoming Meetings goes here... */}
      <MeetingCard />
      <MeetingCard />
      <MeetingCard />



      {/* Past Meetings goes here... */}
      <p className="text-[16px] mt-8">Past Meetings</p>

      {/* List of Past Meetings goes here... */}
      <MeetingCard />
      <MeetingCard />
      <MeetingCard />
      
    </div>
  );
}
