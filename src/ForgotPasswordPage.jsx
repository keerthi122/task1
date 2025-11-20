import React from "react";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPasswordPage = () => {
 
  const customInputStyle = (icon) => ({
    startAdornment: (
      <InputAdornment position="start" sx={{ color: "#aaa" }}>
        {icon}
      </InputAdornment>
    ),
    sx: {
     
      "& .MuiInputBase-input": {
        py: '13.5px', 
      },
 
      "& .MuiOutlinedInput-root": { borderRadius: 3, borderColor: '#eee' },
    }
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
      }}
    >
    

      <Box
        sx={{
          width: { xs: "90%", sm: 420 },
          maxWidth: 480,
          p: 2,
          position: "relative",
          zIndex: 1, 
          bgcolor: "white", 
          textAlign: 'center',
        }}
      >
        <Box textAlign="center" mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#a015b0ff", fontWeight: 600, mb: 1 }}
            >
              Forgot password
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Code will be sent to your email to help reset password
            </Typography>
        </Box>

    
        <TextField
            fullWidth
            variant="outlined"
            placeholder="enter your email ID"
          
            InputProps={customInputStyle(<EmailOutlinedIcon />).startAdornment.startAdornment ? customInputStyle(<EmailOutlinedIcon />) : { startAdornment: customInputStyle(<EmailOutlinedIcon />).startAdornment }}
            sx={{
              mb: 4, 
              ...customInputStyle().sx,
            }}
        />

       
        <Button
         component={RouterLink}
         to="/verify"
          fullWidth
          sx={{
             background: "linear-gradient(to right, #5f0c72ff, #050504ff)",
            color: "white",
            py: 1.5, 
            borderRadius: 3,
            fontWeight: "bold",
            boxShadow: "0 8px 15px rgba(192, 60, 209, 0.5)",
            "&:hover": { background: "linear-gradient(to right, #961398ff, #771773ff)" },
          }}
        >
          Send
        </Button>

        <Box mt={3} mb={3}>
            <Typography variant="body2" color="text.secondary" display="inline">
              Didn't receive code?{" "}
            </Typography>
            <Link
                href="#"
                underline="none"
                sx={{ color:"#a015b0ff", fontWeight: 600 }}
            >
              Resend
            </Link>
        </Box>
        
        
        <Link
            component={RouterLink}
            to="/login"
            underline="none"
            sx={{ 
                color: "#a015b0ff", 
                fontWeight: 600, 
                display: 'inline-flex',
                alignItems: 'center',
                '& .MuiSvgIcon-root': { mr: 0.5 }
            }}
        >
            <ArrowBackIcon fontSize="small" />
            Back
        </Link>

      </Box>
    </Box>
  ); 
};

export default ForgotPasswordPage;