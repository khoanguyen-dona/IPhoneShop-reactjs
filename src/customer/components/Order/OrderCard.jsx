import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const OrderCard = () => {
    const navigate=useNavigate(); 
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)}  className='border p-5 shadow-lg hover:border-blue-500 rounded-md   ' >
        <Grid container spacing={2} sx={{justifyContent:'space-between'}} >
            <Grid item xs={6} >
                <div className='flex cursor-pointer' >
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://shopdunk.com/images/thumbs/0012164_iphone-11-64gb_240.webp" alt="" />
                    <div className='ml-5 space-y-2' >
                        <p className='font-semibold' >Iphone 14</p>
                        <p>Size : 64 GB</p>
                        <p>Color : black</p>
                        <p>Price : 21.900.000 đ</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} >
                <p>Qty : 1</p>
            </Grid>
            <Grid item xs={4} >
                <span>
                    Delivered On March 03 2023
                </span>        
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard