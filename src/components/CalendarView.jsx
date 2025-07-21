import React, { useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView() {
  // const [events, setEvents] = useState([
  //   {
  //     id: 1,
  //     title: 'Team Meeting',
  //     start: new Date(2025, 0, 15, 10, 0), // January 15, 2025, 10:00 AM
  //     end: new Date(2025, 0, 15, 11, 0),   // January 15, 2025, 11:00 AM
  //     resource: 'meeting',
  //   },
  //   {
  //     id: 2,
  //     title: 'Project Review',
  //     start: new Date(2025, 0, 16, 14, 0), // January 16, 2025, 2:00 PM
  //     end: new Date(2025, 0, 16, 15, 30),  // January 16, 2025, 3:30 PM
  //     resource: 'review',
  //   },
  //   {
  //     id: 3,
  //     title: 'Voice Memo Recording',
  //     start: new Date(2025, 0, 17, 9, 0),  // January 17, 2025, 9:00 AM
  //     end: new Date(2025, 0, 17, 9, 30),   // January 17, 2025, 9:30 AM
  //     resource: 'memo',
  //   },
  // ]);

  // const eventStyleGetter = (event, start, end, isSelected) => {
  //   let backgroundColor = '#3174ad';

  //   switch (event.resource) {
  //     case 'meeting':
  //       backgroundColor = '#7B61FF';
  //       break;
  //     case 'review':
  //       backgroundColor = '#57B9FF';
  //       break;
  //     case 'memo':
  //       backgroundColor = '#415C6B';
  //       break;
  //     default:
  //       backgroundColor = '#3174ad';
  //   }

  //   return {
  //     style: {
  //       backgroundColor,
  //       borderRadius: '4px',
  //       opacity: 0.8,
  //       color: 'white',
  //       border: '0px',
  //       display: 'block',
  //     },
  //   };
  // };

  // const handleSelectSlot = ({ start, end }) => {
  //   const title = window.prompt('New Event name');
  //   if (title) {
  //     const newEvent = {
  //       id: events.length + 1,
  //       title,
  //       start,
  //       end,
  //       resource: 'meeting',
  //     };
  //     setEvents([...events, newEvent]);
  //   }
  // };

  // const handleSelectEvent = (event) => {
  //   const action = window.confirm(`Event: ${event.title}\n\nWould you like to delete this event?`);
  //   if (action) {
  //     setEvents(events.filter(e => e.id !== event.id));
  //   }
  // };

  return (
    <div className="mt-6 mx-8">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6">
          <div style={{ height: "600px" }}>
            <Calendar
              localizer={localizer}
              events={[] /* Replace with your events state */}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "75vh", marginTop: 20 }}
              eventPropGetter={() => ({
                style: {
                  backgroundColor: "#6366f1",
                  borderRadius: "6px",
                  color: "#fff",
                  padding: "5px",
                },
              })}
            />
          </div>
        </div>
      </div>

      {/* <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#7B61FF] rounded mr-2"></div>
          <span>Meetings</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#57B9FF] rounded mr-2"></div>
          <span>Reviews</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#415C6B] rounded mr-2"></div>
          <span>Voice Memos</span>
        </div>
      </div> */}
    </div>
  );
}
