import React from "react";
import Home from "../Components/Home";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/Choose";
import Team from "../Components/Team";
import OurApproach from "../Components/Approach";
import ContactForm from "../Components/Form";

const HomePage = () => {
  return (
    <main className="bg-gradient-to-b from-violet-50 via-white to-violet-50 relative">
      <div className="space-y-0 relative">
        <Home />
        <Services />
        <WhyChooseUs />
        <Team />
        <OurApproach />
        <ContactForm />
      </div>
    </main>
  );
};

export default HomePage;
