import React from "react";
import songIcon from "../images/songIcon.svg";
import logoutIcon from '../images/logoutIcon.svg';
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const SongList = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '';
  }
  return (
    <>
      <Grid container sx={{ border: 1, height: '100vh', borderColor: 'red', display:'flex', flexDirection:'column' }}>

        <Grid><Box>1</Box></Grid>
        <Grid><Box>2</Box></Grid>
        



      </Grid>
      <Grid sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}><Box>3</Box></Grid>


    </>
  );
};

export default SongList;

{/* <Grid container sx={{
  // height: "100vh",
  // width: "256px",
  border: 1,
  borderColor
}}  >
  <Grid xs={2}>
    <Box
      sx={{
        // height: "100vh",
        // width: "256px",
        // border: 1
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



    </Box>
    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <Box sx={{
        display: 'flex', border: 1, py: 0.5,
        // width: '255px' 
      }}>
        <Box sx={{ marginLeft: 3, marginRight: 2 }}
          onClick={handleLogout}>
          <img src={logoutIcon} alt="logoutIcon" />
        </Box>

        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          Logout
        </Typography>
      </Box>
    </Grid>

  </Grid>
</Grid>
 */}
