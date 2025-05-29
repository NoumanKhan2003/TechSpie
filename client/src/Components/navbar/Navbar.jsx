import * as React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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

import logo from "../../Assets/techspieLogo.png";

const Navbar = () => {
  const [state, setState] = React.useState({ right: false });
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(true);
  const [transparent, setTransparent] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 40) {
          setTransparent(true);
        } else {
          setTransparent(false);
        }

        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setVisible(false);
        } else {
          setVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

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
    { text: "Works", icon: <PeopleIcon />, path: "/work" },
    { text: "Team", icon: <PublicIcon />, path: "/team" },
    { text: "Services", icon: <ServicesIcon />, path: "/services" },
  ];

  const handleScrollToContact = (event) => {
    event.preventDefault();
    navigate("/contact");
    setState({ right: false });
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
          data-path={item.path}
          component={RouterLink}
          to={item.path}
          sx={{
            mx: 1.5,
            py: 1,
            color:
              location.pathname === item.path ? "rgb(138, 12, 173)" : "black",
            fontWeight: location.pathname === item.path ? "bold" : "medium",
            fontSize: "1.2rem",
            fontFamily: "noto-serif",
            textTransform: "none",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background:
                "linear-gradient(90deg, rgb(138, 12, 173), rgb(178, 77, 212))",
              transform:
                location.pathname === item.path ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease",
            },
            "&:hover": {
              backgroundColor: "transparent",
              color: "rgb(138, 12, 173)",
              "&::before": {
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
        pt:4
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
        {/* <Box sx={{ height: "5rem", width: "14rem" }}>
          <img
            src={logo}
            alt="TechSpie"
            style={{ height: "100%", width: "100%" }}
          />
        </Box> */}
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

      {/* <Divider sx={{ bgcolor: "rgba(0,0,0,0.1)", my: 1 }} /> */}

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
                    fontFamily: "noto-serif",
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
                  fontFamily: "noto-serif",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Slide appear={false} direction="down" in={visible}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: transparent
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
          borderBottom: transparent
            ? "none"
            : "1px solid rgba(138, 12, 173, 0.1)",
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 0 }}>
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
              <Box sx={{ height: "6rem", width: "8rem",ml:{md:3,xs:0} }}>
                <img
                  src={logo}
                  alt="TechSpie"
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
                  background:
                    "linear-gradient(45deg, rgb(159, 90, 182), rgb(178, 107, 212))",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  px: "2rem",
                  py: "0.8rem",
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(138, 12, 173, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(138, 12, 173, 0.3)",
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
    </Slide>
  );
};

export default Navbar;
