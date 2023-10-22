import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  className?: string;
  name: string;
  children: ReactElement;
  onClick: () => void;
};
function MenuBtn({ children, name, onClick }: PropsType) {
  const className =
    "flex h-14 w-14 items-center justify-center rounded-full bg-secondaryBg text-3xl font-bold text-primary duration-300 hover:text-highlight ";
  const content =
    name === "open" ? (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    ) : (
      name === "close" && (
        <button
          className={twMerge(
            `absolute -translate-x-1/2 -translate-y-1/2`,
            `${className}`,
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )
    );
  return content;
}

export default MenuBtn;
