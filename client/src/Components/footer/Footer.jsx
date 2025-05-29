import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  Instagram,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../Assets/techspieLogo.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const contactsRef = useRef(null);
  const gridItemsRef = useRef([]);

  gridItemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    tl.fromTo(
      containerRef.current,
      { "--gradient-width": "0%" },
      { "--gradient-width": "100%", duration: 1 }
    );

    tl.fromTo(
      [logoRef.current, contactsRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
      "-=0.5"
    );

    tl.fromTo(
      gridItemsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.3 },
      "-=0.2"
    );
  });

  const contactItem = (icon, title, text, linkHref = null, gradientColors) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        padding: "16px",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(0, 0, 0, 0.03)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          width: 50,
          height: 50,
          background: gradientColors,
          mr: 2,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, color: "#334155", mb: 0.5 }}
        >
          {title}
        </Typography>
        {linkHref ? (
          <Typography
            variant="body2"
            component={Link}
            href={linkHref}
            sx={{
              color: "#64748b",
              textDecoration: "none",
              transition: "color 0.2s",
              "&:hover": { color: icon.props.sx.color },
            }}
          >
            {text}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );

  const sectionHeader = (title, gradientColors) => (
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#1e293b",
        mb: 2,
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          display: "block",
          width: "40px",
          height: "3px",
          background: gradientColors,
          mt: 1,
          borderRadius: "2px",
          mx: { xs: "auto", md: 0 },
        },
      }}
    >
      {title}
    </Typography>
  );

  const socialLinks = [
    { icon: <Facebook />, color: "#4267B2", label: "Facebook" },
    { icon: <Twitter />, color: "#1DA1F2", label: "Twitter" },
    { icon: <LinkedIn />, color: "#0A66C2", label: "LinkedIn" },
    { icon: <Instagram />, color: "#E4405F", label: "Instagram" },
  ];

  const linkStyle = {
    "& a": {
      color: "#64748b",
      textDecoration: "none",
      fontSize: "0.95rem",
      transition: "all 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: { xs: "center", md: "flex-start" },
      "&:hover": {
        color: "#8b5cf6",
        transform: "translateX(5px)",
      },
      "&::before": {
        content: '""',
        display: "inline-block",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        backgroundColor: "#60a5fa",
        marginRight: "10px",
        transition: "all 0.3s",
      },
      "&:hover::before": {
        backgroundColor: "#8b5cf6",
        width: "8px",
        height: "8px",
      },
    },
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: "#f8fafc",
        color: "#334155",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #8b5cf6, #6366f1, #3b82f6)",
          width: "var(--gradient-width, 100%)",
        },
        boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        {/* Top section with logo and contact info */}
        <Box
          ref={contactsRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            py: 2,
            borderBottom: "1px solid rgba(100, 116, 139, 0.2)",
            gap: 3,
          }}
        >
          {/* Logo */}
          <Box
            ref={logoRef}
            sx={{
              flex: { md: "0 0 25%", xs: "1 1 100%" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                height: { md: "6rem", xs: "6rem" },
                width: { md: "7rem", xs: "7rem" },
                ml:{md:5,xs:0},
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <img
                src={logo}
                alt="TechSpie"
                style={{ height: "100%", width: "100%", }}
              />
            </Box>
          </Box>

          {/* Contact information */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "space-around" },
              alignItems: { xs: "center", sm: "stretch" },
              width: "100%",
              gap: { xs: 2, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box sx={{ flex: 1, p: 0, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
              {contactItem(
                <Email sx={{ color: "#a78bfa", fontSize: "1.3rem" }} />,
                "Email Us",
                "nouman@khan.in",
                "mailto:nouman@khan.in",
                "rgba(139, 92, 246, 0.1)"
              )}
            </Box>
            <Box sx={{ flex: 1, p: 0, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
              {contactItem(
                <Phone sx={{ color: "#818cf8", fontSize: "1.3rem" }} />,
                "Call Us",
                "+91 97177 25231",
                "tel:+919717725231",
                "rgba(99, 102, 241, 0.1)"
              )}
            </Box>
            <Box sx={{ flex: 1, p: 0, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
              {contactItem(
                <LocationOn sx={{ color: "#60a5fa", fontSize: "1.3rem" }} />,
                "Location",
                "Gurugram, Haryana",
                null,
                "rgba(59, 130, 246, 0.1)"
              )}
            </Box>
          </Box>
        </Box>

        {/* Main footer content with About Us, Services and Quick Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            py: 3,
            gap: 4,
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* About Us */}
          <Box
            ref={addToRefs}
            sx={{
              flex: 1,
              mb: { xs: 3, md: 0 },
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {sectionHeader(
              "About Us",
              "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)"
            )}

            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
                mb: 2,
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              TechSpie delivers innovative software solutions with cutting-edge technologies
              to help businesses scale efficiently and effectively in today's digital landscape.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 2,
              }}
            >
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  sx={{
                    background: "rgba(0, 0, 0, 0.03)",
                    color: "#64748b",
                    transition: "all 0.3s ease",
                    width: 38,
                    height: 38,
                    "&:hover": {
                      background: social.color,
                      color: "#ffffff",
                      transform: "translateY(-5px)",
                      boxShadow: `0 10px 20px rgba(0, 0, 0, 0.1)`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            <Box
              sx={{
                color: "#64748b",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Email
                fontSize="small"
                sx={{ mr: 1, fontSize: "1rem", color: "#8b5cf6" }}
              />
              <Typography
                component={Link}
                href="mailto:sanya@columninches.in"
                sx={{
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": { color: "#8b5cf6" },
                }}
              >
                sanya@columninches.in
              </Typography>
            </Box>
          </Box>

          {/* Our Services */}
          <Box
            ref={addToRefs}
            sx={{
              flex: 1,
              mb: { xs: 3, md: 0 },
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {sectionHeader(
              "Our Services",
              "linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)"
            )}
            <Stack direction="column" spacing={2} sx={linkStyle}>
              <Link href="/services">Media Relations</Link>
              <Link href="/services">Content Creation</Link>
              <Link href="/services">Crisis Management</Link>
              <Link href="/services">Digital PR</Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box
            ref={addToRefs}
            sx={{
              flex: 1,
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {sectionHeader(
              "Quick Links",
              "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)"
            )}
            <Stack direction="column" spacing={2} sx={linkStyle}>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Box>
        </Box>

        {/* Copyright section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(100, 116, 139, 0.2)",
            mt: 1,
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#64748b",
              "& a": {
                color: "#8b5cf6",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
                "&:hover": { color: "#a78bfa" },
              },
            }}
          >
            © {currentYear}{" "}
            <span style={{ fontWeight: 600, color: "#1e293b" }}>
             <RouterLink to="/team" >Techspie</RouterLink> 
            </span>
            . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
