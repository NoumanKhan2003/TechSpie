import React from "react";
import ServiceHero from "../Components/services/ServiceHero";
import ServiceCards from "../Components/services/ServiceCards";
import WhyChooseUs from "../Components/services/WhyChooseUs";
import ServiceFaqs from "../Components/services/ServiceFaqs";
import ServiceContact from "../Components/services/ServiceContact";
import { Helmet } from "react-helmet";

function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="service-container space-y-0">
        <Helmet>
          <title>Our Services | Codespie</title>
          <meta
            name="description"
            content="Explore our range of services at Codespie, from web development to digital marketing. We provide innovative solutions tailored to your business needs."
          />
        </Helmet>
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
