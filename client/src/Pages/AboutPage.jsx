import AboutHero from "../Components/AboutUs/AboutHero";
import Mission from "../Components/AboutUs/Mission";
import Technologies from "../Components/AboutUs/Technologies";
import Process from "../Components/AboutUs/Process";
import CallToAction from "../Components/AboutUs/CallToAction";

function AboutUs() {
  return (
    <div className="min-h-screen w-full mx-auto px-4 bg-gray-50">
      <AboutHero />
      <Mission />
      <Technologies />
      <Process />
      <CallToAction
        title="Ready to Transform Your Business?"
        description="Join us on a journey of innovation and excellence. Let's build something amazing together."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}

export default AboutUs;
