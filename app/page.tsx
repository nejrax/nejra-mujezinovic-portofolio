import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoSkills from "@/components/BentoSkills";
import ProjectGallery from "@/components/ProjectGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import RoboticsLab from "@/components/RoboticsLab";
import InternationalCommunication from "@/components/InternationalCommunication";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="grid-surface">
      <Navbar />
      <Hero avatarSrc="/images/NejraMujezinovic.jpeg" />
      <BentoSkills />
      <ProjectGallery />
      <ExperienceTimeline />
      <RoboticsLab />
      <InternationalCommunication />
      <Footer />
    </main>
  );
}
