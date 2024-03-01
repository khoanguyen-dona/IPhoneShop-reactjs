import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';
const OrderSummary = () => {

  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id");
  const {cart}=useSelector(store=>store);
  const {order}=useSelector(store=>store);

  useEffect(()=>{
    dispatch(getOrderById(orderId));
  },[orderId])


  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border ' >
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:px-16  relative mt-3' >
            <div className='col-span-2 ' >
                {order.order?.orderItems.map((item)=><CartItem key={item} item={item} />)}
            </div>

            <div className='px-5 sticky top-0 h-[20rem] mt-5 lg:mt-0 shadow-lg border' >
                <div className='' >
                    <p className='font-bold opacity-60 pb-4  ' >Price details</p>
                    <hr />
                    <div className='space-y-5 font-semibold mt-5 ' >
                        <div className='flex justify-between  ' >
                            <span>Price :</span>
                            <span>{order.order?.totalPrice} đ</span>
                        </div>
                        <div className='flex justify-between   ' >
                            <span>Discount : </span>
                            <span>{order.order?.discount} đ</span>
                        </div>
                        <div className='flex justify-between   ' >
                            <span>Delivery charges :</span>
                            <span>0 đ</span>
                        </div>
                        <div className='flex justify-between font-bold  ' >
                            <span>Total Amount :</span>
                            <span>{order.order?.totalDiscountedPrice} đ</span>
                        </div>
                        <div>
                            <Button className='w-full mt-5 '  variant='contained' >Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default OrderSummary