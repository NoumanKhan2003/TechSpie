import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Container,
  IconButton,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  HomeRepairService as ServicesIcon,
  PermContactCalendar as ContactIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import logo from "../Assets/techspie_logo-removebg-preview.png";

// Hide navbar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [state, setState] = React.useState({ right: false });
  const location = useLocation();

  // Check if the user has scrolled
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ right: open });
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About Us", icon: <InfoIcon />, path: "/about" },
    { text: "Clients", icon: <PeopleIcon />, path: "/clients" },
    { text: "Network", icon: <PublicIcon />, path: "/network" },
    { text: "Services", icon: <ServicesIcon />, path: "/services" },
  ];

  // Handle scroll to contact form
  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
      setState({ right: false }); // Close drawer if open
    } else {
      // If we're not on the home page, navigate to homepage and then scroll
      window.location.href = "/#contact";
    }
  };

  // Desktop Navigation List
  const DesktopNav = () => (
    <Box
      component="nav"
      sx={{
        display: { xs: "none", md: "none", lg: "flex" },
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item.text}
          component={RouterLink}
          to={item.path}
          sx={{
            mx: 1.5,
            py: 1,
            color:
              location.pathname === item.path ? "rgb(138, 12, 173)" : "black",
            fontWeight: location.pathname === item.path ? "bold" : "medium",
            fontSize: "1rem",
            textTransform: "none",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              backgroundColor: "rgb(138, 12, 173)",
              transform:
                location.pathname === item.path ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "bottom left",
              transition: "transform 0.3s ease-out",
            },
            "&:hover": {
              backgroundColor: "transparent",
              "&::after": {
                transform: "scaleX(1)",
              },
            },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );

  // Mobile Drawer List
  const MobileDrawer = () => (
    <Box
      sx={{
        width: 300,
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 2,
        }}
      >
        <Box sx={{ height: "5rem", width: "14rem" }}>
          <img
            src={logo}
            alt="FirmusVision"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            color: "rgb(138, 12, 173)",
            "&:hover": {
              backgroundColor: "rgba(138, 12, 173, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "rgba(0,0,0,0.1)", my: 1 }} />

      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{
                py: 1.5,
                borderRadius: "8px",
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(138, 12, 173, 0.08)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(138, 12, 173, 0.15)",
                },
                "&.Mui-selected": {
                  backgroundColor: "rgba(138, 12, 173, 0.15)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path
                      ? "rgb(138, 12, 173)"
                      : "rgb(90, 90, 90)",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight:
                      location.pathname === item.path ? "bold" : "medium",
                    fontSize: "1.1rem",
                    color:
                      location.pathname === item.path
                        ? "rgb(138, 12, 173)"
                        : "rgb(50, 50, 50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ my: 2, bgcolor: "rgba(0,0,0,0.1)" }} />

        {/* Contact Us Mobile Option */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={handleScrollToContact}
            sx={{
              py: 1.5,
              borderRadius: "8px",
              backgroundColor: "rgb(138, 12, 173)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgb(122, 10, 152)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
              <ContactIcon />
            </ListItemIcon>
            <ListItemText
              primary="Contact Us"
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "white",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: "white",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            {/* Logo with Link */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
                flexGrow: { xs: 1, lg: 0 },
              }}
            >
              <Box sx={{ height: "5rem", width: "14rem" }}>
                <img
                  src={logo}
                  alt="FirmusVision"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Box>

            <DesktopNav />

            {/* Contact Us Button (Desktop) */}
            <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
              <Button
                onClick={handleScrollToContact}
                variant="contained"
                sx={{
                  backgroundColor: "rgb(138, 12, 173)",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  px: "2rem",
                  py: "0.6rem",
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 10px rgba(138, 12, 173, 0.3)",
                  "&:hover": {
                    backgroundColor: "rgb(122, 10, 152)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 15px rgba(138, 12, 173, 0.4)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "flex", lg: "none" },
                ml: "auto",
                color: "rgb(138, 12, 173)",
                "&:hover": {
                  backgroundColor: "rgba(138, 12, 173, 0.1)",
                },
              }}
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "#ffffff",
                  boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
                },
              }}
            >
              <MobileDrawer />
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
