'use client';
import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import sidebarBuynowsvg from "public/images/backgrounds/sidebar-buynow-bg.svg";

const Upgrade = () => (
  <Box pb={0} mt={5}>
    <Box
      pl={3}
      pr={3}
      m={3}
      textAlign="center"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
     
      <Box pb={3} pt={3}>
        <Typography variant="h4" fontWeight="700" mb={2}>
          Get This for Free
        </Typography>
        
        
      </Box>
    </Box>
  </Box>
);
export default Upgrade;
