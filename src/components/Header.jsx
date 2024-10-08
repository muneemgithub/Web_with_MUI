import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
// import { Margin } from '@mui/icons-material';
import logo from './assets/Logo.jpeg';
import { green } from '@mui/material/colors';


function Header() {
  return (
   <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='white'>

        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <img className="w-50" src={logo} alt="" />
         
          <Box sx={{display:"flex"}}>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>Home</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>Service</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>Feature</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>Product</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>Testimonial</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color:"black"}}>FAQ</Typography>
             </Link>
          </Box>

          <Box>
          <Button variant="body1" sx={{color:"green"}} >Login</Button>
          <Button variant="body1" sx={{ backgroundColor: "green", color: "white"}} >Signup</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Header;