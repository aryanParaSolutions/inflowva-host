export default function SyncCard() {
  return (
    <div className="flex justify-between items-center p-[14px] bg-[#F5F5F5] rounded-[7.5px] mx-8">
      <ul className="flex justify-start items-center gap-5">
        <li className="flex items-center gap-1 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <g clip-path="url(#clip0_309_2499)">
              <path
                d="M8.30873 14.899C10.2809 14.899 12.1724 14.1155 13.5669 12.721C14.9615 11.3264 15.7449 9.43498 15.7449 7.46279C15.7449 5.49059 14.9615 3.59917 13.5669 2.20462C12.1724 0.810063 10.2809 0.0266113 8.30873 0.0266113C6.33654 0.0266113 4.44512 0.810063 3.05056 2.20462C1.65601 3.59917 0.872559 5.49059 0.872559 7.46279C0.872559 9.43498 1.65601 11.3264 3.05056 12.721C4.44512 14.1155 6.33654 14.899 8.30873 14.899Z"
                fill="#404040"
              />
            </g>
            <defs>
              <clipPath id="clip0_309_2499">
                <path
                  d="M0.872559 0.0266113H15.7449V14.899H0.872559V0.0266113Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          {/* Status if synced or not */}
          Synced
        </li>

        <li className="flex items-center gap-1 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_309_2504)">
              <path
                d="M14.1967 7.6313C14.1967 11.7415 11.382 14.6666 7.22528 14.6666C3.23995 14.6666 0.0214844 11.4482 0.0214844 7.46283C0.0214844 3.4775 3.23995 0.259033 7.22528 0.259033C9.16566 0.259033 10.7981 0.970698 12.0559 2.14422L10.0952 4.02941C7.53028 1.55455 2.76067 3.4136 2.76067 7.46283C2.76067 9.97544 4.76786 12.0117 7.22528 12.0117C10.0778 12.0117 11.1467 9.96673 11.3152 8.90649H7.22528V6.42874H14.0834C14.1502 6.79764 14.1967 7.15202 14.1967 7.6313Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_309_2504">
                <path
                  d="M0.0214844 0.0266113H14.1967V14.899H0.0214844V0.0266113Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        {/* E-mail of the user */}
        example@.com
        </li>

        <li className="text-[14px] text-[#525252]">Last Synced: 5 mins ago</li>
      </ul>

      <button className="text-[14px] bg-[#E5E5E5] hover:bg-[#E1E1E1] rounded-[7.5px] p-2">Manage Sync</button>
    </div>
  );
}
