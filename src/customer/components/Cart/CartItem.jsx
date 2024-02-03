import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Button } from '@mui/material';




const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md  mt-3' >
        <div className='flex items-center' >
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]' >
                <img className='w-full h-full object-cover object-top' src="https://shopdunk.com/images/thumbs/0012165_iphone-11-128gb_240.jpeg" alt="" />
            </div>  
            <div className='ml-5 space-y-1' >
                <p className='font-bold text-lg' >Iphone 14</p>
                <p>Price : 21.900.000 đ</p>   
                <p>Size : 64 GB</p>
                <p>Color : black</p>
            </div>
        </div>
        <div className='flex  lg:flex items-center lg:space-x-10 pt-4 lg:text-lg' >
            <div>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <p className='text-lg border px-7 py-1 rounded-sm' >2</p>
            </div>
            <div>
                <IconButton sx={{color:""}} >
                    <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div className='text-lg'>
                <Button>Remove</Button>
            </div>
            
        </div>

    </div>
  )
}

export default CartItem