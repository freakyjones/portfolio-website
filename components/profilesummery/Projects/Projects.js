import { useCallback, useEffect, useRef, useState } from "react";
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

function Projects({ setCurrentSection }) {
  const { width, height } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const projectRef = useRef();

  const currentSectionCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setCurrentSection("projects");
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
    if (projectRef.current) observer.observe(projectRef.current);

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, [projectRef]);

  return (
    <div className="projects" ref={projectRef}>
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
