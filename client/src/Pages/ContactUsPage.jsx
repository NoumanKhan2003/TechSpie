import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "../utils/gsapUtils";

// Import components
import ContactHeader from "../components/ContactPage/ContactHeader";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactForm from "../components/ContactPage/ContactForm";

const ContactUsPage = () => {
  // Refs for animations
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formFieldsRef = useRef([]);

  // Reset array refs
  contactItemsRef.current = [];
  formFieldsRef.current = [];

  const addToContactRefs = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  const addToFormRefs = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Initial page animations
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        leftColRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" },
        "-=0.4"
      )
      .fromTo(
        rightColRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" },
        "-=0.7"
      )
      .fromTo(
        contactItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        formFieldsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Add floating animations to contact icons
    contactItemsRef.current.forEach((item, index) => {
      const icon = item.querySelector(".icon");
      if (icon) {
        gsap.to(icon, {
          y: index % 2 === 0 ? 8 : -8,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 2 + index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Cleanup
    return () => {
      if (tl) tl.kill();
      contactItemsRef.current.forEach((item) => {
        const icon = item.querySelector(".icon");
        if (icon) gsap.killTweensOf(icon);
      });
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="py-16 px-4 min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 relative overflow-hidden"
    >
      <Helmet>
        <title>Contact Us | Codespie</title>
        <meta
          name="description"
          content="Get in touch with Codespie for your software development needs. We're here to help bring your digital ideas to life."
        />
      </Helmet>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

      <ContactHeader headerRef={headerRef} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo
            leftColRef={leftColRef}
            addToContactRefs={addToContactRefs}
          />
          <ContactForm
            rightColRef={rightColRef}
            addToFormRefs={addToFormRefs}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
