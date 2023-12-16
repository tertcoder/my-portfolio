import { twMerge } from "tailwind-merge";

function XTwitterIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={twMerge(`fill-white`, className)}
    >
      <g clip-path="url(#clip0_152_2)">
        <path
          d="M20.9534 15.2357L34.0603 0H30.9544L19.5737 13.229L10.4839 0H0L13.7455 20.0045L0 35.9815H3.10609L15.1244 22.0113L24.7239 35.9815H35.2078L20.9527 15.2357H20.9534ZM16.6992 20.1808L15.3065 18.1888L4.22526 2.33822H8.99604L17.9387 15.1301L19.3314 17.1221L30.9559 33.7496H26.1851L16.6992 20.1815V20.1808Z"
          // fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_152_2">
          <rect
            width="35.2078"
            height="36"
            // fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default XTwitterIcon;
