import React from 'react'
import {Box, Link, Typography} from '@mui/material'

const Navbar = () => {
  return (
    <Box 
    width={'100%'}
    textAlign={'center'}
    p="1rem 6%"
    sx={{ boxShadow: 3, mb: 2 }}
     >
        <Typography variant="h1" color="black" fontWeight="bold">
        TEXT SUMMARIZER
      </Typography>
      <Link href='/register' p={"2"}>Sign up</Link>
      <Link href='/login' p={"5"}>Sign In</Link>
    </Box>
    
  )
}

export default Navbar