import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../hooks/useDimensionHooks";
import SkillBox from "./SkillsBox/skillbox";

export const skillsInfo = [
  {
    id: 1,
    name: "HTML",
    logo: "/images/react.svg",
    rating: 4.5,
    totalStars: 5,
    activeStars: 4.5,
  },
  {
    id: 2,
    name: "CSS",
    logo: "/images/react.svg",
    rating: 4.5,
    totalStars: 5,
    activeStars: 4.5,
  },
  {
    id: 3,
    name: "Javascript",
    logo: "/images/react.svg",
    rating: 4,
    totalStars: 5,
    activeStars: 4.5,
  },
  {
    id: 4,
    name: "React",
    logo: "/images/react.svg",
    totalStars: 5,
    activeStars: 4.5,
  },
  {
    id: 5,
    name: "SCSS",
    logo: "/images/react.svg",
    totalStars: 5,
    activeStars: 4.5,
  },
  {
    id: 6,
    name: "Node Js",
    logo: "/images/react.svg",
    totalStars: 5,
    activeStars: 4.5,
  },
];

function Skills({ setCurrentSection }) {
  const { width, height } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const skillRef = useRef();

  const currentSectionCallback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      console.log("skill happening");
      setCurrentSection("skills");
    }
  };

  useEffect(() => {
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    const observer = new IntersectionObserver(currentSectionCallback);
    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, [skillRef]);

  return (
    <div className="skills" ref={skillRef}>
      {isMobile && <h2>Skills</h2>}
      <div className="skills__container">
        {skillsInfo.map((skill) => {
          return (
            <SkillBox
              key={skill.id}
              name={skill.name}
              logo={skill.logo}
              totalStars={skill.totalStars}
              activeStars={skill.activeStars}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
