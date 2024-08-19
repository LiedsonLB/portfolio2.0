import TechCarousel from "@/components/TechCarousel";
import AboutMe from "@/partials/AboutMe";
import ContateMe from "@/partials/ContateMe";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import MyProjects from "@/partials/MyProjects";
import MySoftSkills from "@/partials/MySoftskills";
import MyStacks from "@/partials/MyStacks";
import Apresentation from "@/partials/Presentation";

export default function Home() {
  return (
    <div>
      <Header />
      <Apresentation />
      <TechCarousel />
      <AboutMe />
      <MyStacks />
      <MySoftSkills />
      <MyProjects />
      <ContateMe />
      <Footer />
    </div>
  );
}