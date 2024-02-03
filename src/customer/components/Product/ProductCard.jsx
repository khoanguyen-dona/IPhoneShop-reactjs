import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)}  className='productCard ml-2 mt-2  p-2 lg:w-[16rem]  cursor-pointer xs:w-[6rem]  ' >
        <div className='h-[20rem]' >
            <img className='h-full w-full  object-cover'  src={product.imageUrl} alt="" /> 
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold' >{product.name} </p>
            </div>  
            <div className='flex items-center space-x-1' >
                <p>{product.price}đ</p>
                <p className='line-through opacity-50  ' >{product.second_price}đ</p>
                <p className=' opacity-50 ' >-%</p>
            </div>  
        </div> 
    </div>
  )
}

export default ProductCard