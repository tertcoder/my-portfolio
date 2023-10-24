import LinkToBtn from "../../ui/LinkToBtn";
import { HiArrowSmallRight } from "react-icons/hi2";

const techs: string[][] = [
  ["ReactJS", "../src/assets/images/react.png"],
  ["JavaScript", "../src/assets/images/js.png"],
  ["Typescript", "../src/assets/images/ts.png"],
  ["CSS", "../src/assets/images/css.png"],
  ["HTML", "../src/assets/images/html.png"],
  ["GitHub", "../src/assets/images/github.png"],
  ["GIT", "../src/assets/images/git.png"],
  ["Figma", "../src/assets/images/figma.png"],
  ["VSCode", "../src/assets/images/vscode.png"],
  ["Supabase", "../src/assets/images/supabase.png"],
  ["ViteJS", "../src/assets/images/vite.png"],
  ["Redux", "../src/assets/images/redux.png"],
  ["ReactQuery", "../src/assets/images/reactQuery.png"],
  ["ReactRouter", "../src/assets/images/reactRouter.png"],
  ["Ubuntu", "../src/assets/images/ubuntu.png"],
];

function Welcome() {
  return (
    <div className="flex flex-col items-center gap-8  pt-10 md:pt-24">
      <div className="grid w-full place-content-center gap-4 text-center md:grid-cols-2 md:text-start">
        <div className="w-full">
          <p className="text-sm font-medium text-secondary">Hello, I do</p>
          <h1 className="max-w-lg  text-4xl font-bold uppercase text-primary ">
            FRONTEND DEVELOPMENT AND UI DESIGNING
          </h1>
        </div>
        <p className="max-w-lg translate-y-1 self-center text-base font-medium text-secondary">
          Crafting visually stunning and user-friendly digital experiences.
          Explore my work and discover how I bring creativity and functionality
          together to create impactful websites and interfaces.
        </p>
      </div>
      <LinkToBtn to="/about" type="secondary">
        <span className="font-medium">Learn More </span>
        <span className="flex items-center text-highlight">
          About me <HiArrowSmallRight />
        </span>
      </LinkToBtn>
      <div className="flex max-w-2xl flex-wrap justify-center gap-4 px-1 py-4">
        {techs.map((tech) => (
          <img src={tech[1]} alt={tech[0]} />
        ))}
      </div>
    </div>
  );
}

export default Welcome;
