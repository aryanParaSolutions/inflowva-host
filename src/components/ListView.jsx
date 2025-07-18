import React, { useState } from 'react';
import '../index.css';
import InsightCard from './InsightCard.jsx';
import { useInsight } from '../context/InsightContext.jsx';

export default function ListView() {
  const { insights } = useInsight();
 
  return (
    <div className="mt-6 mx-8 overflow-auto h-[500px] rounded-xl border border-[#E5E7EB] p-5 no-scrollbar">
      <ul className="flex flex-col">
        {insights.map((insight) => (
          <li key={insight.id}>
            <InsightCard insight={insight} />
          </li>
        ))}
      </ul>
    </div>
  );
}
