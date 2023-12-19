import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="text-white p-12 mx-auto flex flex-col items-center">
      <h1 className="mb-8 lg:mb-16 text-3xl font-extrabold text-center md:text-4xl">
        Skills
      </h1>
      <ul className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="border border-gray-500 rounded-md p-4 flex-col items-center flex justify-center text-xl md:text-2xl cursor-pointer"
          >
            <p>{skill.icon}</p>
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Javascript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

export default Skills