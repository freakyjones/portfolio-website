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
  return (
    <div className="projects">
      <h2>Projects</h2>
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
