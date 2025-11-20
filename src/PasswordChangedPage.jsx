import React from "react";
import {
  Box,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

const PasswordChangedPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fcf6f6ff",
      }}
    >
     
      <Box
        sx={{
          width: { xs: "90%", sm: 420 },
          maxWidth: 480,
          p: 4, 
          position: "relative",
          bgcolor: "white", 
          textAlign: 'center',
          borderRadius: 2, 
        }}
      >
      
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: "#5f0c72ff", 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto', 
            mb: 4,
            boxShadow: '0 8px 15px rgba(108, 60, 209, 0.4)',
          }}
        >
          <CheckIcon sx={{ color: 'white', fontSize: 60 }} />
        </Box>

        <Typography
          variant="h5"
          sx={{ color: "#5f0c72ff", fontWeight: 600, mb: 1.5 }}
        >
          Password Changed!
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Your password has been changed successfully
        </Typography>

      
        <Link 
            component={RouterLink} 
            to="/login" 
            underline="none"
            fullWidth
            sx={{ textDecoration: 'none' }}
        >
            <Button
            
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
              Go to login page
            </Button>
        </Link>
      </Box>
    </Box>
  ); 
};

export default PasswordChangedPage;