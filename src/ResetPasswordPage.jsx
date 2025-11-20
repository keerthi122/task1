import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";


const ResetPasswordPage = () => {

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
        backgroundColor: "#fcfcfcff", 
      }}
    >
     
      <Box
        sx={{
          width: { xs: "90%", sm: 420 },
          maxWidth: 480,
          p: 2,
          position: "relative",
          bgcolor: "white", 
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Box textAlign="center" mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#5f0c72ff", fontWeight: 600, mb: 1 }}
            >
              Verification successful!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter the your new password
            </Typography>
        </Box>

 
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Password"
            type="password"
            InputProps={customInputStyle(<LockOutlinedIcon />).startAdornment}
            sx={{
              mb: 2.5, 
              ...customInputStyle().sx,
            }}
        />

      
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Confirm Password"
            type="password"
            InputProps={customInputStyle(<LockOutlinedIcon />).startAdornment}
            sx={{
              mb: 2.5, 
              ...customInputStyle().sx,
            }}
        />

      
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{ 
                color: "#6C3CD1", 
                "&.Mui-checked": { 
                  color: "#6C3CD1" 
                } 
              }}
            />
          }
          label={<Typography fontSize={14} color="black" >Remember me</Typography>}
          sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start', ml: 1 }} 
        />

        
        <Button
          component={RouterLink}
          to="/password-changed"
          fullWidth
          
          sx={{
           background: "linear-gradient(to right, #5f0c72ff, #050504ff)",
            color: "white",
            py: 1.5, 
            borderRadius: 3,
            fontWeight: "bold",
            boxShadow: "0 8px 15px rgba(108, 60, 209, 0.5)",
            "&:hover": { background: "linear-gradient(to right, #961398ff, #771773ff)" },
          }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  ); 
};

export default ResetPasswordPage;