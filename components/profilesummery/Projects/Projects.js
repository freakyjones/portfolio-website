import { useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/useDimensionHooks";
import ProjectBox from "./ProjectBox/ProjectBox";

export const DetailsProject = [
  {
    id: 1,
    technology: ["React, Redux"],
    name: "Recipe website",
    description: "hello i am recipe website",
    github: "",
    website: "",
  },
  {
    id: 2,
    technology: ["React, Redux"],
    name: "Recipe website",
    description: "hello i am recipe website",
    github: "",
    website: "",
  },
  {
    id: 3,
    technology: ["React, Redux"],
    name: "Recipe website",
    description: "hello i am recipe website",
    github: "",
    website: "",
  },
];

function Projects() {
  const { width, height } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  return (
    <div className="projects">
      {isMobile && <h2>Projects</h2>}
      <div className="projects__container">
        {DetailsProject.map((projectinfo) => {
          return (
            <ProjectBox
              key={projectinfo.id}
              description={projectinfo.description}
              name={projectinfo.name}
              technology={projectinfo.technology}
              github={projectinfo.github}
              website={projectinfo.website}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
