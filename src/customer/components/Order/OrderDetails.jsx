import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';



const OrderDetails = () => {
  return (
    <div className='px-5  lg:px-20 mt-10  ' >
        <div className='border shadow-lg p-5 rounded-lg ' >
            <h1 className='font-bold' >Delivery Address :</h1>
            <AddressCard/>
        </div>
        <div className='mt-10 ' >
          <OrderTracker activeStep={2}/>
        </div>
        <div>
          <Grid className=' mt-10' container  >
            {[1,1,1,1].map((item)=>
            <Grid item container className='shadow-xl rounded-md p-5 border  ' sx={{alignItems:'center',justifyContent:'space-between'}}  >
              <Grid item  >
                <div className='flex items-center space-x-4' >
                  <img className='w-[7rem] h-[7rem] object-cover object-top ' src="https://shopdunk.com/images/thumbs/0012164_iphone-11-64gb_240.webp" alt="" />
                  <div className='space-y-2 ' >
                    <p className='font-bold' >Iphone 14</p>
                    <p className='space-x-5' ><span>Color : <span className='font-semibold' >black</span> </span>
                      <span> Size : <span className='font-semibold' >64 GB</span> </span>  </p>
                    <p>Price : 21.900.000 đ</p>
                  </div>
                </div>
              </Grid>
              <Grid item  >
                <Box  >
                  <StarBorderIcon sx={{fontSize:'4rem'}} className='px-2'  />
                  <span>Rate & Review </span>
                </Box>
              </Grid>
            </Grid>
            )}
          </Grid>
        </div>
    </div>
  )
}

export default OrderDetails