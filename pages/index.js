import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Container from "../components/container/container";
import ProfileDetails from "../components/profiledetails/profiledetails";
import ProfileSummery from "../components/profilesummery/profilesummery";
import "../styles/Home.module.scss";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("projects");
  return (
    <Container>
      <div className="home">
        <ProfileDetails
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <ProfileSummery
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
    </Container>
  );
}
