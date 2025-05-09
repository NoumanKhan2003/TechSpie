import React from "react";
import Home from "../Components/Home";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/Choose";
import Team from "../Components/Team";
import OurApproach from "../Components/Approach";
import ContactForm from "../Components/Form";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Services />
      <WhyChooseUs />
      <Team />
      <OurApproach />
      <ContactForm />
    </div>
  );
};

export default HomePage;
