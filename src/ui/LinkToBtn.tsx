import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { twJoin, twMerge } from "tailwind-merge";

type PropsType = {
  type: string;
  to: string;
  custom?: string;
  onClick?: () => void;
  children: ReactElement | ReactElement[] | null;
};
function LinkToBtn({
  type,
  custom,
  onClick,
  to,
  children,
}: PropsType): ReactElement {
  const primary =
    "rounded-full bg-highlight/80 px-4 text-lg font-bold text-primary duration-300 hover:bg-highlight flex items-center justify-center py-4";
  const secondary =
    "rounded-full bg-secondaryBg px-4 py-2 text-sm font-semibold text-primary  flex items-center justify-center space-x-1.5";
  return (
    <>
      {type === "primary" && (
        <Link to={to} onClick={onClick} className={twMerge(primary, custom)}>
          {children}
        </Link>
      )}
      {type === "secondary" && (
        <Link to={to} className={secondary}>
          {children}
        </Link>
      )}
    </>
  );
}

export default LinkToBtn;
