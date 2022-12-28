import CurrentLearning from "./Current Learning/CurrentLearning";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function ProfileSummery({ currentSection, setCurrentSection }) {
  return (
    <div className="profileSummery">
      <Projects setCurrentSection={setCurrentSection} />
      <Skills setCurrentSection={setCurrentSection} />
      <CurrentLearning setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default ProfileSummery;
