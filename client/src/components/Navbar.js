import React from "react";
import { Box, Typography, useTheme, Button, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ display: 'flex' }} >
      <AppBar component="nav" sx={{ backgroundColor: theme.palette.background.alt }} p="3rem">
        <Toolbar>  
          <Typography
            variant="h2"
            component="div"
            fontWeight="bold"
            p="1rem"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AI Based Language Tool
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
            <Button sx={{ color: '#fff' }}>Home</Button>
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
          <Button sx={{ color: '#fff' }}>Logout</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
          <Button sx={{ color: '#fff' }}>Sign Up</Button>
          </NavLink>
          <NavLink to="/login" p={1}>
          <Button sx={{ color: '#fff' }}>Sign In</Button>
          </NavLink>
        </>
      )} 
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar/>
      <Toolbar/>      
    </Box>
  );
};

export default Navbar;