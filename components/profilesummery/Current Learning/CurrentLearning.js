import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../hooks/useDimensionHooks";
import ContactForm from "./contactme.js/contactme";

function WorkExperience({ setCurrentSection }) {
  const { width, height } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const contactmeRef = useRef();

  const currentSectionCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setCurrentSection("contactme");
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
    if (contactmeRef.current) observer.observe(contactmeRef.current);

    return () => {
      if (contactmeRef.current) observer.unobserve(contactmeRef.current);
    };
  }, [contactmeRef]);

  return (
    <div className="contactme" ref={contactmeRef}>
      {isMobile && <h2>Contact Me</h2>}
      <div className="contactform">
        <ContactForm />
      </div>
    </div>
  );
}

export default WorkExperience;
