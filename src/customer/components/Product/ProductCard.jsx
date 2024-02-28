import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)}  className='productCard ml-2 mt-2  p-2 lg:w-[16rem]  cursor-pointer xs:w-[6rem]  ' >
        <div className='h-[20rem]' >
            <img className='h-full w-full  object-cover'  src={product.imageUrl} alt="" /> 
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold' >{product.title} </p>
            </div>  
            <div className='flex items-center space-x-1' >
                <p>{product.discountedPrice}đ</p>
                <p className='line-through opacity-50  ' >{product.price}đ</p>   
                <p className=' opacity-50 ' >-{product.discountPercent}%</p>
            </div> 
            <div>
                <p>Color : {product.color}</p>
            </div> 
        </div> 
    </div>
  )
}

export default ProductCard