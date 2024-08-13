import React, { useState } from "react";
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Stack, TextField, Typography, circularProgressClasses, colors } from "@mui/material";
import { images } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import Animate from "../components/common/Animate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserExists = async (email, token) => {
    try {
      const response = await axios.get("http://localhost:8080/api/admins", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
  
      if (response.status !== 200) {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
      }
  
      const users = response.data;
      return users.some(user => user.email === email);
    } catch (error) {
      console.error("Failed to check if user exists:", error);
      throw error;
    }
  };
  

  const authenticateUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const { token, role } = data;  // Extract the token and role from the response
  
      if (!token || role !== 'ADMIN') {
        throw new Error("Invalid token or role");
      }
  
      // Store the token and role in localStorage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('userRole', role);
  
      return token;
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  };
  
  const onSignin = async (e) => {
    e.preventDefault();
    setOnRequest(true);
  
    const interval = setInterval(() => {
      setLoginProgress((prev) => prev + 100 / 40);
    }, 50);
  
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    try {
      const token = await authenticateUser(user.email, user.password);
  
      const userExists = await checkUserExists(user.email, token);
      if (!userExists) {
        await addUser(user, token);
      } else {
        console.log("User already exists, skipping addition.");
      }
  
      clearInterval(interval);
      setIsLoggedIn(true);
      toast.success("Login successful!");
  
      setTimeout(() => {
        navigate("/dashboard");
      }, 3300);
    } catch (error) {
      clearInterval(interval);
      setOnRequest(false);
      toast.error(`Login failed: ${error.message}`);
    }
  };
  
  const addUser = async (user, token) => {
    try {
      const response = await axios.post("http://localhost:8080/api/admins", user, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status !== 201) {
        throw new Error(`Failed to add user. Status: ${response.status}`);
      }

      console.log("New user added");
    } catch (error) {
      console.error("Failed to add user:", error);
      throw error;
    }
  };

  
  return (
    <Box position="relative" height="100vh" sx={{ "::-webkit-scrollbar": { display: "none" } }}>
      {/* Background Image */}
      <Box sx={{
        position: "absolute",
        right: 0,
        height: "100%",
        width: "70%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${images.loginBg})`
      }} />

      {/* Login Form */}
      <Box sx={{
        position: "absolute",
        left: 0,
        height: "100%",
        width: isLoggedIn ? "100%" : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
        transition: "all 1s ease-in-out",
        bgcolor: colors.common.white
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: isLoggedIn ? 0 : 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" }
        }}>
          {/* Logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={60}></img>
            </Animate>
          </Box>

          {/* Form */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box component="form" maxWidth={400} width="100%" onSubmit={onSignin}>
                <Stack spacing={3}>
                  <TextField label="Email" name="email" fullWidth />
                  <TextField label="Password" name="password" type="password" fullWidth />
                  <Button type="submit" size="large" variant="contained" color="success">
                    Sign In
                  </Button>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </FormGroup>
                    <Typography color="error" fontWeight="bold">
                      <Link to="#">Forgot password?</Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>

          {/* Loading Spinner */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 1000
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600]
                  }}
                />
              </Box>
            </Stack>
          )}
        </Box>
      </Box>

      <ToastContainer closeButton={false} />
    </Box>
  );
};

export default LoginPage;
