import { Box, Button, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from './assets/LOGO.png';


function Header() {
  return ( 
   <>
    <Box sx={{ flexGrow: 1 }}>
      <Box position="static" color='white'>

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
      </Box>
    </Box>
   </>
  )
}

export default Header;