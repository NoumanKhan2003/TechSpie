import React, { useEffect } from "react";
import ServiceHero from "../Components/services/ServiceHero";
import ServiceCards from "../Components/services/ServiceCards";
import WhyChooseUs from "../Components/services/WhyChooseUs";
import ServiceFaqs from "../Components/services/ServiceFaqs";
import ServiceContact from "../Components/services/ServiceContact";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="service-container space-y-0">
        <ServiceHero />
        <ServiceCards />
        <WhyChooseUs />
        <ServiceFaqs />
        <ServiceContact />
      </div>
    </div>
  );
}

export default Service;
