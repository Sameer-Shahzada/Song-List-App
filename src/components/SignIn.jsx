import { React, useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, Button , InputAdornment  } from "@mui/material";
import OTPVerification from './OTPVerification'
import IndiaFlag from '../images/indiaflag25.png';
const SignIn = () => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [requestId, setRequestId] = useState('')

  const handleSignIn = () => {
    let url = "https://dev.api.goongoonalo.com/v1/auth/login";
    let data = {
      "phoneNumber": '+91' + phoneNumber,
    }
    console.log(data)
    axios.post(url, data)
      .then((response) => {
        setRequestId(response.data.requestId);
        console.log(response);
      })
      .catch((error) => console.log("Login API Error"));
  };

  return (
    requestId ? <OTPVerification requestId={requestId} phoneNumber={phoneNumber} /> : (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              width: "414px",
              height: "238px",
            }}
          >
            <Typography variant="h1" sx={{ fontSize: "38px", color: "#552583" }}>
              Sign In
            </Typography>
            <Box sx={{ mt: 2, mb: 2.5 }}>
              <Typography variant="body1">
                Please enter your number to login. We will send an OTP to verify
                your number.
              </Typography>
            </Box>
            <Box>
              <TextField
                size="small"
                variant="outlined"
                type="number"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                label="PHONE NUMBER"
                sx={{ width: "100%" }}
                // Add InputAdornment for the India flag
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{py:'8px'}}>
                      <img src={IndiaFlag} alt="India Flag" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#552583",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#552583",
                  },
                }}
                onClick={handleSignIn}
              >
                Signin
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    )

  );
};

export default SignIn;
