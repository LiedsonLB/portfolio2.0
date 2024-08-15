import TechCarousel from "@/components/TechCarousel";
import Header from "@/partials/Header";
import Apresentation from "@/partials/Presentation";

export default function Home() {
  return (
    <div>
      <Header />
      <Apresentation />
      <TechCarousel />
    </div>
  );
}