import React from "react";
import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import logo from "../Assets/Techspie logo.png";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgb(255, 255, 255)",
          opacity: 0.9,
          color: "black",
          py: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* upper section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            color: "black",
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              height: { md: "100px", xs: "100%" },
              width: { md: "100px", xs: "100%" },
              display: { xs: "flex", md: "unset" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: { md: "4.4rem", xs: "5rem" },
                width: { md: "16rem", xs: "19rem" },
              }}
            >
              <img
                src={logo}
                alt="FirmusVision"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>

          {/* upper right section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-evenly",
              gap: { xs: 2, sm: 4 },
              width: { xs: "100%", md: "auto" },
            }}
          >
            {/* Email Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "rgb(138, 12, 173)",
                  bgcolor: "black",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "black",
                  },
                }}
              >
                <Email />
              </IconButton>
              <Box>
                <Typography variant="h6">Send Email</Typography>
                <Typography variant="body2">nouman@khan.in</Typography>
              </Box>
            </Box>

            {/* Call Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "rgb(138, 12, 173)",
                  bgcolor: "black",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "black",
                  },
                }}
              >
                <Phone />
              </IconButton>
              <Box>
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body2">+91 97177 25231</Typography>
              </Box>
            </Box>

            {/* Location Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "rgb(138, 12, 173)",
                  bgcolor: "black",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "black",
                  },
                }}
              >
                <LocationOn />
              </IconButton>
              <Box>
                <Typography variant="h6">Find Us</Typography>
                <Typography variant="body2">
                  {isSmallScreen ? (
                    "Gurugram, Haryana 122002"
                  ) : (
                    <>
                      Ground Floor, MGF Metropolis Mall,
                      <br />
                      Mehrauli-Gurgaon Rd, Gurugram,
                      <br />
                      Haryana 122002
                    </>
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            width: "100%",
            height: 2,
            borderColor: "black",
            my: 3,
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
          justifyContent="space-around"
          alignItems={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
        >
          {/* About Us */}
          <Box
            sx={{
              maxWidth: 300,
              px: { xs: 2, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "rgb(138, 12, 173)" }}
            >
              About Us
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              Firmus Vision is a full-service PR agency in Delhi, driven by
              women. With deep expertise in media and marketing, we create brand
              value across sectors.
            </Typography>
          </Box>

          {/* Our Services */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "rgb(138, 12, 173)" }}
            >
              Our Services
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Media Relations</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Content Creation</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Crisis Management</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Event PR</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Digital PR</Typography>
              </Link>
            </Stack>
          </Box>

          {/* Site Links */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "rgb(138, 12, 173)" }}
            >
              Site Links
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="/clients"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                  },
                }}
              >
                Clients
              </Link>
              <Link
                href="/services"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                  },
                }}
              >
                Services
              </Link>

              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "rgb(138, 12, 173)",
                  },
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Box>

          {/* Follow Us */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "rgb(138, 12, 173)" }}
            >
              Follow Us
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Phone fontSize="small" sx={{ mr: 1 }} /> +91 97177 25231
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Email fontSize="small" sx={{ mr: 1 }} /> sanya@columninches.in
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <LocationOn fontSize="small" sx={{ mr: 1 }} />
                {isSmallScreen
                  ? "Gurugram, Haryana"
                  : "Gurugram, Haryana 122002"}
              </Typography>
            </Stack>

            {/* Social Media Icons */}
            <Stack
              direction="row"
              spacing={1}
              mt={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton
                color="inherit"
                aria-label="Facebook"
                sx={{
                  bgcolor: "rgb(255, 255, 255)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#3b5998",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                sx={{
                  bgcolor: "rgb(255, 255, 255)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#1DA1F2",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#0077B5",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider
          sx={{
            width: "100%",
            height: 2,
            borderColor: "black",
            my: 3,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mt: 2,
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            © Firmus Vision {currentYear}. All Rights Reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              pt: { xs: 1 },
            }}
          >
            Made with ❤️ by{" "}
            <Link
              href="http://www.linkedin.com/in/nouman-khan-95923a256"
              target="_blank"
              rel="noopener"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Nouman Khan
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
