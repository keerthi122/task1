import React from "react";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const VerificationCodeInputs = () => {
  
  const inputs = Array.from({ length: 6 }, (_, index) => (
    <TextField
      key={index}
      variant="outlined"
      size="small"
      
      sx={{
        width: '40px',
        mx: 0.5,
        textAlign: 'center',
        '& .MuiOutlinedInput-root': {
          padding: '0 5px',
          borderRadius: 0,
          '& fieldset': {
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '2px dashed #999', 
          },
          '&:hover fieldset': {
            borderColor: '#6C3CD1 !important', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6C3CD1 !important', 
          },
          '& input': {
            p: 1.5,
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          },
        },
      }}
      inputProps={{
        maxLength: 1, 
        style: { textAlign: 'center' }
      }}
      
    />
  ));

  return <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>{inputs}</Box>;
};

const VerificationPage = () => {
 
  const targetEmail = "manx@gmail.com";

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "white", 
        
      }}
    >
   
      <Box
        sx={{
          width: { xs: "90%", sm: 420 },
          maxWidth: 480,
          p: 2,
          position: "relative",
          textAlign: 'center',
        }}
      >
        <Box textAlign="center" mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#a015b0ff", fontWeight: 600, mb: 1 }}
            >
              Enter Verification code
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={4}>
              Enter 6 digit code sent to{" "}
              <Typography component="span" sx={{ color: "#a015b0ff", fontWeight: 600 }}>
                {targetEmail}
              </Typography>
            </Typography>
        </Box>

       
        <VerificationCodeInputs />

      
        <Button
        
         component={RouterLink}
         to="/reset-password"
          fullWidth
          sx={{
            background: "linear-gradient(to right, #5f0c72ff, #050504ff)", 
            color: "white",
            py: 1.5, 
            borderRadius: 3,
            fontWeight: "bold",
            boxShadow: "0 8px 15px rgba(108, 60, 209, 0.5)",
            "&:hover": { background: "linear-gradient(to right, #961398ff, #771773ff)" },
            maxWidth: 200, 
            margin: '0 auto',
            display: 'block',
            mt: 4, 
          }}
        >
          Verify
        </Button>
        
      
        <Box mt={4}>
            <Link
                component={RouterLink}
                to="/forgot-password" 
                underline="none"
                sx={{ 
                    color: "black", 
                    fontWeight: 600, 
                    display: 'inline-flex',
                    alignItems: 'center',
                    py: 1,
                    '& .MuiSvgIcon-root': { mr: 0.5 }
                }}
            >
                <ArrowBackIcon fontSize="small" />
                Back
            </Link>
        </Box>

      </Box>
    </Box>
  ); 
};

export default VerificationPage;