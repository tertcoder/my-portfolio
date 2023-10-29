import { HiArrowSmallLeft } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import Experience from "./Experience";
import { motion } from "framer-motion";

export type ExperienceType = {
  title: string;
  description: string;
};

const showComponent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

export const showComponentItem = {
  initial: {
    x: -5,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const experiences: ExperienceType[] = [
  {
    title: "Self-Taught Learning",
    description:
      "Embarked on a self-directed learning journey to build a strong foundation in frontend web development and UI Design. Completed comprehensive online courses, including FreeCodeCamp’s Responsive Web Design certification, where i gained proficiency in creating responsive and visually appealing websites.",
  },
  {
    title: "Independent Projects",
    description:
      "Developed a range of independent projects to apply and enhance my skills in HTML CSS TailwindCSS JavaScript  and React JS/TS. These projects allowed me to demonstrate my ability to create functional and user-friendly web interfaces.",
  },
  {
    title: "Extensive Reseach",
    description:
      "Conducted extensive research and self-study to deepen my knowledge in areas such as  JavaScript, React JS/TS, TailwindCSS and other relevant technologies. This independent exploration sharpened my problem-solving skills and expanded my understanding of industry best practices",
  },
  {
    title: "Collaborative Projects",
    description:
      "Engages in collaborative projects with my team to gain hands-on experience in teamwork, project management, and version control using tools like GitHub.",
  },
];
function Experiences() {
  return (
    <motion.div
      variants={showComponent}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-between px-4 py-10"
    >
      <div className="flex w-full flex-1 flex-col gap-5 pb-8">
        {experiences.map((experience) => (
          <Experience
            variants={showComponentItem}
            key={experience.title}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>
      <LinkToBtn to="/works/projects" type="secondary">
        <span className="flex items-center gap-0.5">
          <span className="text-highlight">
            <HiArrowSmallLeft />
          </span>{" "}
          Back to
        </span>
        <span className="text-highlight">Projects</span>
      </LinkToBtn>
    </motion.div>
  );
}

export default Experiences;
