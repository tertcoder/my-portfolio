type PropType = {
  children: string;
  to: string;
  alt?: string;
};
function LinkTo({ children, to, alt }: PropType) {
  return (
    <a
      className="group text-lg font-semibold text-primary underline duration-300 hover:text-highlight "
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
