import React from "react";
import ServiceHero from "../Components/services/ServiceHero";
import ServiceCards from "../Components/services/ServiceCards";
import WhyChooseUs from "../Components/services/WhyChooseUs";
import ServiceFaqs from "../Components/services/ServiceFaqs";
import ServiceContact from "../Components/services/ServiceContact";

function Service() {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServiceCards />
      <WhyChooseUs />
      <ServiceFaqs />
      <ServiceContact />
    </div>
  );
}

export default Service;
