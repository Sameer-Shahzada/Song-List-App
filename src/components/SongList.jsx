import React from "react";
// mui components
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
// Note-> Link from MUI use href='' , Link from react-router-dom use to=''
//mui icons
import songIcon from "../images/songIcon.svg";
import logoutIcon from "../images/logoutIcon.svg";
// mui grid system
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import Modal from './Modal'

const SongList = () => {

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      {/* Parent Grid */}
      <Grid container sx={{ height: "100vh" }}>
        {/* 1st Grid */}
        <Grid
          md={2.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 1,
            borderColor: "red",
          }}
        >
          {/* First Box */}
          <Grid>
            <Box sx={{ border: 1, mb: 4 }}>
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
          </Grid>

          {/* Second Box */}
          <Grid>
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

              <Typography
                variant="body1"
                sx={{ color: "#1890FF", fontSize: "14px" }}
              >
                Songs
              </Typography>
            </Box>
          </Grid>

          {/* Third Box (Vertical placement at the bottom) */}
          <Grid sx={{ marginTop: "auto" }}>
            <Box
              sx={{
                display: "flex",
                border: 1,
                py: 0.5,
                // width: '255px'
              }}
            >
              <Box
                sx={{ marginLeft: 3, marginRight: 2, cursor:'pointer' }}
                onClick={handleLogout}
              >
                <img src={logoutIcon} alt="logoutIcon" />
              </Box>

              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                Logout
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Second Grid */}

        <Grid md={9.5}
          // sx={{ border: 2, borderColor: "blue" }}
        >
          <Grid sx={{ border: 1 }}>
            <Box component='div' role='presentation' sx={{ py: 2, px: 3,}}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  color="inherit"
                // href="/signin"
                >
                  First-level Menu
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                // href="/otp_verification"
                >
                  Second-level Menu
                </Link>
                <Typography
                  color="text.primary"
                  aria-current="page"
                >
                  Current Page
                </Typography>
                {/* <Link href="/song_list2">
                  Third-level Menu
                </Link> */}
              </Breadcrumbs>
            </Box>
            <Box
              sx={{
                py: 0.8,
                px: 3,
                // border: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>Songs</Typography>
              <Modal />
            </Box>
          </Grid>

          <Grid>
            <Box>1</Box>
          </Grid>

          <Grid>
            <Box>1</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SongList;
