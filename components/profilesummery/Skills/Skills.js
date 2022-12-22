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

function Skills() {
  return (
    <div className="skills">
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
