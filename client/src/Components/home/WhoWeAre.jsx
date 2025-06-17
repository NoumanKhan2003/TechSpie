import React from "react";
import { Container, Box } from "@mui/material";
const WhoWeAre = () => {
  return (
    <>
      <Container sx={{ display: "flex",flexWrap: "wrap",py:4  }}>
        <Box sx={{ width:"40%",fontWeight:"bold",fontSize:90,textAlign:"center",color:"rgb(175, 63, 221)"}}>Who We Are ?</Box>
        <Box sx={{ width:"60%",fontSize: 30}}>
          We are Techspie — your vision, our responsibility. We transform ideas
          into companies, companies into brands, and brands into unstoppable
          forces. You dream it. We build it. Together, we make it legendary.
        </Box>
      </Container>
    </>
  );
};

export default WhoWeAre;
