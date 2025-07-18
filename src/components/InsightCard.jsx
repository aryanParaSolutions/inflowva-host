import React, { useState } from 'react';
import PlayLogo from '../ui/PlayLogo.jsx';
import ChatLogo from '../ui/ChatLogo.jsx';
import StackComp from '../ui/StackComp.jsx';
import SubInsightCard from './SubInsightCard.jsx';
import ThreeDotsLogo from '../ui/ThreeDotsLogo.jsx';

// Insights generated from the meetings goes here

export default function InsightCard({ insight }) {
  if (!insight) return null; 

  return (
    <div className="w-full h-[334px] bg-[#F6F6F6] rounded-[7.73px] border-l-4 border-black p-5 mb-6">
      <div className="flex flex-wrap justify-between items-center">
        <ul className="flex flex-wrap items-center gap-[12px]">
          <li>
            <button className="font-[500] text-[12px] text-white bg-[#57B9FF] px-[11.83px] py-[5.915px] rounded-sm block">
              {/* Meeting date goes here */}
              {insight.date}
            </button>
          </li>
          <li className=" w-[30px] h-[30px]">
            {/* Logo of the app where meeting is conducted */}
            <img
              src={insight.appSrc}
              alt={insight.meetingAppName}
            />
          </li>
          <li>
            <p>{insight.meetingTitle}</p>
          </li>
        </ul>

        <ul className="flex flex-wrap items-center gap-[12px]">
          <li>
            <PlayLogo />
          </li>
          <li>
            <ChatLogo />
          </li>
          <li>
            <ThreeDotsLogo />
          </li>
        </ul>
      </div>
      <br></br>

      {/* Insights about the meeting goes here */}
      <ul>
        <li className="font-[700] text-[13.527px] text-[#525252] mb-1">
          Strategy - <span className="font-[400]">{insight.strategy}</span>
        </li>
        <li className="font-[700] text-[13.527px] text-[#525252]">
          ❤️ Emotional Insights -{' '}
          <span className="font-[400]">{insight.emotionalInsight}</span>
        </li>
      </ul>
      <br></br>

      <ul className="flex flex-wrap gap-[10px] items-center">
        {/* looping the stacknames for dynamically displaying the insights of the stacks */}
        {insight.stackNames.slice(0, 2).map((stackName) => (
          <li key={stackName.name}>
            <StackComp name={stackName.name} />
          </li>
        ))}
        {insight.stackNames.length > 2 && (
          <li className="text-[13.527px]">+{insight.stackNames.length - 2}</li>
        )}
      </ul>

      <br></br>
      <hr className="text-[#E5E7EB] h-[1px]"></hr>

      <div className="flex items-center overflow-x-auto no-scrollbar">
        <ul className="flex flex-row gap-[10px] my-4.5">
          {insight.subInsights.map((subInsight) => (
            <li key={subInsight.name}>
              <SubInsightCard
                name={subInsight.name}
                bgColor={subInsight.bgColor}
                cardInfo={subInsight.cardInfo}
                svg={subInsight.svg}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
