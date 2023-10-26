import { HiArrowSmallRight } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
const techs: string[] = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "typescript",
  "git",
  "github",
  "vitejs",
  "vscode",
  "figma",
  "supabase",
];
function Me() {
  return (
    <div className="flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-base text-secondary">I'm</p>
          <h2 className="text-3xl text-primary">Bon Tertius T.</h2>
          <p className="text-base text-secondary">
            A young and dynamic Burundian specialized in Frontend web
            development and UI Designing . Currently pursuing Bachelor degree in
            Science and Technologie with a focus on Software Engineering. With a
            passion for creating visually appealing and user-friendly digital
            experiences, I strive to bring ideas to life through innovative
            designs. I’m dedicated to staying up-to-date with the latest
            industry trends and technologies to deliver exceptional results.
            Let’s work together to create impactful digital solutions.
          </p>
        </div>
        <div className="max-w-lg text-center">
          <h3>Techs and Tools I use:</h3>
          <div className="flex flex-wrap justify-between">{}</div>
        </div>
      </div>
      <LinkToBtn to="/about/contact" type="secondary">
        <span>Let's </span>
        <span className="flex items-center gap-0.5 text-highlight">
          Get In Touch <HiArrowSmallRight />
        </span>
      </LinkToBtn>
    </div>
  );
}

export default Me;
