import React, { use } from "react";
import { motion } from "motion/react";
import Filters from "../components/Filters.jsx";
import MRVListView from "../components/MRVListView.jsx";
import CalendarView from "../components/CalendarView.jsx";
import AddButton from "../ui/AddButton.jsx";
import { useInsight } from "../context/InsightContext.jsx";
import SyncCard from "../components/SyncCard.jsx";

export default function Meetings() {
  const {
    showCalendar,
    setShowCalendar,
    showList,
    setShowList,
    meetingsDropdown,
  } = useInsight();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Filters
        filterName="Meetings"
        filters={meetingsDropdown}
        onCalendarToggle={() => {
          if (!showCalendar) setShowCalendar(!showCalendar);
          setShowList(false);
        }}
        showCalendar={showCalendar}
        onListToggle={() => {
          if (!showList) setShowList(!showList);
          setShowCalendar(false);
        }}
        showList={showList}
      />

      {/* Meeting List View  */}
      {showList && (
        <div className="mt-6">
          <MRVListView
            firstTitle="Upcoming Meetings"
            secondTitle="Past Meetings"
          />
        </div>
      )}

      {/* Calendar View */}
      {showCalendar && (
        <>
          <div className="mt-6">
            <SyncCard />
            <CalendarView />
          </div>
        </>
      )}

      {/* Add Meeting Button */}
      <AddButton />
    </motion.div>
  );
}
