import { twMerge } from "tailwind-merge";

type PropType = {
  children: string;
  to: string;
  alt?: string;
  className?: string;
};
function LinkTo({ children, to, alt, className }: PropType) {
  return (
    <a
      className={
        className
          ? twMerge(
              `group text-lg font-semibold text-primary underline duration-300 hover:text-highlight `,
              `${className}`,
            )
          : "group text-lg font-semibold text-primary underline duration-300 hover:text-highlight"
      }
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {alt && (
        <span className="text-xs font-medium text-secondary duration-300 group-hover:text-highlight">
          twitter
        </span>
      )}
    </a>
  );
}

export default LinkTo;
