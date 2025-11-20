import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import {
  Box, Button, Divider, Link, TextField, Typography, InputAdornment
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import stacklyLogo from "./assets/stackly.jpg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

  const handleLogin = () => {
    dispatch(loginUser(formData));
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      <Box sx={{ width: { xs: "90%", sm: 420 }, p: 3 }}>

        <Box textAlign="center" mb={3}>
          <img src={stacklyLogo} width={60} alt="Stackly Logo" />
          <Typography variant="h6" sx={{ color: "#a015b0ff", fontWeight: 600 }}>
            Login to Stackly
          </Typography>
        </Box>

        <TextField
          fullWidth
          name="username"
          placeholder="Username or Email ID"
          onChange={handleChange}
          size="small"
          InputProps={adornment(<PersonOutlineIcon />)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          name="password"
          placeholder="Password"
          onChange={handleChange}
          size="small"
          type="password"
          InputProps={adornment(<LockOutlinedIcon />)}
          sx={{ mb: 1 }}
        />

        {error && <Typography color="red" fontSize={14} mb={1}>{error}</Typography>}

        <Box textAlign="right" mb={2}>
          <Link component={RouterLink} to="/forgot-password" sx={{ fontSize: 13 }}>
            Forgot password?
          </Link>
        </Box>

        <Button
          onClick={handleLogin}
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
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 1.5 }}>
          Continue with Google
        </Button>

        <Button fullWidth variant="outlined" startIcon={<AppleIcon />}>
          Continue with Apple
        </Button>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <Link component={RouterLink} to="/signup" sx={{ color: "#a015b0ff" }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
