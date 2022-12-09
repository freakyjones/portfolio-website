import Head from "next/head";
import Image from "next/image";
import Container from "../components/container/container";
import ProfileDetails from "../components/profiledetails/profiledetails";
import ProfileSummery from "../components/profilesummery/profilesummery";
import "../styles/Home.module.scss";

export default function Home() {
  return (
    <Container>
      <div className="home">
        <ProfileSummery />
        <ProfileDetails />
      </div>
    </Container>
  );
}
