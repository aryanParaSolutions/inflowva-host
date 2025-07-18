import React from 'react';
import { motion } from 'motion/react';
import Card from './Card.jsx';
import Filters from './Filters.jsx';
import SummaryCard from './SummaryCard.jsx';
import ListView from './ListView.jsx';
import CalendarView from './CalendarView.jsx';
import { useInsight } from '../context/InsightContext.jsx';

export default function MainDashboard() {
  const {
    showCalendar,
    setShowCalendar,
    showList,
    setShowList,
    insightTimelineDropdown,
  } = useInsight();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <SummaryCard />

      <ul className="grid sm:ml-4 sm:mr-4 sm:grid-cols-12 grid-cols-4 gap-2 place-items-center mt-12">
        <li className="sm:col-span-3 col-span-4">
          {/* Total Insights are displayed here... */}
          {
            <Card
              cartTitle="Total Insights Today"
              num="24"
              insightInfo="+8% from yesterday"
            />
          }
        </li>
        <li className="sm:col-span-3 col-span-4">
          {/* Attension Insights are dislayed here... */}
          {
            <Card
              cartTitle="Attension Insights"
              num="12"
              insightInfo="4 Due Today"
            />
          }
        </li>
        <li className="sm:col-span-3 col-span-4">
          {/* Upcomming meetings length will be displayed here */}
          {
            <Card
              cartTitle="Upcoming Meetings"
              num="5"
              insightInfo="Next in 2h"
            />
          }
        </li>
        <li className="sm:col-span-3 col-span-4">
          {/* No. of active team members will be displayed here... */}
          {
            <Card
              cartTitle="Team Members Active"
              num="8"
              insightInfo="+2 This Week"
            />
          }
        </li>
      </ul>

      {/* Implement Filter Bars Component */}
      <Filters
        filterName="Insight Timeline"
        filters={insightTimelineDropdown}
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

      {/* Calendar View */}
      {showCalendar && (
        <div className="mt-6">
          <CalendarView />
        </div>
      )}

      {showList && (
        <div className="mt-6">
          <ListView />
        </div>
      )}
    </motion.div>
  );
}
