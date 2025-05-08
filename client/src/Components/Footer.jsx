import React from "react";
import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
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
import logo from "../Assets/techspie_logo-removebg-preview.png";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.05)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #8a0cad 0%, #b24dd4 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section with Logo and Contact */}
        <Grid
          container
          spacing={3}
          sx={{
            py: 3,
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box
              sx={{
                height: { md: "4.5rem", xs: "4rem" },
                width: { md: "14rem", xs: "14rem" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <img
                src={logo}
                alt="FirmusVision"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2} justifyContent="space-around">
              {/* Email */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(135deg, #8a0cad 0%, #b24dd4 100%)",
                      mr: 1.5,
                    }}
                  >
                    <Email sx={{ color: "white", fontSize: "1.2rem" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "#333" }}
                    >
                      Email Us
                    </Typography>
                    <Typography
                      variant="body2"
                      component={Link}
                      href="mailto:nouman@khan.in"
                      sx={{
                        color: "#666",
                        textDecoration: "none",
                        "&:hover": { color: "#8a0cad" },
                      }}
                    >
                      nouman@khan.in
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(135deg, #8a0cad 0%, #b24dd4 100%)",
                      mr: 1.5,
                    }}
                  >
                    <Phone sx={{ color: "white", fontSize: "1.2rem" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "#333" }}
                    >
                      Call Us
                    </Typography>
                    <Typography
                      variant="body2"
                      component={Link}
                      href="tel:+919717725231"
                      sx={{
                        color: "#666",
                        textDecoration: "none",
                        "&:hover": { color: "#8a0cad" },
                      }}
                    >
                      +91 97177 25231
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Location */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(135deg, #8a0cad 0%, #b24dd4 100%)",
                      mr: 1.5,
                    }}
                  >
                    <LocationOn sx={{ color: "white", fontSize: "1.2rem" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "#333" }}
                    >
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      Gurugram, Haryana
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider
          sx={{
            background:
              "linear-gradient(90deg, transparent, rgba(138, 12, 173, 0.2), transparent)",
            height: "1px",
            border: "none",
          }}
        />

        {/* Main Footer Content - Shortened */}
        <Grid container spacing={2} sx={{ pt: 3, pb: 2 }}>
          {/* About Us */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 1.5,
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "40px",
                  height: "2px",
                  background: "#8a0cad",
                  mt: 0.5,
                  mx: { xs: "auto", md: 0 },
                },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                fontSize: "0.9rem",
                mb: { xs: 2, md: 0 },
              }}
            >
              Firmus Vision is a women-driven PR agency creating impactful brand
              value through innovative strategies.
            </Typography>
          </Grid>

          {/* Our Services - Compact */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 1.5,
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "40px",
                  height: "2px",
                  background: "#8a0cad",
                  mt: 0.5,
                  mx: { xs: "auto", md: 0 },
                },
              }}
            >
              Services
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={1}
              sx={{
                "& a": {
                  color: "#555",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#8a0cad",
                    transform: "translateX(3px)",
                  },
                  display: "inline-block",
                },
              }}
            >
              <Link href="/services">Media Relations</Link>
              <Link href="/services">Content Creation</Link>
              <Link href="/services">Crisis Management</Link>
              <Link href="/services">Digital PR</Link>
            </Stack>
          </Grid>

          {/* Site Links - Compact */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 1.5,
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "40px",
                  height: "2px",
                  background: "#8a0cad",
                  mt: 0.5,
                  mx: { xs: "auto", md: 0 },
                },
              }}
            >
              Links
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={1}
              sx={{
                "& a": {
                  color: "#555",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#8a0cad",
                    transform: "translateX(3px)",
                  },
                  display: "inline-block",
                },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Grid>

          {/* Social Links - Compact */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 1.5,
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "40px",
                  height: "2px",
                  background: "#8a0cad",
                  mt: 0.5,
                  mx: { xs: "auto", md: 0 },
                },
              }}
            >
              Connect With Us
            </Typography>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                mb: 1.5,
              }}
            >
              {[
                { icon: <Facebook fontSize="small" />, color: "#3b5998" },
                { icon: <Twitter fontSize="small" />, color: "#1DA1F2" },
                { icon: <LinkedIn fontSize="small" />, color: "#0077B5" },
                { icon: <Instagram fontSize="small" />, color: "#E1306C" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
                  aria-label={`social-${index}`}
                  sx={{
                    bgcolor: "rgba(138, 12, 173, 0.08)",
                    width: 32,
                    height: 32,
                    color: "#8a0cad",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      bgcolor: social.color,
                      color: "white",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Email
                fontSize="small"
                sx={{ mr: 0.5, fontSize: "0.9rem", color: "#8a0cad" }}
              />
              <Typography
                variant="body2"
                component={Link}
                href="mailto:nouman@khan.in"
                sx={{
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#8a0cad" },
                }}
              >
                sanya@columninches.in
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Bar - Simplified */}
        <Divider
          sx={{
            background:
              "linear-gradient(90deg, transparent, rgba(138, 12, 173, 0.15), transparent)",
            height: "1px",
            border: "none",
            my: 1.5,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "0.85rem" }}
          >
            © Firmus Vision {currentYear}. All Rights Reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "0.85rem" }}
          >
            Made with ❤️ by{" "}
            <Link
              href="http://www.linkedin.com/in/nouman-khan-95923a256"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: "none",
                color: "#8a0cad",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Nouman Khan
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
