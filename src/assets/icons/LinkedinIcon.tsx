import { twMerge } from "tailwind-merge";

function LinkedinIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={twMerge(`fill-white`, className)}
    >
      <g clip-path="url(#clip0_153_16)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.9 11.2748V12.6802C23.2559 11.8378 24.8212 11.3469 27.1996 11.3469C34.9405 11.3469 35.9315 17.1329 35.9315 22.1734V35.9212L26.9811 36V22.8514C26.9811 20.6441 26.1905 20.2252 24.7288 20.2252C23.3392 20.2252 22.4766 20.6644 22.4766 22.8514V36L13.409 35.9212V11.2748L21.9 11.2748ZM9.009 11.2599V35.9896H0V11.2599L9.009 11.2599ZM6.75675 13.5122H2.25225V33.7374H6.75675V13.5122ZM19.6478 13.527H15.6613V33.6892L20.2243 33.7297V22.8514C20.2243 18.6059 23.0464 17.973 24.7288 17.973C26.7829 17.973 29.2333 18.8198 29.2333 22.8514V33.7297L33.6793 33.6892V22.1734C33.6793 15.9234 31.9248 13.5991 27.1996 13.5991C24.3595 13.5991 23.1297 14.4414 21.9248 15.455L21.6117 15.7207H19.6478V13.527ZM4.5045 0C6.98874 0 9.009 2.02028 9.009 4.5045C9.009 6.98874 6.98874 9.009 4.5045 9.009C2.02028 9.009 0 6.98874 0 4.5045C0 2.02028 2.02028 0 4.5045 0ZM4.5045 2.25225C3.26351 2.25225 2.25225 3.26351 2.25225 4.5045C2.25225 5.74549 3.26351 6.75675 4.5045 6.75675C5.74549 6.75675 6.75675 5.74549 6.75675 4.5045C6.75675 3.26351 5.74549 2.25225 4.5045 2.25225Z"
          // fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_16">
          <rect
            width="36"
            height="36"
            // fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedinIcon;
