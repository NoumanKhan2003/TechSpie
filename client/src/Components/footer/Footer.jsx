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
import logo from "../../Assets/techspie_logo-removebg-preview.png";

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
        {/* Combined top section with logo and contact info */}
        <Grid
          container
          spacing={2}
          sx={{
            py: 2,
            borderBottom: "1px solid rgba(100, 116, 139, 0.2)",
            alignItems: "center",
          }}
          ref={contactsRef}
        >
          {/* Logo */}
          <Grid
            item
            xs={12}
            md={3}
            ref={logoRef}
            sx={{
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                height: { md: "3.5rem", xs: "3.5rem" },
                width: { md: "11rem", xs: "11rem" },
                mx: { xs: "auto", md: 0 },
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <img
                src={logo}
                alt="TechSpie"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>

          {/* Contact information */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2} justifyContent="space-around" p={0}>
              <Grid item xs={12} sm={4} p={0}>
                {contactItem(
                  <Email sx={{ color: "#a78bfa", fontSize: "1.3rem" }} />,
                  "Email Us",
                  "nouman@khan.in",
                  "mailto:nouman@khan.in",
                  "rgba(139, 92, 246, 0.1)"
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {contactItem(
                  <Phone sx={{ color: "#818cf8", fontSize: "1.3rem" }} />,
                  "Call Us",
                  "+91 97177 25231",
                  "tel:+919717725231",
                  "rgba(99, 102, 241, 0.1)"
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {contactItem(
                  <LocationOn sx={{ color: "#60a5fa", fontSize: "1.3rem" }} />,
                  "Location",
                  "Gurugram, Haryana",
                  null,
                  "rgba(59, 130, 246, 0.1)"
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Main footer content with About Us, Services and Quick Links */}
        <Grid container spacing={4} sx={{ py: 1 }}>
          {/* About Us */}
          <Grid item xs={12} md={4} ref={addToRefs}>
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
              <p>
                {" "}
                TechSpie delivers innovative software solutions with
                <p>
                  cutting-edge technologies to help businesses scale efficiently
                  and effectively in today's digital landscape.
                </p>
              </p>
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
          </Grid>

          {/* Our Services */}
          <Grid item xs={12} md={4} ref={addToRefs}>
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
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4} ref={addToRefs}>
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
          </Grid>
        </Grid>

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
              Firmus Vision
            </span>
            . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
