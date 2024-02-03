import React from 'react'
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';


const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black',color:'white',py:3}} >
            <Grid item xs={12} sm={6} md={3} >
                <Typography className='pb-5' variant='h6' >Company</Typography>
                <Typography className='pb-5' variant='h6' gutterBotttom>About</Typography>

            </Grid>
        </Grid>
    </div>
  )
}

export default Footer