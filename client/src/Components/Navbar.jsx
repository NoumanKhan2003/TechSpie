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
} from "@mui/material";

import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  HomeRepairService as ServicesIcon,
  PermContactCalendar as ContactIcon,
} from "@mui/icons-material";

import logo from "../Assets/techspie_logo-removebg-preview.png";

const Navbar = () => {
  const [state, setState] = React.useState({ right: false });
  const location = useLocation();

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

  // Desktop Navigation List
  const DesktopNav = () => (
    <Box
      component="nav"
      sx={{ display: { xs: "none", md: "none", lg: "block" } }}
    >
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          whiteSpace: "nowrap",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "black",
                "&:hover": {
                  backgroundColor:
                    item.text === "Contact Us" ? "red" : "transparent",
                  "&::after":
                    item.text !== "Contact Us"
                      ? {
                          transform: "scaleX(1)",
                        }
                      : {},
                },
                "&.Mui-selected": {
                  color:
                    item.text !== "Contact Us" ? "rgb(138, 12, 173)" : "black",
                  backgroundColor:
                    item.text === "Contact Us" ? "red" : "transparent",
                  "&::after":
                    item.text !== "Contact Us"
                      ? {
                          transform: "scaleX(1)",
                        }
                      : {},
                },
                "&::after": {
                  content: item.text !== "Contact Us" ? '""' : "none",
                  position: "absolute",
                  left: "16px",
                  bottom: "8px",
                  width: "calc(100% - 32px)",
                  height: "2px",
                  backgroundColor: "rgb(138, 12, 173)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Mobile Drawer List
  const MobileDrawer = () => (
    <Box
      sx={{
        width: 280,
        backgroundColor: "white",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 1 }}>
        <Box sx={{ height: "7rem", width: "16rem" }}>
          <img
            src={logo}
            alt="FirmusVision"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>{" "}
      </Box>
      <Divider sx={{ bgcolor: "black", mb: 1 }} />
      <List>
        {menuItems
          .concat({
            text: "Contact Us",
            icon: <ContactIcon />,
            path: "/contact",
          })
          .map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(138, 12, 173, 0.1)",
                    borderLeft: "4px solid rgb(138, 12, 173)",
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: "rgb(138, 12, 173)",
                      fontWeight: "bold",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "1.3rem",
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      color:
                        location.pathname === item.path
                          ? "rgb(138, 12, 173)"
                          : "black",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        px: { md: "1rem", xs: "1rem" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        color: "white",
        py: 1,
        borderBottom: "1px solid black",
        // position: "fixed",
        // top: 0,
        // width: "100%",
        // zIndex: 1100,
      }}
    >
      {/* Logo with Link */}
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: "flex",
          textDecoration: "none",
          alignItems: "center",
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
          component={RouterLink}
          to="/contact"
          variant="contained"
          sx={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            borderTopLeftRadius: "3rem",
            borderBottomRightRadius: "3rem",
            px: "2rem",
            transition: "transform 0.3s",
            "&:hover": {
              backgroundColor: "#e70630",
              transform: "scale(1.1)",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Mobile Menu Button */}
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "block", md: "block", lg: "none" },
          p: 0,
          minWidth: "auto",
        }}
      >
        <MenuIcon color="warning" sx={{ fontSize: "2rem" }} />
      </Button>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <MobileDrawer />
      </Drawer>
    </Box>
  );
};

export default Navbar;
