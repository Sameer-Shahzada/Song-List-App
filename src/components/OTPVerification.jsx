import axios from "axios";
import { React, useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
// import SongList from "./SongList";

const OTPVerification = ({ phoneNumber, requestId, setAuth }) => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const inputRefs = new Array(4);

  const handleInput = (e, index) => {
    let value = e.target.value;
    // Remove any non-numeric characters from the input
    value = value.replace(/[^0-9]/g, "");

    // Limit the input to a single character
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    // Update the OTP state and focus on the next input field if available
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value !== "") {
      inputRefs[index + 1].focus();
    }
  };

  const handleVerify = () => {

    console.log(requestId, phoneNumber);
    // Build the OTP from the array of input values
    const enteredOTP = otp.join("");
    console.log("received otp - ", enteredOTP);
    let url = "https://dev.api.goongoonalo.com/v1/auth/verify_otp";
    let data = {
      requestId: requestId,
      phoneNumber: "+91" + phoneNumber,
      otp: enteredOTP,
    };
    sessionStorage.setItem('Auth', JSON.stringify(data))
    setAuth(data)

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        console.log(response.status);
      })
      .catch((error) => {
        if (otp.every((value) => value === "")) {
          console.log("Please enter OTP...");
        } else if (otp.every((value) => value !== enteredOTP)) {
          console.log("Incorrect OTP...");
        } else {
          console.log("something went wrong");
        }
      });
  };

  const resendOTP = () => {
    let url = "https://dev.api.goongoonalo.com/v1/auth/login";
    let data = {
      phoneNumber: "+91" + phoneNumber,
    };

    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        // setRequestId(response.data.requestId);
        setOtp(["5", "6", "7", "8"]);
        console.log(response);
      })
      .catch((error) => {
        console.log('resend')

      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "414px",
            height: "334px",
            // border: 1,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "38px", color: "#552583" }}>
            OTP Verification
          </Typography>
          <Box sx={{ mt: 2, mb: 2.5 }}>
            <Typography variant="body1">
              We have sent an OTP to +919548337884. Please enter the code
              received to verify.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {otp.map((value, index) => {
              console.log("value", value, index);
              return (
                <TextField
                  key={index}
                  size="large"
                  variant="outlined"
                  value={value}
                  onChange={(e) => {
                    handleInput(e, index);
                    // setReceivedOtp(e.target.value);
                  }}
                  inputRef={(el) => (inputRefs[index] = el)}
                  inputProps={{ style: { textAlign: "center" } }}
                  sx={{ width: "80px" }}
                />
              );
            })}
          </Box>

          <Box sx={{ my: 3 }}>
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
              onClick={handleVerify}
            >
              Verify
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link onClick={resendOTP} href="#">Resend OTP</Link>
          </Box>
          <Typography sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <Link href="#">Use another number</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OTPVerification;
