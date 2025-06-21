import AboutHero from "../Components/aboutUs/AboutHero";
import Mission from "../Components/aboutUs/Mission";
import Technologies from "../Components/aboutUs/Technologies";
import Process from "../Components/aboutUs/Process";
import CallToAction from "../Components/aboutUs/CallToAction";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen w-full mx-auto bg-gray-50">
      <AboutHero />
      <Mission />
      <Technologies />
      <Process />
      <CallToAction
        title="Ready to Transform Your Business?"
        description="Partner with Techspie and embark on a journey of innovation and excellence. Together, we can turn your vision into reality and create impactful digital solutions for a brighter future. Let’s build something amazing—starting today."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}

export default AboutUs;
