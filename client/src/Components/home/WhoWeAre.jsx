import React from "react";
import { Container, Box } from "@mui/material";

const WhoWeAre = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        py: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          fontWeight: "bold",
          fontSize: { xs: 45, sm: 60, md: 90 },
          textAlign: "center",
          color: "rgb(175, 63, 221)",
          mb: { xs: 3, md: 0 },
        }}
      >
        Who We Are ?
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          fontSize: { xs: 20, sm: 22, md: 30 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        We are Techspie — your vision, our responsibility. We transform ideas
        into companies, companies into brands, and brands into unstoppable
        forces. You dream it. We build it. Together, we make it legendary.
      </Box>
    </Container>
  );
};

export default WhoWeAre;
