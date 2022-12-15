import CurrentLearning from "./Current Learning/CurrentLearning";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function ProfileSummery() {
  return (
    <div className="profileSummery">
      <Projects />
      <Skills />
      <CurrentLearning />
    </div>
  );
}

export default ProfileSummery;
