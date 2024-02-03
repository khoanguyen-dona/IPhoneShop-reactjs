import React from 'react'
import { Grid, Avatar, Box, Rating } from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div className='' >
        <Grid container spacing={2} gap={3} >
            <Grid item xs={1} >
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:'grey'}}  >R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9} >
                <div className='space-y-2' >
                    <div>
                        <p className='font-bold' >Raam </p>
                        <p className='opacity-50' >April 5, 2023</p>
                    </div> 
                </div>
                <Rating value={3.5} name='half-rating' readOnly precision={0.5}/>
                <p>Nice product ,i love this!</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard