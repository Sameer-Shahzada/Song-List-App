import React from "react";
import songIcon from "../images/songIcon.svg";
import logoutIcon from '../images/logoutIcon.svg';
import { Box, Typography } from "@mui/material";

const SongList = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "256px",
        }}>

      <Box
        sx={{
          border: 1,
          mb: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#552583",
            fontSize: "36px",
            display: "flex",
            justifyContent: "center",
            // fontFamily: 'Roboto',
            fontWeight: 700,
            my: 1.5,
          }}
        >
          Logo
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#E6F7FF",
          py: 0.5,
          borderRight: 3,
          borderColor: "#1890FF",
        }}
      >
        <Box sx={{ marginLeft: 3, marginRight: 2 }}>
          <img src={songIcon} alt="songIcon" />
        </Box>

        <Typography variant="body1" sx={{ color: "#1890FF", fontSize: "14px" }}>
          Songs
        </Typography>
      </Box>

      <Box sx={{ display:'flex', border:1, py: 0.5, position:'fixed', bottom: 2, width:'255px'  }}>
        <Box sx={{ marginLeft: 3, marginRight: 2 }}>
          <img src={logoutIcon} alt="logoutIcon" />
        </Box>

        <Typography variant="body1" sx={{ fontSize: "14px"}}>
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default SongList;
