import { HiArrowRight } from "react-icons/hi2";

type PropType = { title: string; description: string };
function Experience({ title, description }: PropType) {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      <div className="text-highlight">
        <HiArrowRight />
      </div>
      <div className="text-primary">
        <h2 className="mb-2 font-bold leading-none">{title}</h2>
        <p className="max-w-4xl font-medium text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default Experience;
