import React from 'react';
import { motion } from 'motion/react';
import Filters from '../components/Filters.jsx';
import MeetingListView from '../components/MeetingsListView.jsx';
import AddMeetingButton from '../ui/AddMeetingButton.jsx';

export default function Meetings() {
  const meetingsDropdown = [
    {
      id: 'content',
      name: 'Content Type',
      options: [
        { value: 'Content Type', label: 'Content Type' },
        { value: 'all', label: 'All' },
        { value: 'meeting', label: 'Meeting' },
        { value: 'report', label: 'Team Report' },
        { value: 'memo', label: 'Voice Memo' },
      ],
    },
    {
      id: 'department',
      name: 'Department',
      options: [
        { value: 'Department', label: 'Department' },
        { value: 'all', label: 'All' },
        { value: 'tech', label: 'Tech' },
        { value: 'design', label: 'Design' },
        { value: 'marketing', label: 'Marketing' },
      ],
    },
    {
      id: 'insight',
      name: 'Insight Type',
      options: [
        { value: 'Insight Type', label: 'Insight Type' },
        { value: 'risk', label: 'Risk' },
        { value: 'patterns', label: 'Patterns' },
        { value: 'opportunity', label: 'Opportunity' },
        { value: 'suggestions', label: 'Suggestions' },
      ],
    },
    {
      id: 'view-range',
      name: 'View Range',
      options: [
        { value: 'View Range', label: 'View Range' },
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'custom', label: 'Custom Range' },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Filters filterName="Meetings" filters={meetingsDropdown} />

      <MeetingListView />

      {/* Add Meeting Button */}
      <AddMeetingButton />
    </motion.div>
  );
}
