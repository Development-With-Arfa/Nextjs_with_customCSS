import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Events from "./components/Events";
import Explore from "./components/Explore";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Nav/>
      <HeroSection/>
      <Events/>
      <Explore/>
      <Tours/>
      <Footer/>
    </main>
   );
}
