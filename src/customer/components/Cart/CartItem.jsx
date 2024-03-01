import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../../State/Cart/Action';
import { removeCartItem } from '../../../State/Cart/Action';

const CartItem = ({item}) => {

    const dispatch=useDispatch();

    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num},cartItemId:item?.id};
        dispatch(updateCartItem(data));
    }
    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item.id));
    }
  return (
    <div className='p-5 shadow-lg border rounded-md  mt-3' >
        <div className='flex items-center' >
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]' >
                <img className='w-full h-full object-cover object-top' 
                src={item.product.imageUrl} alt="" />
            </div>  
            <div className='ml-5 space-y-1' >
                <p className='font-bold text-lg' >{item.product.title}</p>
                <p>Price : {item.discountedPrice} đ    <strike>{item.price} đ</strike>  </p>   
                <p>Size : {item.size}</p>
                <p>Color : {item.product.color}</p>
            </div>
        </div>
        <div className='flex  lg:flex items-center lg:space-x-10 pt-4 lg:text-lg' >
            <div>
                <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}  >
                    <RemoveCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <p className='text-lg border px-7 py-1 rounded-sm' >{item.quantity}</p>
            </div>
            <div>
                <IconButton   onClick={()=>handleUpdateCartItem(1)}  >
                    <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div className='text-lg'>
                <Button onClick={handleRemoveCartItem} >Remove</Button>
            </div>
            
        </div>

    </div>
  )
}

export default CartItem