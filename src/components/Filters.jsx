
import { NavLink, Link } from 'react-router-dom';

export default function Filters({
  filterName,
  filters,
  onCalendarToggle,
  showCalendar,
  onListToggle,
  showList,
}) {

  return (
    <div className="flex flex-wrap justify-between items-center mx-8 mt-12">
      <div>
        <p className="font-[500] text-[24px] mt-3">{filterName}</p>
      </div>

      <ul className="flex flex-wrap justify-between items-center">
        <li className="m-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search here..."
              className="text-[13px] pl-10 p-1.75 w-[10rem] border border-[#E5E7EB] rounded-[8px] focus:outline-none focus:ring focus:ring-[#2196f3]"
            />
          </div>
        </li>

        {filters.map((dropdown) => (
          <li
            key={dropdown.id}
            className="text-[13px] border border-[#E5E7EB] rounded-[8px] pr-2 m-2 hover:bg-gray-100"
          >
            <label htmlFor={dropdown.id}></label>
            <select
              className="px-2 py-1.75"
              name={dropdown.name}
              id={dropdown.id}
              defaultValue={dropdown.options[0].label}
            >
              {dropdown.options.map((option) => (
                <option
                  key={option.value}
                  className={
                    option.value === option.label
                      ? 'bg-gray-400'
                      : 'bg-[#F5F5F5]'
                  }
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </li>
        ))}
        <li className="flex flex-wrap justify-between items-center m-2">
          {/* list view button */}
          <button
            onClick={onListToggle}
            className={`border border-[#E5E7EB] rounded-l-sm p-2 ${
              showList
                ? 'bg-[#2196F3]'
                : 'hover:bg-[#F0F0F0]'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.98334 11.7667C3.98334 11.6518 4.02899 11.5415 4.11026 11.4603C4.19152 11.379 4.30174 11.3334 4.41667 11.3334H13.0833C13.1983 11.3334 13.3085 11.379 13.3897 11.4603C13.471 11.5415 13.5167 11.6518 13.5167 11.7667C13.5167 11.8816 13.471 11.9918 13.3897 12.0731C13.3085 12.1544 13.1983 12.2 13.0833 12.2H4.41667C4.30174 12.2 4.19152 12.1544 4.11026 12.0731C4.02899 11.9918 3.98334 11.8816 3.98334 11.7667ZM3.98334 8.30002C3.98334 8.1851 4.02899 8.07488 4.11026 7.99361C4.19152 7.91235 4.30174 7.86669 4.41667 7.86669H13.0833C13.1983 7.86669 13.3085 7.91235 13.3897 7.99361C13.471 8.07488 13.5167 8.1851 13.5167 8.30002C13.5167 8.41495 13.471 8.52517 13.3897 8.60644C13.3085 8.6877 13.1983 8.73336 13.0833 8.73336H4.41667C4.30174 8.73336 4.19152 8.6877 4.11026 8.60644C4.02899 8.52517 3.98334 8.41495 3.98334 8.30002ZM3.98334 4.83336C3.98334 4.71843 4.02899 4.60821 4.11026 4.52694C4.19152 4.44568 4.30174 4.40002 4.41667 4.40002H13.0833C13.1983 4.40002 13.3085 4.44568 13.3897 4.52694C13.471 4.60821 13.5167 4.71843 13.5167 4.83336C13.5167 4.94828 13.471 5.0585 13.3897 5.13977C13.3085 5.22104 13.1983 5.26669 13.0833 5.26669H4.41667C4.30174 5.26669 4.19152 5.22104 4.11026 5.13977C4.02899 5.0585 3.98334 4.94828 3.98334 4.83336Z"
                fill={showList ? `white` : 'black'}
              />
            </svg>
          </button>
          {/* Calendar toggle button */}
          <button
            onClick={onCalendarToggle}
            className={`border border-[#E5E7EB] rounded-r-sm p-2 ${
              showCalendar
                ? 'bg-[#2196F3]'
                : 'hover:bg-[#F0F0F0]'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M2.8874 7.0249C2.75811 7.0249 2.63411 6.97354 2.54269 6.88212C2.45126 6.79069 2.3999 6.6667 2.3999 6.5374V2.63838C2.3999 2.50909 2.45126 2.38509 2.54269 2.29366C2.63411 2.20224 2.75811 2.15088 2.8874 2.15088H6.7874C6.91669 2.15088 7.04069 2.20224 7.13212 2.29366C7.22354 2.38509 7.2749 2.50909 7.2749 2.63838V6.5374C7.2749 6.6667 7.22354 6.79069 7.13212 6.88212C7.04069 6.97354 6.91669 7.0249 6.7874 7.0249H2.8874ZM9.7124 7.0249C9.58311 7.0249 9.45911 6.97354 9.36768 6.88212C9.27626 6.79069 9.2249 6.6667 9.2249 6.5374V2.63838C9.2249 2.50909 9.27626 2.38509 9.36768 2.29366C9.45911 2.20224 9.58311 2.15088 9.7124 2.15088H13.6114C13.7407 2.15088 13.8647 2.20224 13.9561 2.29366C14.0476 2.38509 14.0989 2.50909 14.0989 2.63838V6.5374C14.0989 6.6667 14.0476 6.79069 13.9561 6.88212C13.8647 6.97354 13.7407 7.0249 13.6114 7.0249H9.7124ZM2.8874 13.8499C2.75811 13.8499 2.63411 13.7985 2.54269 13.7071C2.45126 13.6157 2.3999 13.4917 2.3999 13.3624V9.4624C2.3999 9.33311 2.45126 9.20911 2.54269 9.11769C2.63411 9.02626 2.75811 8.9749 2.8874 8.9749H6.7874C6.91669 8.9749 7.04069 9.02626 7.13212 9.11769C7.22354 9.20911 7.2749 9.33311 7.2749 9.4624V13.3624C7.2749 13.4917 7.22354 13.6157 7.13212 13.7071C7.04069 13.7985 6.91669 13.8499 6.7874 13.8499H2.8874ZM9.7124 13.8499C9.58311 13.8499 9.45911 13.7985 9.36768 13.7071C9.27626 13.6157 9.2249 13.4917 9.2249 13.3624V9.4624C9.2249 9.33311 9.27626 9.20911 9.36768 9.11769C9.45911 9.02626 9.58311 8.9749 9.7124 8.9749H13.6114C13.7407 8.9749 13.8647 9.02626 13.9561 9.11769C14.0476 9.20911 14.0989 9.33311 14.0989 9.4624V13.3624C14.0989 13.4917 14.0476 13.6157 13.9561 13.7071C13.8647 13.7985 13.7407 13.8499 13.6114 13.8499H9.7124Z"
                fill={showCalendar ? `white` : 'black'}
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
