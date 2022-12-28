import Footer from "./footer/footer";
import Header from "./header/header";

function ProfileDetails({ currentSection, setCurrentSection }) {
  return (
    <div className="profile__details">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Footer />
    </div>
  );
}

export default ProfileDetails;
