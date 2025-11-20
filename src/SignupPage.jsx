import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "./authSlice";
import {
  Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link, InputAdornment
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import stacklyLogo from "./assets/stackly.jpg";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", username: "",
    email: "", password: "", confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const adornment = (icon) => ({
    startAdornment: (
      <InputAdornment position="start" sx={{ color: "#aaa" }}>
        {icon}
      </InputAdornment>
    ),
  });

  const handleSignup = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(signupUser(formData));
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      <Box sx={{ width: { xs: "90%", sm: 420 }, p: 3 }}>
        
        <Box textAlign="center" mb={3}>
          <img src={stacklyLogo} width={60} alt="Stackly Logo" />
          <Typography variant="h6" sx={{ color: "#a015b0ff", fontWeight: 600 }}>
            Sign Up to Stackly
          </Typography>
        </Box>

        <TextField name="firstName" placeholder="First name" size="small" onChange={handleChange} InputProps={adornment(<PersonOutlineIcon />)} sx={{ mb: 2 }} />
        <TextField name="lastName" placeholder="Last name" size="small" onChange={handleChange} InputProps={adornment(<PersonOutlineIcon />)} sx={{ mb: 2 }} />
        <TextField name="username" placeholder="Username" size="small" onChange={handleChange} InputProps={adornment(<PersonOutlineIcon />)} sx={{ mb: 2 }} />
        <TextField name="email" placeholder="Email ID" size="small" onChange={handleChange} InputProps={adornment(<EmailOutlinedIcon />)} sx={{ mb: 2 }} />
        <TextField name="password" type="password" placeholder="Password" size="small" onChange={handleChange} InputProps={adornment(<LockOutlinedIcon />)} sx={{ mb: 2 }} />
        <TextField name="confirmPassword" type="password" placeholder="Confirm Password" size="small" onChange={handleChange} InputProps={adornment(<LockOutlinedIcon />)} sx={{ mb: 2 }} />

        {error && <Typography color="red" fontSize={14}>{error}</Typography>}

        <FormControlLabel control={<Checkbox size="small" />} label="Remember me" sx={{ mb: 2 }} />

        <Button
          onClick={handleSignup}
          disabled={loading}
          sx={{
            width: "70%",
            mx: "auto",
            display: "block",
            background: "linear-gradient(to right, #5f0c72ff, #050504ff)",
            color: "white",
            py: 1.2,
            borderRadius: 5,
          }}
        >
          {loading ? "Signing up..." : "Sign up"}
        </Button>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link component={RouterLink} to="/login" sx={{ color: "#a015b0ff" }}>
              Login
            </Link>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default SignupPage;
