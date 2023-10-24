import { HiArrowSmallRight } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import Work from "./Work";
export type WorkType = {
  title: string;
  techs: string[];
  code?: string;
  live?: string;
  design?: string;
  image: string;
};
const works: WorkType[] = [
  {
    title: "TBR Agency",
    techs: ["react", "css"],
    code: "https://github.com/",
    live: "https://google.com/",
    image: "../src/assets/images/tbr.png",
  },
  {
    title: "Tracking Location",
    techs: ["react", "css", "firebase"],
    code: "https://github.com/",
    live: "https://google.com/",
    image: "../src/assets/images/trackL.png",
  },
  {
    title: "WearShoes",
    techs: ["uidesign", "figma"],
    design: "https://figma.com/",
    image: "../src/assets/images/wear.png",
  },
  {
    title: "My portfolio",
    techs: ["react", "tailwindcss", "figma", "uidesign"],
    code: "https://github.com/",
    live: "https://google.com/",
    design: "https://figma.com",
    image: "../src/assets/images/portfolio.png",
  },
];

function Projects() {
  return (
    <div className="flex flex-col items-center justify-between py-10">
      <div className="gap flex w-full flex-1 flex-wrap justify-center gap-7 pb-8">
        {works.map((work) => (
          <Work
            key={work.title}
            title={work.title}
            techs={work.techs}
            code={work.code}
            live={work.live}
            design={work.design}
            image={work.image}
          />
        ))}
      </div>
      <LinkToBtn to="/experiences" type="secondary">
        <span>See my </span>
        <span className="flex items-center text-highlight">
          Experince <HiArrowSmallRight />
        </span>
      </LinkToBtn>
    </div>
  );
}

export default Projects;
