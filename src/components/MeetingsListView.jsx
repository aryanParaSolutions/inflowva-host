import React from 'react';

export default function MeetingListView() {
  return (
    <div className="flex flex-col gap-6 items-start mx-8 mt-6">
      {/* Upcoming Meetings goes here... */}

      <p className="text-[16px]">Upcoming Meetings</p>

      {/* List of Meetings goes here... */}

      <div className="bg-white border border-[#E5E7EB] rounded-[6px] p-3">
        <ul className="flex justify-around items-center gap-6 w-full mx-4">
          <li className="flex justify-center items-center gap-2">
            <div className="contain w-[30px] h-[30px]">
              <img
                src="https://cdn.worldvectorlogo.com/logos/zoom-app.svg"
                alt="Zoom Logo"
              />
            </div>

            <ul className="flex flex-col items-start gap-1">
              <li className="text-[14px]">Weekly Report Marketing + Sales</li>
              <li className="text-[10px] text-[#ACACAC]">
                May 20th, 2025 | 11:00 AM{' '}
              </li>
            </ul>
          </li>

          <li className="flex justify-center items-center gap-2 bg-gray-100 rounded-[5vw] py-1.5 pl-2 pr-4">
            <div className="w-[38px] cover">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                alt="Profile Photo"
              />
            </div>

            <ul className="flex flex-col items-start">
              <li className="text-[11px]">Sarah Joshep</li>
              <li className="text-[8px] text-[#9E9E9E]">Owner</li>
            </ul>
          </li>

          <li className="flex justify-center items-center text-[10px] gap-1 bg-gray-300 rounded-[5vw] py-1.5 pl-2 pr-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M2.90336 14.0192L7.14602 9.77656M12.4887 7.88989L11.2187 11.6999C11.1984 11.761 11.1637 11.8162 11.1175 11.861C11.0713 11.9058 11.015 11.9388 10.9534 11.9572L3.16803 14.2712C3.09789 14.2921 3.02338 14.2933 2.95261 14.2747C2.88183 14.2561 2.81751 14.2185 2.76664 14.1659C2.71577 14.1133 2.6803 14.0478 2.66409 13.9764C2.64788 13.9051 2.65154 13.8306 2.67469 13.7612L5.20269 6.17856C5.22081 6.12412 5.25043 6.07421 5.28954 6.03222C5.32865 5.99024 5.37633 5.95716 5.42936 5.93523L9.02069 4.45656C9.0937 4.42641 9.17401 4.41854 9.25148 4.43397C9.32896 4.44939 9.40013 4.48741 9.45602 4.54323L12.392 7.48056C12.4446 7.53308 12.4814 7.5992 12.4985 7.6715C12.5156 7.74379 12.5122 7.81942 12.4887 7.88989Z"
                  stroke="black"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5674 7.65533L14.4527 5.76933C14.7027 5.51929 14.8431 5.18021 14.8431 4.82666C14.8431 4.47311 14.7027 4.13403 14.4527 3.884L13.0394 2.46933C12.9155 2.34546 12.7685 2.2472 12.6067 2.18016C12.4449 2.11312 12.2715 2.07861 12.0964 2.07861C11.9212 2.07861 11.7478 2.11312 11.586 2.18016C11.4242 2.2472 11.2772 2.34546 11.1534 2.46933L9.26802 4.35533M8.56002 8.362C8.46713 8.26915 8.35687 8.19551 8.23552 8.14528C8.11417 8.09505 7.98412 8.06921 7.85278 8.06925C7.72145 8.06928 7.59141 8.09517 7.47009 8.14546C7.34876 8.19575 7.23853 8.26944 7.14569 8.36233C7.05284 8.45522 6.9792 8.56548 6.92897 8.68683C6.87874 8.80818 6.8529 8.93823 6.85294 9.06957C6.85297 9.2009 6.87887 9.33094 6.92915 9.45226C6.97944 9.57359 7.05313 9.68382 7.14602 9.77666C7.33362 9.96417 7.58802 10.0695 7.85326 10.0694C8.1185 10.0694 8.37285 9.96393 8.56035 9.77633C8.74786 9.58873 8.85317 9.33433 8.85311 9.06909C8.85304 8.80385 8.74762 8.5495 8.56002 8.362Z"
                  stroke="black"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            | Department
          </li>

          <li>
            <ul className="flex flex-row w-[5vw] bg-gray-800">
              <li className="w-[30px] h-[30px] z-0">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt="Profile Photo"
                />
              </li>
              <li className="w-[30px] h-[30px] z-10">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt="Profile Photo"
                />
              </li>
              <li className="w-[30px] h-[30px] z-20">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt="Profile Photo"
                />
              </li>
              <li className="w-[30px] h-[30px] z-30">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt="Profile Photo"
                />
              </li>
            </ul>
          </li>

          <li>list</li>

          <li>list</li>
        </ul>
      </div>
    </div>
  );
}
