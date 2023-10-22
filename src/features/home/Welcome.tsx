import LinkToBtn from "../../ui/LinkToBtn";
import { HiArrowSmallRight } from "react-icons/hi2";
function Welcome() {
  return (
    <div className="flex flex-col items-center gap-8 pt-24">
      <div className="grid w-full place-content-center gap-4 text-center md:grid-cols-2 md:text-start">
        <div className="w-full">
          <p className="text-sm font-medium text-secondary">Hello, I do</p>
          <h1 className="max-w-lg  text-4xl font-bold text-primary ">
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
        <img src={"./react.png"} alt="ReactJS" />
        <img src={"./js.png"} alt="JavaScript" />
        <img src={"./ts.png"} alt="Typescript" />
        <img src={"./css.png"} alt="CSS" />
        <img src={"./html.png"} alt="HTML" />
        <img src={"./github.png"} alt="GitHun" />
        <img src={"./git.png"} alt="GIT" />
        <img src={"./figma.png"} alt="Figma" />
        <img src={"./vscode.png"} alt="VSCode" />
        <img src={"./supabase.png"} alt="Supabase" />
        <img src={"./vite.png"} alt="ViteJS" />
        <img src={"./redux.png"} alt="Redux" />
        <img src={"./reactQuery.png"} alt="ReactQuery" />
        <img src={"./reactRouter.png"} alt="ReactRouter" />
        <img src={"./ubuntu.png"} alt="Ubuntu" />
      </div>
    </div>
  );
}

export default Welcome;
