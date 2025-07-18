import ThreeDotsLogo from '../ui/ThreeDotsLogo.jsx';
  
export default function SubInsightCard({ name, bgColor, cardInfo, svg }) {


  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-[4.8px] h-[13vh]">
      <div className="flex justify-between items-center">
        {/* the potential risks, suggestion, opportunities and patterns insights goes here... */}
        <ul className="flex justify-start items-center gap-3">
          <li
            // the color of the unit based on its name
            className={`text-[9px] text-white ${bgColor} flex items-center gap-[3px] rounded-[999px] p-1 px-2`}
          >
            <div>
              {svg}
            </div>
            {/* The name of the insight generated. for e.g. (Risk, Suggestion, Opportunities, Patterns) */}
            {name}
          </li>
          <li className="w-[20px] h-[20px]">
            <img
              
              src="https://png.pngtree.com/png-clipart/20210606/original/pngtree-red-push-pin-isolated-realistic-thumbtack-board-tack-png-image_6398035.jpg"
              
              alt="Board Pin"
            />
          </li>
        </ul>

        <div className="w-[16px] h-16px]">
          <ThreeDotsLogo />
        </div>
      </div>

      <div className="flex justufy-between items-center gap-3">
        <p className="text-[10px] w-[12vw] line-clamp-2">
          {/* The context about the insight based on its name */}
          {cardInfo}
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z"
              fill="#2196F3"
            />
            <path
              d="M9.16663 9.16669H10.8333V13.75H9.16663V9.16669Z"
              fill="white"
            />
            <path
              d="M10 7.91665C10.5753 7.91665 11.0417 7.45028 11.0417 6.87498C11.0417 6.29968 10.5753 5.83331 10 5.83331C9.42474 5.83331 8.95837 6.29968 8.95837 6.87498C8.95837 7.45028 9.42474 7.91665 10 7.91665Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
