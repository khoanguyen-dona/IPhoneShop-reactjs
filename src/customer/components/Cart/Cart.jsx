import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'




const Cart = () => {
    const navigate=useNavigate()
    const handleCheckout=()=>{
        navigate('/checkout?step=2')
    }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16  relative mt-3' >
            <div className='col-span-2 ' >
                {[1,1,1,1].map((item)=><CartItem/>)}
            </div>

            <div className='px-5 sticky top-0 h-[20rem] mt-5 lg:mt-0 shadow-lg border' >
                <div className='' >
                    <p className='font-bold opacity-60 pb-4  ' >Price details</p>
                    <hr />
                    <div className='space-y-5 font-semibold mt-5 ' >
                        <div className='flex justify-between  ' >
                            <span>Price</span>
                            <span>21.900.000 đ</span>
                        </div>
                        <div className='flex justify-between   ' >
                            <span>Discount</span>
                            <span>0 đ</span>
                        </div>
                        <div className='flex justify-between   ' >
                            <span>Delivery charges:</span>
                            <span>0 đ</span>
                        </div>
                        <div className='flex justify-between font-bold  ' >
                            <span>Total Amount</span>
                            <span>21.900.000 đ</span>
                        </div>
                        <div>
                            <Button className='w-full mt-5 '  variant='contained' onClick={handleCheckout} >Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart