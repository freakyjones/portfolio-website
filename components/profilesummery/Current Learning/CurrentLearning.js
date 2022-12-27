import { useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/useDimensionHooks";
import ContactForm from "./contactme.js/contactme";

function WorkExperience() {
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
    <div className="contactme">
      {isMobile && <h2>Contact Me</h2>}
      <div className="contactform">
        <ContactForm />
      </div>
    </div>
  );
}

export default WorkExperience;
