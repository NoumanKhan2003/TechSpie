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
  Login as LoginIcon
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
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Works", icon: <PeopleIcon />, path: "/work" },
    { text: "Team", icon: <PublicIcon />, path: "/team" },
    { text: "Services", icon: <ServicesIcon />, path: "/services" },
    { text: "Login", icon: <LoginIcon />, path: "/login" },
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
      {menuItems
        .filter((item) => !(item.text === "Home" && location.pathname === "/"))
        .map((item) => (
          <Button
            key={item.text}
            data-path={item.path}
            component={RouterLink}
            to={item.path}
            sx={{
              mx: 1.5,
              py: 0.5,
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
                height: "4px",
                background:
                  "linear-gradient(90deg, rgb(138, 12, 173), rgb(178, 77, 212))",
                transform:
                  location.pathname === item.path ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.6s ease",
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
        pt: 4,
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
              primary="Get started"
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
              <Box sx={{ height: "6rem", width: "8rem", ml: { md: 3, xs: 0 } }}>
                <img
                  src={logo}
                  alt="TechSpie"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Box>

            <DesktopNav />

            {/* Contact Us Button (Desktop) */}

            {/* <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
              <Button
                onClick={handleScrollToContact}
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(45deg, rgb(159, 90, 182), rgb(178, 107, 212))",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  px: "2rem",
                  py: "0.8rem",
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(138, 12, 173, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(138, 12, 173, 0.3)",
                    borderRadius: "40px",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box> */}

            <div className="relative  items-center  lg:block hidden">
              <button
                onClick={handleScrollToContact}
                className="relative flex items-center gap-1 py-3 px-10 rounded-full font-semibold text-black
          bg-[rgb(217,168,255)]  border-transparent shadow-[0_0_0_2px_#622bff]
          overflow-hidden cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
          group "
                style={{ fontSize: "16px" }}
              >
                {/* Left Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2 absolute left-[-25%] w-6 fill-black z-10 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                {/* Text */}
                <span className="relative z-10 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] -translate-x-3 group-hover:translate-x-3">
                  Get Started
                </span>
                {/* Animated Circle */}
                <span
                  className="
            circle absolute top-1/2 left-1/2 w-5 h-5 bg-[#d24ce1] rounded-full opacity-0
            -translate-x-1/2 -translate-y-1/2
            transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)]
            group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100
            z-0
          "
                />
                {/* Right Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1 absolute right-4 w-6 fill-black z-10 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%]"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setState({ right: !state.right })}
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
