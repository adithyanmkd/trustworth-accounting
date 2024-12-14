import AboutSection from "../components/organisms/AboutSection";
import HeroSection from "../components/organisms/HeroSection";
import MissionSection from "../components/organisms/MissionSection";
import ServiceSection from "../components/organisms/ServiceSection";
import MainLayout from "../templates/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServiceSection />
    </MainLayout>
  );
};

export default Home;
